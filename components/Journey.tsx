const items = [
  ['Now', 'The Beginning', 'DMXDT의 공식 플랫폼이 시작됩니다.'],
  ['Next', 'The Archive', '질문, 기록, 실패, 성장을 축적합니다.'],
  ['Future', 'The Community', '생각하는 사람들의 동행을 만듭니다.'],
  ['Legacy', 'Build What Lasts', '오래 남을 것을 구축합니다.'],
];

export default function Journey() {
  return (
    <section id="journey" className="dmxdt-section bg-[#080808] text-[#f5f1e8]">
      <div className="mx-auto max-w-6xl">
        <p className="dmxdt-eyebrow">Journey</p>
        <h2 className="dmxdt-title mt-8">This is not a launch. It is a beginning.</h2>

        <div className="mt-16 grid gap-5 md:grid-cols-4">
          {items.map(([time, title, copy]) => (
            <article key={title} className="min-h-[260px] border border-[#f5f1e8]/12 bg-[#050505] p-7">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c47a3a]">{time}</span>
              <h3 className="mt-12 text-3xl font-black tracking-[-0.06em]">{title}</h3>
              <p className="mt-6 leading-7 text-[#d2cabf]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
