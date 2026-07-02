const items = [
  ['Dirty Mind', '상상력을 두려워하지 않는 마음. 틀을 깨고 가능성을 발견하는 태도.'],
  ['Doubting Thomas', '맹목적으로 믿지 않는 태도. 확인하고, 검증하고, 책임 있게 판단하는 힘.'],
  ['Together', '상상과 검증이 만날 때 지혜가 만들어집니다.'],
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="dmxdt-section bg-[#080808] text-[#f5f1e8]">
      <div className="mx-auto max-w-6xl">
        <p className="dmxdt-eyebrow">Philosophy</p>
        <h2 className="dmxdt-title mt-8">
          Question.
          {'\n'}Verify.
          {'\n'}Build What Lasts.
        </h2>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {items.map(([title, copy]) => (
            <article key={title} className="min-h-[320px] border border-[#f5f1e8]/12 bg-[#050505] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c47a3a]/70">
              <h3 className="text-3xl font-black tracking-[-0.06em]">{title}</h3>
              <p className="mt-8 text-lg leading-8 text-[#d2cabf]">{copy}</p>
            </article>
          ))}
        </div>

        <p className="mt-20 max-w-4xl text-[clamp(30px,5vw,72px)] font-black leading-[0.95] tracking-[-0.07em]">
          Truth is not inherited.
          <br />
          It is discovered.
        </p>
      </div>
    </section>
  );
}
