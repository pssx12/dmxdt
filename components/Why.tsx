export default function Why() {
  return (
    <section id="why" className="dmxdt-section bg-[#050505] text-[#f5f1e8]">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="sticky top-28 max-lg:static">
          <p className="dmxdt-eyebrow">Why DMXDT</p>
          <h2 className="mt-8 text-[clamp(72px,13vw,190px)] font-black uppercase leading-[0.78] tracking-[-0.09em]">
            Why?
          </h2>
        </div>

        <div>
          <p className="text-[clamp(36px,5.4vw,76px)] font-black leading-[0.95] tracking-[-0.07em]">
            We don&apos;t question
            <br />
            to destroy.
            <br />
            <br />
            We question
            <br />
            to understand.
          </p>

          <div className="my-14 h-px w-full bg-gradient-to-r from-[#f5f1e8]/40 to-transparent" />

          <p className="dmxdt-copy">
            우리는 세상을 부정하기 위해 질문하지 않습니다.
            <br />
            더 나은 판단을 위해 질문합니다.
            <br />
            더 깊이 이해하기 위해 확인합니다.
            <br />
            그리고 오래 남는 가치를 만듭니다.
          </p>

          <div className="mt-16 grid gap-4 text-xl font-black uppercase tracking-[-0.04em] sm:grid-cols-2 lg:grid-cols-4">
            {['Question', 'Verify', 'Understand', 'Build'].map((item) => (
              <div key={item} className="border border-[#f5f1e8]/12 bg-white/[0.025] p-6 transition hover:border-[#c47a3a]/70 hover:bg-[#c47a3a]/10">
                {item}.
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
