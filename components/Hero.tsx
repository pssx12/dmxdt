export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#050505] px-5 text-[#eeeae3] md:px-[5vw]">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#c47a3a]/[0.045] blur-[110px]" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-white/[0.025] blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-[1440px] flex-col pb-12 pt-28 md:pt-32">
        <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#77736d] sm:text-[10px]">
          <p>Dirty Mind × Doubting Thomas</p>
          <p>Independent Brand · Korea</p>
        </div>

        <div className="grid flex-1 items-stretch py-12 md:grid-cols-2 md:py-16">
          <div className="flex items-center border-b border-white/10 pb-12 md:border-b-0 md:border-r md:pb-0 md:pr-[6vw]">
            <h1 className="text-[clamp(54px,8vw,112px)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              Question<br />
              Everything.
            </h1>
          </div>

          <div className="flex items-center pt-12 md:pl-[6vw] md:pt-0">
            <div>
              <div className="mb-8 h-px w-10 bg-[#c47a3a]" aria-hidden="true" />
              <p className="text-[clamp(23px,2.55vw,38px)] font-medium leading-[1.52] tracking-[-0.055em]">
                <span className="block md:whitespace-nowrap">세상을 부정하기 위해서가 아니라,</span>
                <span className="block md:whitespace-nowrap">당연한 것을 다시 묻고,</span>
                <span className="block md:whitespace-nowrap">보이는 그대로 믿기 전에</span>
                <span className="block md:whitespace-nowrap">한 번 더 생각합니다.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5">
          <p className="text-[9px] uppercase tracking-[0.24em] text-[#5f5b56]">A way of seeing, thinking and choosing.</p>
        </div>
      </div>
    </section>
  );
}
