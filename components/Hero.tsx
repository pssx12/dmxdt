import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#050505] px-5 text-[#f5f1e8] md:px-[6vw]">
      <div className="dmxdt-noise pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center pb-16 pt-28 text-center">
        <Image
          src="/logo/dmxdt-eye-official.png"
          alt="DMXDT 공식 Eye Mark"
          width={460}
          height={300}
          priority
          className="dmxdt-rise mb-8 h-auto w-[min(460px,68vw)] select-none object-contain drop-shadow-[0_24px_90px_rgba(196,122,58,0.20)]"
        />

        <p className="dmxdt-rise delay-1 mb-6 text-[11px] uppercase tracking-[0.32em] text-[#a49b90] md:text-xs">
          Dirty Mind × Doubting Thomas
        </p>

        <h1 className="dmxdt-rise delay-2 text-[clamp(52px,10vw,140px)] font-black uppercase leading-[0.84] tracking-[-0.08em]">
          Question
          <br />
          Everything.
        </h1>

        <p className="dmxdt-rise delay-3 mt-8 text-[clamp(19px,2.4vw,32px)] font-semibold leading-tight text-[#f5f1e8]/90">
          Not to reject the world.
          <br />
          To understand it better.
        </p>

        <p className="dmxdt-rise delay-4 mt-8 max-w-2xl text-[clamp(16px,2vw,22px)] leading-9 text-[#d2cabf]">
          세상을 부정하기 위해서가 아니라,
          <br />
          더 깊이 이해하기 위해 질문합니다.
        </p>

        <a
          href="#brand"
          className="dmxdt-rise delay-5 mt-10 inline-flex min-h-14 items-center justify-center border border-[#f5f1e8]/60 px-7 text-xs font-black tracking-[0.16em] transition hover:bg-[#f5f1e8] hover:text-[#050505]"
        >
          브랜드 철학 보기
        </a>
      </div>
    </section>
  );
}
