export default function Hero() {
  return (
    <section id="home" className="min-h-[88vh] bg-[#050505] px-5 text-[#f5f1e8] md:px-[6vw]">
      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center pb-16 pt-28 text-center">
        <p className="dmxdt-rise text-[11px] uppercase tracking-[0.34em] text-[#a49b90] md:text-xs">
          Dirty Mind × Doubting Thomas
        </p>

        <h1 className="dmxdt-rise delay-1 mt-8 text-[clamp(54px,10vw,142px)] font-black uppercase leading-[0.84] tracking-[-0.08em]">
          Question
          <br />
          Everything.
        </h1>

        <p className="dmxdt-rise delay-2 mt-10 max-w-3xl text-[clamp(19px,2.5vw,32px)] font-semibold leading-[1.45] tracking-[-0.04em] text-[#f5f1e8]/90">
          익숙한 것을 다르게 보고,<br />
          믿기 전에 끝까지 확인합니다.
        </p>

        <p className="dmxdt-rise delay-3 mt-7 max-w-2xl text-[clamp(15px,1.7vw,19px)] leading-8 text-[#a49b90]">
          자유로운 상상과 집요한 검증.<br />
          DMXDT는 그 사이에서 오래 남을 물건을 만듭니다.
        </p>
      </div>
    </section>
  );
}
