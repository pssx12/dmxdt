import Image from 'next/image';

const nav = [
  ['WHY', '#why'],
  ['PHILOSOPHY', '#philosophy'],
  ['FOUNDATION', '#foundation'],
  ['ARCHIVE', '#archive'],
  ['JOURNEY', '#journey'],
  ['CONTACT', '#contact'],
];

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-[6vw] py-5 text-[#f5f1e8] backdrop-blur-md">
      <a href="#home" className="flex items-center gap-3">
        <Image src="/logo/dmxdt-eye-official.png" alt="DMXDT" width={44} height={44} className="h-11 w-11 object-contain" />
        <span className="text-xl font-black tracking-[0.18em]">DMXDT</span>
      </a>
      <nav className="hidden gap-7 text-xs font-bold tracking-[0.18em] text-[#d2cabf] md:flex">
        {nav.map(([label, href]) => (
          <a key={label} href={href} className="relative transition hover:text-[#f5f1e8] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#c47a3a] after:transition-all hover:after:w-full">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
