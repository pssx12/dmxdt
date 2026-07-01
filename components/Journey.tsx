const items = [
  ['01','APPAREL','좋은 옷으로 질문을 입습니다.'],
  ['02','PLACE','카페, 식당, 정원. 생각이 머무는 공간.'],
  ['03','STAY','모텔과 프라이빗 스파. 쉼의 방식을 다시 묻습니다.'],
  ['04','LIFE COMMUNITY','삶의 마지막까지 이어지는 공동체.'],
];
export default function Journey() {
  return (
    <section id="journey" className="section">
      <p className="eyebrow">JOURNEY</p>
      <h2 className="title">하나의 철학,\n여러 개의 세계.</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {items.map(([num,title,copy]) => (
          <article key={title} className="min-h-[260px] border border-white/10 bg-[#0d0d0d] p-8 flex flex-col justify-between">
            <span className="text-xs tracking-[.2em] text-[#8f887e]">{num}</span>
            <div><h3 className="mb-4 text-3xl font-black">{title}</h3><p className="leading-7 text-[#cfc6ba]">{copy}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
