import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#050505] text-[#f5f1e8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(160,20,45,.22),transparent_32%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <Image
          src="/logo/dmxdt-eye-official.png"
          alt="DMXDT"
          width={560}
          height={360}
          priority
          className="dmxdt-rise mb-8 w-[min(560px,78vw)]"
        />

        <p className="dmxdt-rise delay-1 mb-6 text-xs uppercase tracking-[0.35em] text-[#a49b90]">
          Dirty Mind × Doubting Thomas
        </p>

        <h1 className="dmxdt-rise delay-2 text-[clamp(56px,10vw,150px)] font-black uppercase leading-[.85] tracking-[-.075em]">
          Question
          <br />
          Everything.
        </h1>

        <p className="dmxdt-rise delay-3 mt-8 text-[clamp(20px,2.4vw,34px)] font-semibold leading-tight text-[#f5f1e8]/90">
          Most people accept.
          <br />
          We verify.
        </p>

        <p className="dmxdt-rise delay-4 mt-10 max-w-2xl text-[clamp(17px,2vw,24px)] leading-9 text-[#d2cabf]">
          우리는 세상을 부정하기 위해 질문하지 않습니다.
          <br />
          생각을 멈추지 않기 위해 질문합니다.
        </p>

        <a
          href="#why"
          className="dmxdt-rise delay-5 group mt-12 rounded-full border border-[#f5f1e8]/70 px-8 py-4 text-xs font-bold uppercase tracking-[.24em] transition hover:bg-[#f5f1e8] hover:text-[#050505]"
        >
          Enter The Journey
          <span className="ml-3 inline-block transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}