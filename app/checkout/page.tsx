'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ANONYMOUS, loadTossPayments } from '@tosspayments/tosspayments-sdk';

const colors = ['Black', 'Off White', 'Melange Grey'];
const sizes = ['S', 'M', 'L', 'XL'];
const testPrice = 1000;
type PaymentWidgets = ReturnType<Awaited<ReturnType<typeof loadTossPayments>>['widgets']>;

declare global {
  interface Window {
    daum?: {
      Postcode: new (options: { oncomplete: (data: { zonecode: string; roadAddress: string; jibunAddress: string }) => void }) => { open: (options?: { popupTitle?: string }) => void };
    };
  }
}

export default function CheckoutPage() {
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[2]);
  const [quantity, setQuantity] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [isRequesting, setIsRequesting] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [widgetReady, setWidgetReady] = useState(false);
  const widgetsRef = useRef<PaymentWidgets | null>(null);
  const selection = useMemo(() => `${color} · ${size} · ${quantity}개`, [color, size, quantity]);
  const canTestPay = widgetReady && termsAccepted && customerName.trim() && customerPhone.trim() && customerEmail.trim() && postalCode && address && detailAddress.trim();

  const openAddressSearch = () => {
    if (!window.daum?.Postcode) {
      setPaymentError('주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 눌러주세요.');
      return;
    }
    new window.daum.Postcode({
      oncomplete: (data) => {
        setPostalCode(data.zonecode);
        setAddress(data.roadAddress || data.jibunAddress);
        setDetailAddress('');
        setPaymentError('');
        window.setTimeout(() => document.getElementById('detail-address')?.focus(), 0);
      },
    }).open({ popupTitle: 'DMXDT 배송지 주소 검색' });
  };

  useEffect(() => {
    let active = true;
    const initializeWidgets = async () => {
      try {
        const tossPayments = await loadTossPayments('test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm');
        const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });
        await widgets.setAmount({ currency: 'KRW', value: testPrice });
        await Promise.all([
          widgets.renderPaymentMethods({ selector: '#payment-method', variantKey: 'DEFAULT' }),
          widgets.renderAgreement({ selector: '#payment-agreement', variantKey: 'AGREEMENT' }),
        ]);
        if (active) {
          widgetsRef.current = widgets;
          setWidgetReady(true);
        }
      } catch (error) {
        if (active) setPaymentError(error instanceof Error ? error.message : '결제위젯을 불러오지 못했습니다.');
      }
    };
    initializeWidgets();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (widgetsRef.current) {
      widgetsRef.current.setAmount({ currency: 'KRW', value: testPrice * quantity }).catch(() => {
        setPaymentError('테스트 결제금액을 변경하지 못했습니다.');
      });
    }
  }, [quantity]);

  const requestTestPayment = async () => {
    setPaymentError('');
    setIsRequesting(true);
    try {
      const widgets = widgetsRef.current;
      if (!widgets) throw new Error('결제위젯이 아직 준비되지 않았습니다.');
      const orderId = `DMXDT-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      await widgets.requestPayment({
        orderId,
        orderName: `DMXDT Foundation 001 · ${color} · ${size}`,
        successUrl: `${window.location.origin}/checkout/success`,
        failUrl: `${window.location.origin}/checkout/fail`,
        customerEmail: customerEmail.trim(),
        customerName: customerName.trim(),
        customerMobilePhone: customerPhone.replace(/[^0-9]/g, ''),
      });
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : '결제창을 열지 못했습니다.');
      setIsRequesting(false);
    }
  };

  return (
    <main className="checkout-shell min-h-screen bg-[#050505] text-[#f5f1e8]">
      <Script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" strategy="afterInteractive" />
      <header className="border-b border-white/10 px-6 py-6 md:px-[6vw]">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-[0.18em]">DMXDT</Link>
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#a49b90]">Secure Checkout Preview</p>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:px-[6vw] lg:grid-cols-[1fr_0.76fr] lg:px-0 lg:py-20">
        <div>
          <p className="dmxdt-eyebrow">Checkout · Foundation 001</p>
          <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl">Complete your<br />selection.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#a49b90]">현재 상품은 샘플 개발 단계입니다. 아래 결제 흐름은 출시 전 확인용이며 실제 결제는 발생하지 않습니다.</p>

          <div className="mt-12 space-y-10">
            <fieldset>
              <legend className="checkout-label">색상</legend>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {colors.map((item) => (
                  <button key={item} type="button" onClick={() => setColor(item)} className={`checkout-choice ${color === item ? 'checkout-choice-active' : ''}`}>
                    <span className={`checkout-swatch checkout-swatch-${item.toLowerCase().replace(' ', '-')}`} />{item}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="flex cursor-pointer items-start gap-3 border-t border-white/10 pt-7 text-sm leading-6 text-[#a49b90]">
              <input type="checkbox" checked={termsAccepted} onChange={(event) => setTermsAccepted(event.target.checked)} className="mt-1 h-4 w-4 accent-[#c47a3a]" />
              <span>
                주문 내용을 확인했으며, 출시 시 적용되는{' '}
                <Link href="/policy" className="text-[#f5f1e8] underline underline-offset-4">배송·교환·환불 정책</Link>에 동의합니다.
              </span>
            </label>

            <fieldset>
              <legend className="checkout-label">사이즈</legend>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {sizes.map((item) => <button key={item} type="button" onClick={() => setSize(item)} className={`checkout-choice justify-center ${size === item ? 'checkout-choice-active' : ''}`}>{item}</button>)}
              </div>
            </fieldset>

            <div>
              <p className="checkout-label">수량</p>
              <div className="mt-4 inline-flex items-center border border-white/15">
                <button type="button" aria-label="수량 줄이기" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="h-12 w-12 text-xl hover:bg-white/10">−</button>
                <output className="w-14 text-center font-bold">{quantity}</output>
                <button type="button" aria-label="수량 늘리기" onClick={() => setQuantity((value) => Math.min(10, value + 1))} className="h-12 w-12 text-xl hover:bg-white/10">+</button>
              </div>
            </div>

            <div>
              <p className="checkout-label">주문자·배송 정보</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input aria-label="주문자 이름" className="checkout-input" placeholder="주문자 이름" value={customerName} onChange={(event) => setCustomerName(event.target.value)} />
                <input aria-label="휴대전화번호" className="checkout-input" inputMode="tel" placeholder="휴대전화번호" value={customerPhone} onChange={(event) => setCustomerPhone(event.target.value)} />
                <input aria-label="이메일" className="checkout-input sm:col-span-2" inputMode="email" placeholder="이메일" value={customerEmail} onChange={(event) => setCustomerEmail(event.target.value)} />
                <div className="flex gap-3 sm:col-span-2">
                  <input aria-label="우편번호" className="checkout-input min-w-0 flex-1" placeholder="우편번호" value={postalCode} readOnly />
                  <button type="button" onClick={openAddressSearch} className="shrink-0 border border-[#c47a3a] px-5 text-sm font-bold text-[#f5f1e8] transition hover:bg-[#c47a3a] hover:text-[#050505]">주소 검색</button>
                </div>
                <input aria-label="기본 주소" className="checkout-input sm:col-span-2" placeholder="주소 검색을 눌러 기본주소를 입력하세요" value={address} readOnly />
                <input id="detail-address" aria-label="상세 주소" className="checkout-input sm:col-span-2" placeholder="상세주소 (동·호수 등)" value={detailAddress} onChange={(event) => setDetailAddress(event.target.value)} />
              </div>
            </div>

            <section aria-label="토스페이먼츠 테스트 결제수단" className="overflow-hidden bg-white py-3 text-[#111]">
              <div id="payment-method" />
              <div id="payment-agreement" />
            </section>
            <p className="text-sm leading-6 text-[#a49b90]">테스트 결제도 카드·간편결제 단계에서는 본인 결제정보 입력이 필요합니다. 토스 테스트 환경이므로 실제 금액은 출금되지 않습니다.</p>
          </div>
        </div>

        <aside className="lg:pt-24">
          <div className="sticky top-8 border border-white/10 bg-[#0b0b0b] p-7 md:p-9">
            <p className="checkout-label">Order Summary</p>
            <div className="mt-7 border-y border-white/10 py-7">
              <p className="text-xs uppercase tracking-[0.24em] text-[#c47a3a]">DMXDT · Foundation 001</p>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.05em]">Premium Relaxed Fit Sweatshirt</h2>
              <p className="mt-4 text-sm text-[#a49b90]">{selection}</p>
            </div>
            <dl className="space-y-4 py-7 text-sm">
              <div className="flex justify-between"><dt className="text-[#a49b90]">테스트 상품 금액</dt><dd>{(testPrice * quantity).toLocaleString('ko-KR')}원</dd></div>
              <div className="flex justify-between"><dt className="text-[#a49b90]">배송비</dt><dd>출시 전 확정</dd></div>
              <div className="flex justify-between border-t border-white/10 pt-5 text-lg font-black"><dt>테스트 결제금액</dt><dd>{(testPrice * quantity).toLocaleString('ko-KR')}원</dd></div>
            </dl>
            <button type="button" disabled={!canTestPay || isRequesting} onClick={requestTestPayment} className={`w-full bg-[#f5f1e8] px-5 py-5 text-sm font-black tracking-[0.08em] text-[#050505] transition ${canTestPay && !isRequesting ? 'hover:bg-[#c47a3a]' : 'cursor-not-allowed opacity-35'}`}>{isRequesting ? '테스트 결제창 여는 중…' : '1,000원 테스트 결제'}</button>
            {paymentError && <p role="alert" className="mt-4 text-sm leading-6 text-[#e89b72]">{paymentError}</p>}
            <p className="mt-5 text-center text-xs leading-6 text-[#79736b]">토스페이먼츠 테스트 환경입니다. 실제 금액은 청구되지 않으며 주문도 접수되지 않습니다.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
