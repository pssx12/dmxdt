const categories = [
  ['의류', 'apparel'],
  ['패션잡화', 'fashion-goods'],
  ['주얼리', 'jewelry'],
  ['리빙', 'living'],
  ['디지털 가전', 'digital'],
  ['기타', 'etc'],
];

const CategoryLinks = ({ compact = false }: { compact?: boolean }) => (
  <>
    {categories.map(([label, slug]) => (
      <a
        key={slug}
        href={`/products?category=${slug}`}
        className={`whitespace-nowrap transition-colors hover:text-white ${compact ? 'text-[10px] text-[#918e88] sm:text-[11px]' : 'text-xs text-[#c9c6c0] sm:text-sm'}`}
      >
        {label}
      </a>
    ))}
  </>
);

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#070707]/95 text-[#f2f0eb] backdrop-blur-md">
      <div className="overflow-x-auto border-b border-white/8 px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-[5vw]">
        <nav aria-label="상품 분류" className="mx-auto flex h-8 min-w-max max-w-[1440px] items-center justify-center gap-7 sm:gap-10">
          <CategoryLinks compact />
        </nav>
      </div>

      <div className="px-5 md:px-[5vw]">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-5">
          <a href="/" className="shrink-0 text-sm font-black tracking-[0.26em] sm:text-base" aria-label="DMXDT 홈">
            DMXDT
          </a>

          <nav aria-label="주요 메뉴" className="flex items-center gap-3 text-[10px] font-medium text-[#aaa7a1] sm:gap-7 sm:text-xs">
            <a href="/" className="whitespace-nowrap transition-colors hover:text-[#f2f0eb]">브랜드</a>

            <details className="group relative">
              <summary className="cursor-pointer list-none whitespace-nowrap transition-colors hover:text-[#f2f0eb] [&::-webkit-details-marker]:hidden">
                전체 상품
              </summary>
              <div className="fixed inset-x-0 top-[88px] border-b border-white/8 bg-[#090909]/98 px-5 py-4 shadow-xl backdrop-blur-xl md:px-[5vw]">
                <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-9 gap-y-3">
                  <CategoryLinks />
                </div>
              </div>
            </details>

            <a href="/order-lookup" className="whitespace-nowrap transition-colors hover:text-[#f2f0eb]">주문 조회</a>
            <a href="https://verify.dmxdt.com" className="whitespace-nowrap transition-colors hover:text-[#f2f0eb]">정품 인증</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
