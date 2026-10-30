const productNav = [
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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#070707]/95 text-[#f2f0eb] backdrop-blur-md">
      <div className="px-5 md:px-[5vw]">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-5">
          <a href="/" className="shrink-0 text-sm font-black tracking-[0.26em] sm:text-base" aria-label="DMXDT 홈">DMXDT</a>
          <nav aria-label="기능 메뉴" className="flex items-center gap-4 text-[10px] font-medium text-[#918e88] sm:gap-7 sm:text-xs">
            <a href="/order-lookup" className="whitespace-nowrap transition-colors hover:text-white">주문 조회</a>
            <a href="https://verify.dmxdt.com" className="whitespace-nowrap transition-colors hover:text-white">정품 인증</a>
          </nav>
        </div>
      </div>

      <div className="overflow-x-auto border-y border-white/8 px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-[5vw]">
        <nav aria-label="상품 메뉴" className="mx-auto flex h-9 min-w-max max-w-[1440px] items-center gap-7 text-[10px] text-[#99958f] sm:justify-center sm:gap-10 sm:text-[11px]">
          {productNav.map(([label, href]) => (
            <a key={label} href={href} className="whitespace-nowrap transition-colors hover:text-white">{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
