export default function Hero() {
  return (
    <section id="home" className="relative bg-[#070707] px-5 text-[#f2f0eb] md:px-[5vw]">
      <div className="mx-auto flex min-h-[100svh] max-w-[1440px] flex-col items-center justify-center pb-10 pt-24 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#77746f] sm:text-xs">
          Dirty Mind × Doubting Thomas
        </p>

        <h1 className="mt-5 text-[clamp(72px,17vw,244px)] font-black uppercase leading-[0.8] tracking-[-0.09em]">
          DMXDT
        </h1>

        <div className="mt-10 h-px w-10 bg-[#5e5a55]" aria-hidden="true" />

        <p className="mt-9 text-[clamp(24px,3.1vw,46px)] font-semibold leading-[1.28] tracking-[-0.055em]">
          당연하다고 믿는 순간,<br className="sm:hidden" /> 생각은 멈춥니다.
        </p>

        <p className="mt-6 max-w-2xl text-[14px] leading-7 text-[#9a9690] sm:text-[17px] sm:leading-8">
          우리는 정답을 말하지 않습니다.<br />
          익숙한 시선을 흔들고, 스스로 다시 보게 합니다.
        </p>

        <p className="absolute bottom-7 left-0 right-0 text-[9px] uppercase tracking-[0.3em] text-[#55524e] sm:text-[10px]">
          Question Everything
        </p>
      </div>
    </section>
  );
}
