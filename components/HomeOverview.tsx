import Link from 'next/link';

const highlights = [
  ['01', 'PRODUCT', '제품 구매', 'DMXDT의 첫 번째 18K 주얼리 DESIGN 22 EYE RING을 확인하고 주문할 수 있습니다.', '/products/design-22-eye-ring', '제품 보기'],
  ['02', 'ORDER', '주문 조회', '주문번호와 주문자 정보를 이용해 결제 및 배송 진행 상태를 확인하는 기능을 준비하고 있습니다.', '/order-lookup', '조회 화면 보기'],
  ['03', 'AUTHENTICITY', '정품 인증', '제품의 고유 정보를 DMXDT 공식 인증 페이지에서 직접 확인할 수 있습니다.', 'https://verify.dmxdt.com', '인증 페이지'],
];

export default function HomeOverview() {
  return (
    <>
      <section className="border-y border-white/10 bg-[#080808] px-5 py-16 text-[#f5f1e8] md:px-[6vw] md:py-24">
        <div className="mx-auto grid max-w-6xl divide-y divide-white/10 border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {highlights.map(([number, label, title, copy, href, action]) => (
            <article key={number} className="flex min-h-[320px] flex-col py-8 md:px-8 md:first:pl-0 md:last:pr-0">
              <div className="flex items-center justify-between text-[11px] font-bold tracking-[0.2em] text-[#8c857d]"><span>{label}</span><span>{number}</span></div>
              <h2 className="mt-10 text-3xl font-black tracking-[-0.05em]">{title}</h2>
              <p className="mt-5 text-base leading-7 text-[#aaa198]">{copy}</p>
              <Link href={href} className="mt-auto pt-10 text-sm font-bold tracking-[0.08em] text-[#f5f1e8]">{action} <span aria-hidden="true" className="text-[#c47a3a]">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section id="brand" className="bg-[#f1ede5] px-5 py-20 text-[#0b0b0b] md:px-[6vw] md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div><p className="text-xs font-black uppercase tracking-[0.28em] text-[#a35f2f]">About DMXDT</p><p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#6f6860]">Dirty Mind × Doubting Thomas</p></div>
          <div><h2 className="text-[clamp(40px,6vw,82px)] font-black leading-[0.96] tracking-[-0.07em]">Question Everything.<br />Build What Lasts.</h2><p className="mt-9 max-w-3xl text-lg leading-9 text-[#4e4944] md:text-xl">DMXDT는 세상을 부정하기 위해서가 아니라 더 깊이 이해하기 위해 질문합니다. 질문에서 시작해 오래 남을 형태와 물성을 만듭니다.</p></div>
        </div>
      </section>

      <section id="authenticity" className="bg-[#8f1327] px-5 py-20 text-white md:px-[6vw] md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div><p className="text-xs font-black uppercase tracking-[0.28em] text-white/65">Official Verification</p><h2 className="mt-5 text-[clamp(38px,6vw,76px)] font-black leading-[0.96] tracking-[-0.06em]">정품의 기록을<br />직접 확인하세요.</h2></div>
          <a href="https://verify.dmxdt.com" className="inline-flex min-h-14 items-center justify-center border border-white/70 px-7 text-sm font-black tracking-[0.08em] transition hover:bg-white hover:text-[#8f1327]">정품 인증 바로가기 →</a>
        </div>
      </section>
    </>
  );
}
