export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#050505] px-5 text-[#f2f0eb] md:px-[5vw]">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute right-[-8vw] top-[12%] text-[clamp(220px,36vw,560px)] font-black leading-none tracking-[-0.12em] text-white/[0.025]">?</div>
        <div className="absolute left-[8%] top-[28%] h-44 w-44 rounded-full bg-[#c47a3a]/[0.055] blur-[90px] md:h-72 md:w-72" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-between pb-10 pt-36 md:pb-12 md:pt-44">
        <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[9px] font-bold uppercase tracking-[0.28em] text-[#77736d] sm:text-[10px]">
          <p>Dirty Mind × Doubting Thomas</p>
          <p>Independent Brand · Korea</p>
        </div>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#9a958d]">Question Everything.</p>
            <h1 className="mt-5 text-[clamp(58px,10vw,148px)] font-black uppercase leading-[0.78] tracking-[-0.085em]">
              Question<br />
              <span className="text-[#d9d5ce]">Everything.</span>
            </h1>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <div className="mb-8 h-px w-12 bg-[#c47a3a]" aria-hidden="true" />
            <p className="text-[clamp(25px,3.15vw,48px)] font-medium leading-[1.42] tracking-[-0.055em]">
              세상을 부정하기 위해서가 아니라,<br />
              당연한 것을 다시 묻고,<br />
              보이는 그대로 믿기 전에<br />
              한 번 더 생각합니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#69655f]">DMXDT — A way of seeing, thinking and choosing.</p>
          <div className="flex gap-3">
            <a href="/brand" className="border border-white/20 px-5 py-3 text-[10px] font-bold tracking-[0.12em] transition hover:border-white/60">브랜드 이야기</a>
            <a href="/products" className="bg-[#eeeae3] px-5 py-3 text-[10px] font-bold tracking-[0.12em] text-[#050505] transition hover:bg-white">전체 상품</a>
          </div>
        </div>
      </div>
    </section>
  );
}
