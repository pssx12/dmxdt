import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#050505] px-6 text-[#f5f1e8]">
      <div className="mx-auto w-full max-w-3xl border border-white/10 bg-[#0b0b0b] p-8 md:p-14">
        <p className="dmxdt-eyebrow">Payment Complete</p>
        <h1 className="mt-7 text-5xl font-black tracking-[-0.07em] md:text-7xl">Order confirmed.</h1>
        <p className="mt-7 text-lg leading-8 text-[#a49b90]">실제 결제 연동 후 주문번호와 결제 내역이 이 화면에 표시됩니다.</p>
        <Link href="/" className="mt-10 inline-flex border border-[#c47a3a] px-6 py-4 text-xs font-black uppercase tracking-[0.2em]">DMXDT Home</Link>
      </div>
    </main>
  );
}
