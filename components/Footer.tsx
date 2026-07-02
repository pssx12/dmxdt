export default function Footer() {
  return (
    <footer className="border-t border-[#f5f1e8]/10 bg-[#050505] px-[6vw] py-12 text-[#a49b90]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-black tracking-[0.18em] text-[#f5f1e8]">DMXDT</p>
          <p className="mt-4 text-sm uppercase tracking-[0.24em]">Question Everything. Build What Lasts.</p>
        </div>
        <div className="text-sm leading-7 md:text-right">
          <p>Brand Platform · Archive · Journey · Foundation</p>
          <p>© DMXDT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
