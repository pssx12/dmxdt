import Image from 'next/image';

const nav = [
  ['BRAND', '#brand'],
  ['AUTHENTICITY', '#authenticity'],
  ['CONTACT', '#contact'],
  ['SHOP', '/products/design-22-eye-ring'],
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/90 px-5 py-4 text-[#f5f1e8] backdrop-blur-xl md:px-[6vw]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <a href="/#home" className="flex shrink-0 items-center gap-3" aria-label="DMXDT 홈">
          <Image src="/logo/dmxdt-eye-official.png" alt="" width={40} height={40} className="h-9 w-9 object-contain" />
          <span className="text-lg font-black tracking-[0.18em]">DMXDT</span>
        </a>
        <nav aria-label="주요 메뉴" className="flex items-center gap-4 text-[10px] font-bold tracking-[0.16em] text-[#d2cabf] sm:gap-6 sm:text-xs">
          {nav.map(([label, href]) => (
            <a key={label} href={href} className={`${label === 'BRAND' ? 'hidden sm:inline' : ''} ${label === 'CONTACT' ? 'hidden md:inline' : ''} transition hover:text-[#f5f1e8] ${label === 'SHOP' ? 'border border-[#f5f1e8]/50 px-3 py-2 text-[#f5f1e8] sm:px-4' : ''}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
