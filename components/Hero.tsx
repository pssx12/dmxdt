export default function Hero() {
  return (
    <section id="home" className="bg-[#050505] px-5 text-[#f5f1e8] md:px-[6vw]">
      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center pb-8 pt-24 md:pb-10 md:pt-28">
        <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <p className="dmxdt-rise text-[11px] font-bold uppercase tracking-[0.34em] text-[#a49b90] md:text-xs">
              DMXDT · Dirty Mind × Doubting Thomas
            </p>
            <h1 className="dmxdt-rise delay-1 mt-7 text-[clamp(50px,8.3vw,116px)] font-black uppercase leading-[0.84] tracking-[-0.08em]">
              What did
              <br />
              you really
              <br />
              see?
            </h1>
          </div>

          <div className="dmxdt-rise delay-2 border-l border-[#c47a3a] pl-6 md:pl-8">
            <p className="text-[clamp(23px,3vw,38px)] font-black leading-[1.28] tracking-[-0.055em]">
              당신이 본 것은 진실입니까,
              <br />
              아니면 당신의 생각입니까?
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#b7afa5] md:text-[17px] md:leading-8">
              DMXDT는 물건을 만들기 위해 시작된 브랜드가 아닙니다.
              우리는 사람이 무엇을 보고, 왜 그렇게 믿으며,
              어떻게 판단하는지를 묻습니다.
            </p>
          </div>
        </div>

        <div className="dmxdt-rise delay-3 mt-10 grid border-y border-white/12 md:grid-cols-3 md:divide-x md:divide-white/12">
          <article className="py-4 md:px-5 md:first:pl-0">
            <p className="text-[10px] font-black tracking-[0.23em] text-[#c47a3a]">DIRTY MIND</p>
            <p className="mt-2 text-sm leading-6 text-[#d2cabf]">본능과 욕망이 먼저 만들어 낸 해석</p>
          </article>
          <article className="border-t border-white/12 py-4 md:border-t-0 md:px-5">
            <p className="text-[10px] font-black tracking-[0.23em] text-[#c47a3a]">DOUBTING THOMAS</p>
            <p className="mt-2 text-sm leading-6 text-[#d2cabf]">보이는 것조차 의심하고 확인하는 태도</p>
          </article>
          <article className="border-t border-white/12 py-4 md:border-t-0 md:px-5 md:last:pr-0">
            <p className="text-[10px] font-black tracking-[0.23em] text-[#c47a3a]">DMXDT</p>
            <p className="mt-2 text-sm leading-6 text-[#d2cabf]">두 시선 사이에서 스스로 답을 찾게 하는 질문</p>
          </article>
        </div>

        <div className="dmxdt-rise delay-4 mt-7 flex flex-col gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77716a] sm:flex-row sm:items-center sm:justify-between">
          <p>We do not give answers.</p>
          <p>We ask you to look again.</p>
        </div>
      </div>
    </section>
  );
}
