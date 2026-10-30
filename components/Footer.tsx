import { STORE } from '@/lib/store';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#050505] px-5 py-6 text-[#77736d] md:px-[5vw]">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-3 text-[10px] leading-5 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">
          <p className="text-[#aaa69f]">DMXDT</p>
          <p className="flex flex-wrap gap-x-3">
            <a href="/policy" className="transition hover:text-[#f2f0eb]">배송·교환·환불 정책</a>
            <a href="/terms" className="transition hover:text-[#f2f0eb]">이용약관</a>
            <a href="/privacy" className="transition hover:text-[#f2f0eb]">개인정보 처리방침</a>
            <a href="https://verify.dmxdt.com" className="transition hover:text-[#f2f0eb]">정품 인증</a>
          </p>
        </div>

        <div className="mt-4 border-t border-white/8 pt-4 text-[10px] leading-5 sm:text-[11px]">
          <div className="flex flex-wrap gap-x-4 gap-y-0.5">
            <p>상호명 {STORE.name}</p>
            <p>대표자명 {STORE.representative}</p>
            <p>사업자등록번호 {STORE.businessNumber}</p>
            <p>전화번호 {STORE.phone}</p>
            <p>통신판매업 신고 {STORE.mailOrderNumber || '신고번호 확인 후 표기 예정'}</p>
          </div>
          <div className="mt-1 flex flex-col gap-x-4 sm:flex-row sm:items-center sm:justify-between">
            <p>사업장 주소 {STORE.address}</p>
            <p className="mt-1 shrink-0 uppercase tracking-[0.08em] sm:mt-0">© DMXDT. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
