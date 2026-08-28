'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

const colors = ['Black', 'Off White', 'Melange Grey'];
const sizes = ['S', 'M', 'L', 'XL'];
const paymentMethods = ['신용·체크카드', '간편결제', '무통장입금'];

export default function CheckoutPage() {
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[2]);
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState(paymentMethods[0]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const selection = useMemo(() => `${color} · ${size} · ${quantity}개`, [color, size, quantity]);

  return (
    <main className="checkout-shell min-h-screen bg-[#050505] text-[#f5f1e8]">
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
                <input aria-label="주문자 이름" className="checkout-input" placeholder="주문자 이름" />
                <input aria-label="휴대전화번호" className="checkout-input" inputMode="tel" placeholder="휴대전화번호" />
                <input aria-label="이메일" className="checkout-input sm:col-span-2" inputMode="email" placeholder="이메일" />
                <input aria-label="배송 주소" className="checkout-input sm:col-span-2" placeholder="배송 주소" />
              </div>
            </div>

            <fieldset>
              <legend className="checkout-label">결제수단</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {paymentMethods.map((item) => <button key={item} type="button" onClick={() => setPayment(item)} className={`checkout-choice justify-center ${payment === item ? 'checkout-choice-active' : ''}`}>{item}</button>)}
              </div>
            </fieldset>
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
              <div className="flex justify-between"><dt className="text-[#a49b90]">상품 금액</dt><dd>출시 전 확정</dd></div>
              <div className="flex justify-between"><dt className="text-[#a49b90]">배송비</dt><dd>출시 전 확정</dd></div>
              <div className="flex justify-between border-t border-white/10 pt-5 text-lg font-black"><dt>최종 결제금액</dt><dd>—</dd></div>
            </dl>
            <button type="button" disabled className={`w-full cursor-not-allowed bg-[#f5f1e8] px-5 py-5 text-sm font-black tracking-[0.08em] text-[#050505] ${termsAccepted ? 'opacity-55' : 'opacity-35'}`}>샘플 확정 후 결제 활성화</button>
            <p className="mt-5 text-center text-xs leading-6 text-[#79736b]">현재 실제 결제와 주문 접수는 이루어지지 않습니다.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
