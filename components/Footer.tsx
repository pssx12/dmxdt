import { STORE } from '@/lib/store';

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
              <span aria-hidden="true"> · </span>
              <a href="/terms" className="transition hover:text-[#f5f1e8]">이용약관</a>
              <span aria-hidden="true"> · </span>
              <a href="/privacy" className="transition hover:text-[#f5f1e8]">개인정보 처리방침</a>
              <span aria-hidden="true"> · </span>
              <a href="https://verify.dmxdt.com" className="transition hover:text-[#f5f1e8]">
                정품 인증
              </a>
            </p>
          </div>
        </div>

        <div className="mt-9 border-t border-[#f5f1e8]/10 pt-7">
          <div className="grid gap-x-10 gap-y-1 text-sm leading-7 sm:grid-cols-2">
            <p><span className="text-[#f5f1e8]">상호명</span> {STORE.name}</p>
            <p><span className="text-[#f5f1e8]">대표자명</span> {STORE.representative}</p>
            <p><span className="text-[#f5f1e8]">사업자등록번호</span> {STORE.businessNumber}</p>
            <p><span className="text-[#f5f1e8]">전화번호</span> {STORE.phone}</p>
            <p><span className="text-[#f5f1e8]">통신판매업 신고</span> {STORE.mailOrderNumber || '신고번호 확인 후 표기 예정'}</p>
            <p className="sm:col-span-2">
              <span className="text-[#f5f1e8]">사업장 주소</span>{' '}
              {STORE.address}
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
