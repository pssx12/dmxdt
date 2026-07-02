const principles = [
  ['01', 'Question', '당연한 것을 다시 묻습니다.'],
  ['02', 'Verify', '확인 없는 확신을 경계합니다.'],
  ['03', 'Understand', '정보보다 관점을 만듭니다.'],
  ['04', 'Build', '생각을 행동으로 옮깁니다.'],
  ['05', 'Legacy', '시간이 지나도 남는 가치를 만듭니다.'],
];

export default function Foundation() {
  return (
    <section id="foundation" className="dmxdt-section bg-[#050505] text-[#f5f1e8]">
      <div className="mx-auto max-w-6xl">
        <p className="dmxdt-eyebrow">Foundation</p>
        <h2 className="dmxdt-title mt-8">Five principles. One direction.</h2>
        <p className="dmxdt-copy mt-10">
          DMXDT는 질문에서 시작하지만, 질문에 머물지 않습니다. 확인하고, 이해하고, 행동하며, 오래 남는 결과를 만듭니다.
        </p>

        <div className="mt-16 divide-y divide-[#f5f1e8]/10 border-y border-[#f5f1e8]/10">
          {principles.map(([num, title, copy]) => (
            <div key={title} className="grid gap-6 py-8 md:grid-cols-[120px_1fr_1.2fr] md:items-center">
              <span className="text-sm tracking-[0.3em] text-[#c47a3a]">{num}</span>
              <strong className="text-4xl font-black uppercase tracking-[-0.07em] md:text-6xl">{title}</strong>
              <p className="text-xl leading-8 text-[#d2cabf]">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
