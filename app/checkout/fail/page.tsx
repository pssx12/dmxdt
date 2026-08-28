'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CheckoutFailPage() {
  const [reason, setReason] = useState('결제가 취소되었거나 결제수단 인증을 완료하지 못했습니다.');
  const [code, setCode] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setReason(params.get('message') || '결제가 취소되었거나 결제수단 인증을 완료하지 못했습니다.');
    setCode(params.get('code') || '');
  }, []);

  return (
    <main className="flex min-h-screen items-center bg-[#050505] px-6 text-[#f5f1e8]">
      <div className="mx-auto w-full max-w-3xl border border-white/10 bg-[#0b0b0b] p-8 md:p-14">
        <p className="dmxdt-eyebrow">Payment Incomplete</p>
        <h1 className="mt-7 text-5xl font-black tracking-[-0.07em] md:text-7xl">Payment not completed.</h1>
        <p className="mt-7 text-lg leading-8 text-[#a49b90]">{reason}</p>
        {code && <p className="mt-4 text-sm text-[#c47a3a]">오류 코드: {code}</p>}
        <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-7 text-[#79736b]">테스트 결제에서도 카드·간편결제 인증에는 본인 결제정보가 필요합니다. 실제 금액은 출금되지 않습니다.</p>
        <Link href="/checkout" className="mt-10 inline-flex border border-[#c47a3a] px-6 py-4 text-xs font-black uppercase tracking-[0.2em]">Return to checkout</Link>
      </div>
    </main>
  );
}
