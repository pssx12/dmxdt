export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#050505] px-5 text-[#eeeae3] md:px-[5vw]">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-[46%] h-80 w-80 -translate-x-1/2 rounded-full bg-[#c47a3a]/[0.04] blur-[130px] md:h-[520px] md:w-[520px]" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-[1440px] flex-col pb-12 pt-28 md:pt-32">
        <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[9px] font-bold tracking-[0.24em] text-[#77736d] sm:text-[10px]">
          <p>Dirty Mind × Doubting Thomaƨ</p>
          <p className="uppercase">Independent Brand · Korea</p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-14 text-center">
          <h1 className="text-[clamp(46px,7.6vw,108px)] font-black uppercase leading-[0.88] tracking-[-0.075em] md:whitespace-nowrap">
            Question Everything.
          </h1>

          <div className="my-10 flex items-center gap-4" aria-hidden="true">
            <span className="h-px w-12 bg-white/15" />
            <span className="h-1.5 w-1.5 rotate-45 border border-[#c47a3a]" />
            <span className="h-px w-12 bg-white/15" />
          </div>

          <p className="text-[clamp(22px,2.55vw,37px)] font-medium leading-[1.52] tracking-[-0.055em]">
            <span className="block md:whitespace-nowrap">세상을 부정하기 위해서가 아니라, 당연한 것을 다시 묻고,</span>
            <span className="block md:whitespace-nowrap">보이는 그대로 믿기 전에 한 번 더 생각합니다.</span>
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.24em] text-[#5f5b56]">
          <p>A way of seeing, thinking and choosing.</p>
          <p>DMXDT</p>
        </div>
      </div>
    </section>
  );
}
