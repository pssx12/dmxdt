import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#050505] px-6 text-[#f5f1e8]">
      <div className="dmxdt-noise pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center text-center">
        <Image
          src="/logo/dmxdt-eye-official.png"
          alt="DMXDT"
          width={560}
          height={360}
          priority
          className="dmxdt-rise dmxdt-pulse mb-8 h-auto w-[min(560px,78vw)] select-none object-contain drop-shadow-[0_24px_90px_rgba(196,122,58,0.20)]"
        />

        <p className="dmxdt-rise delay-1 mb-6 text-[11px] uppercase tracking-[0.36em] text-[#a49b90] md:text-xs">
          Dirty Mind × Doubting Thomas
        </p>

        <h1 className="dmxdt-rise delay-2 dmxdt-display">
          Question
          <br />
          Everything.
        </h1>

        <p className="dmxdt-rise delay-3 mt-8 text-[clamp(20px,2.4vw,34px)] font-semibold leading-tight text-[#f5f1e8]/90">
          Not to reject the world.
          <br />
          To understand it better.
        </p>

        <p className="dmxdt-rise delay-4 mt-9 max-w-2xl text-[clamp(17px,2vw,23px)] leading-9 text-[#d2cabf]">
          세상을 부정하기 위해서가 아니라,
          <br />
          더 깊이 이해하기 위해 질문합니다.
        </p>

        <a
          href="#why"
          className="dmxdt-rise delay-5 group mt-12 inline-flex items-center gap-3 rounded-full border border-[#f5f1e8]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] transition duration-300 hover:border-[#f5f1e8] hover:bg-[#f5f1e8] hover:text-[#050505]"
        >
          Enter The Journey
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
