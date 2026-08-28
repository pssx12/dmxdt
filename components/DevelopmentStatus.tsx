const statusItems = [
  ['01', 'Business', '사업자등록 완료'],
  ['02', 'Product', '첫 상품 샘플 개발 중'],
  ['03', 'Production', '샘플 확정 후 생산 예정'],
  ['04', 'Sales', '정식 출시 전 · 판매 미개시'],
];

export default function DevelopmentStatus() {
  return (
    <section id="development" className="dmxdt-section bg-[#f5f1e8] text-[#050505]">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#9b5527]">Current Phase</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h2 className="dmxdt-title">The first product is taking shape.</h2>
          <p className="text-xl leading-9 text-[#554f48]">
            DMXDT의 첫 제품은 현재 샘플 개발 단계에 있습니다. 서두른 출시보다 원단, 핏, 봉제와 디테일을 충분히 확인한 뒤 완성된 제품으로 선보이겠습니다.
          </p>
        </div>

        <div className="mt-16 grid border-y border-black/15 md:grid-cols-4">
          {statusItems.map(([num, title, copy]) => (
            <article key={title} className="border-b border-black/15 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
              <span className="text-xs tracking-[0.3em] text-[#9b5527]">{num}</span>
              <h3 className="mt-8 text-2xl font-black uppercase tracking-[-0.05em]">{title}</h3>
              <p className="mt-4 leading-7 text-[#554f48]">{copy}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-[#6b6259]">
          No pre-orders · No payments · No release date announced
        </p>
      </div>
    </section>
  );
}
