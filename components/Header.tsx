const categories = [
  ['의류', 'apparel'],
  ['패션잡화', 'fashion-goods'],
  ['주얼리', 'jewelry'],
  ['리빙', 'living'],
  ['디지털 가전', 'digital'],
  ['기타', 'etc'],
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#070707]/92 px-5 py-6 text-[#f2f0eb] backdrop-blur-md md:px-[5vw]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5">
        <a href="/" className="shrink-0 text-sm font-black tracking-[0.26em] sm:text-base" aria-label="DMXDT 홈">
          DMXDT
        </a>

        <nav aria-label="주요 메뉴" className="flex items-center gap-3 text-[10px] font-medium text-[#aaa7a1] sm:gap-7 sm:text-xs">
          <a href="/" className="whitespace-nowrap transition-colors hover:text-[#f2f0eb]">브랜드</a>

          <details className="group relative">
            <summary className="cursor-pointer list-none whitespace-nowrap transition-colors hover:text-[#f2f0eb] [&::-webkit-details-marker]:hidden">
              전체 상품
            </summary>
            <div className="fixed inset-x-0 top-[64px] border-y border-white/10 bg-[#0a0a0a]/98 px-5 py-6 shadow-2xl backdrop-blur-xl md:top-[68px] md:px-[5vw]">
              <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-6">
                {categories.map(([label, slug]) => (
                  <a
                    key={slug}
                    href={`/products?category=${slug}`}
                    className="border-b border-white/10 pb-3 text-xs font-semibold text-[#d5d2cc] transition-colors hover:text-white md:text-sm"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </details>

          <a href="/order-lookup" className="whitespace-nowrap transition-colors hover:text-[#f2f0eb]">주문 조회</a>
          <a href="https://verify.dmxdt.com" className="whitespace-nowrap transition-colors hover:text-[#f2f0eb]">정품 인증</a>
        </nav>
      </div>
    </header>
  );
}
