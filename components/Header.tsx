import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-[6vw] py-5 bg-gradient-to-b from-[#050505] via-[#050505cc] to-transparent">
      <a href="#home" className="flex items-center gap-3">
        <Image src="/logo/dmxdt-eye-official.png" alt="DMXDT eye symbol" width={48} height={48} className="object-contain" />
        <span className="text-xl font-black tracking-[.16em]">DMXDT</span>
      </a>
      <nav className="hidden md:flex gap-7 text-xs tracking-[.16em] text-[#d2cabf]">
        <a href="#why">WHY</a><a href="#philosophy">PHILOSOPHY</a><a href="#foundation">FOUNDATION</a><a href="#archive">ARCHIVE</a><a href="#journey">JOURNEY</a><a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}
