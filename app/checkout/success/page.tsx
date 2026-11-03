'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CheckoutSuccessPage() {
  const [state, setState] = useState<'confirming' | 'success' | 'awaiting_deposit' | 'review' | 'fail'>('confirming');
  const [message, setMessage] = useState('결제 승인 및 주문 기록을 확인하고 있습니다.');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentKey = params.get('paymentKey');
    const orderId = params.get('orderId');
    const amount = Number(params.get('amount'));
    if (!paymentKey || !orderId || !Number.isInteger(amount)) {
      setState('fail');
      setMessage('결제 승인 정보가 누락되었습니다.');
      return;
    }
    fetch('/api/payments/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentKey, orderId, amount }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          if (data.code === 'ORDER_REVIEW_REQUIRED' || data.code === 'PAYMENT_RESULT_UNKNOWN') {
            setState('review');
            setMessage((data.message || '결제 상태를 확인해야 합니다.') + ' 주문번호: ' + orderId);
            return;
          }
          setState('fail');
          setMessage(data.message || '결제 승인이 완료되지 않았습니다.');
          return;
        }
        if (data.status === 'awaiting_deposit') {
          setState('awaiting_deposit');
          setMessage('결제수단의 입금이 아직 완료되지 않았습니다. 입금 완료 전에는 주문이 확정되지 않습니다. 주문번호: ' + orderId);
          return;
        }
        if (data.status !== 'paid') throw new Error('결제 상태를 확인하지 못했습니다.');
        setState('success');
        setMessage(amount.toLocaleString('ko-KR') + '원 결제가 승인되었습니다. 주문번호: ' + orderId);
      })
      .catch((error) => {
        setState('review');
        setMessage((error instanceof Error ? error.message : '결제 승인 결과를 확인하지 못했습니다.')
          + ' 결제 완료 여부를 확인하기 전에는 다시 결제하지 말고 고객센터에 문의해 주세요. 주문번호: ' + orderId);
      });
  }, []);

  return (
    <main className="flex min-h-screen items-center bg-[#050505] px-6 text-[#f5f1e8]">
      <div className="mx-auto w-full max-w-3xl border border-white/10 bg-[#0b0b0b] p-8 md:p-14">
        <p className="dmxdt-eyebrow">{state === 'success' ? 'Payment Complete' : state === 'awaiting_deposit' ? 'Awaiting Deposit' : state === 'review' ? 'Payment Review' : state === 'fail' ? 'Payment Failed' : 'Confirming Payment'}</p>
        <h1 className="mt-7 text-5xl font-black tracking-[-0.07em] md:text-7xl">{state === 'success' ? 'Order confirmed.' : state === 'awaiting_deposit' ? 'Awaiting payment.' : state === 'review' ? 'Check required.' : state === 'fail' ? 'Payment failed.' : 'Please wait.'}</h1>
        <p className="mt-7 text-lg leading-8 text-[#a49b90]">{message}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {state === 'fail' && <Link href="/checkout" className="inline-flex bg-[#f5f1e8] px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#050505]">Try Again</Link>}
          <Link href="/" className="inline-flex border border-[#c47a3a] px-6 py-4 text-xs font-black uppercase tracking-[0.2em]">DMXDT Home</Link>
        </div>
      </div>
    </main>
  );
}
