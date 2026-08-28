const colors = [
  { name: 'Black', value: '#070707', border: 'border-white/15' },
  { name: 'Off White', value: '#e9e3d8', border: 'border-black/10' },
  { name: 'Melange Grey', value: '#888888', border: 'border-white/10' },
];

const specifications = [
  ['Product', 'Premium Relaxed Fit Sweatshirt'],
  ['Fabric', '100% Cotton · Heavyweight Loopback'],
  ['Surface', 'Dense · Smooth · Matte'],
  ['Status', 'Sample Development in Progress'],
];

export default function ApparelPreview() {
  return (
    <section id="apparel" className="dmxdt-section overflow-hidden bg-[#090909] text-[#f5f1e8]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="dmxdt-eyebrow">Apparel · Foundation 001</p>
            <h2 className="dmxdt-title mt-8">The first standard.</h2>
          </div>
          <p className="dmxdt-copy">
            큰 로고보다 완성도를, 유행보다 오래 입는 기준을 선택합니다. DMXDT의 첫 맨투맨은 원단과 핏, 봉제와 작은 디테일까지 실제 샘플로 확인하며 개발하고 있습니다.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-[#050505] p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c47a3a]">Color Study</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {colors.map((color) => (
                <article key={color.name} className="group">
                  <div
                    className={`aspect-[4/5] border ${color.border} transition duration-500 group-hover:-translate-y-1`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`${color.name} color swatch`}
                  />
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em]">{color.name}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-[#0b0b0b] p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c47a3a]">Development Specification</p>
            <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {specifications.map(([term, detail]) => (
                <div key={term} className="py-6">
                  <dt className="text-xs uppercase tracking-[0.24em] text-[#8f887e]">{term}</dt>
                  <dd className="mt-3 text-lg font-semibold leading-7 text-[#f5f1e8]">{detail}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm leading-7 text-[#a49b90]">
              최종 사양과 출시 일정은 샘플 검토 및 생산 확정 후 공개합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
