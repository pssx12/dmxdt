'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CheckoutSuccessPage() {
  const [state, setState] = useState<'confirming' | 'success' | 'fail'>('confirming');
  const [message, setMessage] = useState('테스트 결제를 승인하고 있습니다.');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentKey = params.get('paymentKey');
    const orderId = params.get('orderId');
    const orderToken = params.get('orderToken');
    const amount = Number(params.get('amount'));
    if (!paymentKey || !orderId || !orderToken || !Number.isInteger(amount)) {
      setState('fail');
      setMessage('결제 상태를 확인해야 합니다. 다시 결제하지 말고 고객센터에 문의해 주세요.');
      return;
    }
    fetch('/api/payments/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentKey, orderId, amount, orderToken }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || '결제 승인에 실패했습니다.');
        setState('success');
        setMessage(`${amount.toLocaleString('ko-KR')}원 결제가 정상 승인되었습니다. 주문번호는 ${orderId}입니다.`);
      })
      .catch((error) => {
        setState('fail');
        setMessage(error instanceof Error ? error.message : '결제 승인에 실패했습니다.');
      });
  }, []);

  return (
    <main className="flex min-h-screen items-center bg-[#050505] px-6 text-[#f5f1e8]">
      <div className="mx-auto w-full max-w-3xl border border-white/10 bg-[#0b0b0b] p-8 md:p-14">
        <p className="dmxdt-eyebrow">{state === 'success' ? 'Payment Complete' : state === 'fail' ? 'Payment Failed' : 'Confirming Payment'}</p>
        <h1 className="mt-7 text-5xl font-black tracking-[-0.07em] md:text-7xl">{state === 'success' ? 'Order confirmed.' : state === 'fail' ? 'Check required.' : 'Please wait.'}</h1>
        <p className="mt-7 text-lg leading-8 text-[#a49b90]">{message}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {state === 'fail' && <a href="tel:0559426878" className="inline-flex bg-[#f5f1e8] px-6 py-4 text-xs font-black tracking-[0.1em] text-[#050505]">고객센터 055-942-6878</a>}
          <Link href="/" className="inline-flex border border-[#c47a3a] px-6 py-4 text-xs font-black uppercase tracking-[0.2em]">DMXDT Home</Link>
        </div>
      </div>
    </main>
  );
}
