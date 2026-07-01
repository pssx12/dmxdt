import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-[8vw] bg-[radial-gradient(circle_at_50%_44%,#242424,transparent_30%),#050505]">
      <Image src="/logo/dmxdt-eye-official.png" alt="DMXDT official eye symbol" width={420} height={260} priority className="w-[min(420px,72vw)] h-auto mb-10 drop-shadow-2xl" />
      <p className="eyebrow">DIRTY MIND × DOUBTING THOMAS</p>
      <h1 className="title">Question Everything.</h1>
      <p className="copy mx-auto">세상을 그대로 받아들이지 않습니다. 질문하고, 확인하고, 행동하며, 오래 남을 것을 만듭니다.</p>
      <a href="#why" className="mt-10 rounded-full border border-[#f5f1e8] px-8 py-4 text-xs tracking-[.18em]">ENTER</a>
    </section>
  );
}
