const nav = [
  ['브랜드', '/'],
  ['제품 구매', '/products'],
  ['주문 조회', '/order-lookup'],
  ['정품 인증', 'https://verify.dmxdt.com'],
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#070707]/92 px-5 py-6 text-[#f2f0eb] backdrop-blur-md md:px-[5vw]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5">
        <a href="/" className="shrink-0 text-sm font-black tracking-[0.26em] sm:text-base" aria-label="DMXDT 홈">
          DMXDT
        </a>
        <nav aria-label="주요 메뉴" className="flex items-center gap-3 text-[10px] font-medium text-[#aaa7a1] sm:gap-7 sm:text-xs">
          {nav.map(([label, href]) => (
            <a key={label} href={href} className="whitespace-nowrap transition-colors hover:text-[#f2f0eb]">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
