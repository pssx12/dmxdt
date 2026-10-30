import { STORE } from '@/lib/store';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#050505] px-5 py-4 text-[#77736d] md:px-[5vw]">
      <div className="mx-auto max-w-[1440px] text-[9px] leading-4 sm:text-[10px]">
        <p className="flex flex-wrap gap-x-3 gap-y-0.5">
          <a href="/policy" className="transition hover:text-[#f2f0eb]">배송·교환·환불 정책</a>
          <a href="/terms" className="transition hover:text-[#f2f0eb]">이용약관</a>
          <a href="/privacy" className="transition hover:text-[#f2f0eb]">개인정보 처리방침</a>
        </p>

        <div className="mt-2 border-t border-white/8 pt-2">
          <div className="flex flex-wrap gap-x-3 gap-y-0">
            <p>상호명 {STORE.name}</p>
            <p>대표자명 {STORE.representative}</p>
            <p>사업자등록번호 {STORE.businessNumber}</p>
            <p>전화번호 {STORE.phone}</p>
            <p>통신판매업 신고 {STORE.mailOrderNumber || '신고번호 확인 후 표기 예정'}</p>
          </div>
          <div className="flex flex-col gap-x-3 sm:flex-row sm:items-center sm:justify-between">
            <p>사업장 주소 {STORE.address}</p>
            <p className="shrink-0 uppercase tracking-[0.06em]">© DMXDT. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
