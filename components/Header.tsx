const primaryNav = [
  ['브랜드', '/brand'],
  ['전체 상품', '/products'],
  ['의류', '/products/apparel'],
  ['패션잡화', '/products/fashion-goods'],
  ['주얼리', '/products/jewelry'],
  ['리빙', '/products/living'],
  ['디지털 가전', '/products/digital'],
  ['기타', '/products/etc'],
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070707]/95 text-[#f2f0eb] backdrop-blur-md">
      <div className="overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-[5vw]">
        <div className="mx-auto flex h-16 min-w-max max-w-[1440px] items-center gap-7 lg:gap-9">
          <a href="/" className="mr-2 shrink-0 text-sm font-black tracking-[0.28em] sm:text-base" aria-label="DMXDT 홈">DMXDT</a>

          <nav aria-label="주요 메뉴" className="flex items-center gap-6 text-[11px] font-medium text-[#a29e98] lg:gap-8 lg:text-xs">
            {primaryNav.map(([label, href]) => (
              <a key={label} href={href} className="whitespace-nowrap transition-colors hover:text-white">{label}</a>
            ))}
          </nav>

          <span className="h-3 w-px bg-white/15" aria-hidden="true" />

          <nav aria-label="기능 메뉴" className="flex items-center gap-6 text-[11px] font-medium text-[#77736d] lg:text-xs">
            <a href="/order-lookup" className="whitespace-nowrap transition-colors hover:text-white">주문 조회</a>
            <a href="https://verify.dmxdt.com" className="whitespace-nowrap transition-colors hover:text-white">정품 인증</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
