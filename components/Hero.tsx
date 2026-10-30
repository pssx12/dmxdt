export default function Hero() {
  return (
    <section id="home" className="bg-[#070707] px-5 text-[#f2f0eb] md:px-[5vw]">
      <div className="mx-auto flex min-h-[100svh] max-w-[1200px] flex-col items-center justify-center pb-10 pt-24 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#8f8b84] sm:text-xs">
          Dirty Mind × Doubting Thomas
        </p>

        <h1 className="mt-5 text-[clamp(34px,6vw,78px)] font-black uppercase leading-[0.95] tracking-[-0.065em]">
          Question Everything.
        </h1>

        <div className="mt-9 h-px w-10 bg-white/25" aria-hidden="true" />

        <p className="mt-9 text-[clamp(26px,4.2vw,56px)] font-medium leading-[1.38] tracking-[-0.055em]">
          세상을 부정하기 위해서가 아니라,<br />
          당연한 것을 다시 묻고,<br />
          보이는 그대로 믿기 전에<br />
          한 번 더 생각합니다.
        </p>
      </div>
    </section>
  );
}
