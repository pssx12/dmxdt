export default function Footer() {
  return (
    <footer className="border-t border-[#f5f1e8]/10 bg-[#050505] px-[6vw] py-12 text-[#a49b90]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-black tracking-[0.18em] text-[#f5f1e8]">DMXDT</p>
            <p className="mt-4 text-sm uppercase tracking-[0.24em]">
              Question Everything. Build What Lasts.
            </p>
          </div>

          <div className="text-sm leading-7 md:text-right">
            <p>Brand Platform · Archive · Journey · Foundation</p>
            <p>
              <a href="/policy" className="transition hover:text-[#f5f1e8]">
                배송·교환·환불 정책
              </a>
            </p>
          </div>
        </div>

        <div className="mt-9 border-t border-[#f5f1e8]/10 pt-7">
          <div className="grid gap-x-10 gap-y-1 text-sm leading-7 sm:grid-cols-2">
            <p><span className="text-[#f5f1e8]">상호명</span> 디엠엑스디티(DMXDT)</p>
            <p><span className="text-[#f5f1e8]">대표자명</span> 박성식</p>
            <p><span className="text-[#f5f1e8]">사업자등록번호</span> 898-39-01629</p>
            <p><span className="text-[#f5f1e8]">전화번호</span> 055-942-6878</p>
            <p className="sm:col-span-2">
              <span className="text-[#f5f1e8]">사업장 주소</span>{' '}
              경상남도 거창군 거창읍 동동6길 100, 102동 201호(베어스타운)
            </p>
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.12em] text-[#6f6860]">
            © DMXDT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
