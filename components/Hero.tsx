import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-6 text-[#f5f1e8]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(180,20,45,0.22),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.08),transparent_34%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center text-center">
        <Image
          src="/logo/dmxdt-eye-official.png"
          alt="DMXDT official logo"
          width={560}
          height={360}
          priority
          className="dmxdt-fade-up mb-8 h-auto w-[min(560px,78vw)] object-contain drop-shadow-[0_24px_90px_rgba(180,20,45,0.28)]"
        />

        <p className="dmxdt-fade-up dmxdt-delay-1 mb-5 text-[11px] uppercase tracking-[0.34em] text-[#a49b90]">
          Dirty Mind × Doubting Thomas
        </p>

        <h1 className="dmxdt-fade-up dmxdt-delay-2 text-[clamp(52px,9vw,136px)] font-black uppercase leading-[0.86] tracking-[-0.075em]">
          Question
          <br />
          Everything.
        </h1>

        <div className="dmxdt-fade-up dmxdt-delay-3 mt-8 grid gap-2 text-[clamp(18px,2.2vw,30px)] font-semibold text-[#f5f1e8]/90">
          <span>Think deeper.</span>
          <span>Verify everything.</span>
          <span>Build what remains.</span>
        </div>

        <div className="dmxdt-fade-up dmxdt-delay-4 my-10 h-px w-[min(560px,78vw)] bg-gradient-to-r from-transparent via-[#f5f1e8]/40 to-transparent" />

        <p className="dmxdt-fade-up dmxdt-delay-5 max-w-2xl text-[clamp(17px,2vw,24px)] leading-9 text-[#d2cabf]">
          우리는 세상을 있는 그대로 믿지 않습니다.
          <br />
          질문하고, 검증하고, 행동하며,
          <br className="hidden md:block" />
          오래 남을 가치를 만듭니다.
        </p>

        <a
          href="#why"
          className="dmxdt-fade-up dmxdt-delay-6 group mt-12 inline-flex items-center gap-3 rounded-full border border-[#f5f1e8]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] transition duration-300 hover:bg-[#f5f1e8] hover:text-[#050505]"
        >
          Enter
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}