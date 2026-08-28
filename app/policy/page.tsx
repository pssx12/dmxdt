import Link from 'next/link';

const policies = [
  ['배송', '정식 생산 및 판매 일정 확정 후 배송비와 출고 소요 기간을 결제창에 고지합니다.'],
  ['교환·반품', '상품 수령 후 적용되는 신청 기간과 절차는 판매 개시 전 최종 확정하여 공개합니다.'],
  ['불량·오배송', '검수 기준과 처리 절차를 사전에 공개하고, 확인된 불량 또는 오배송은 DMXDT가 책임 있게 처리합니다.'],
  ['결제 취소', '출고 전 취소와 결제 취소 처리 기간은 연동될 결제대행사의 기준과 함께 안내합니다.'],
];

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-12 text-[#f5f1e8] md:px-[6vw] md:py-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/checkout" className="text-xs font-bold uppercase tracking-[0.22em] text-[#c47a3a]">← Checkout</Link>
        <p className="dmxdt-eyebrow mt-16">Sales Policy · Pre-launch</p>
        <h1 className="mt-7 text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl">판매 운영 정책</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#a49b90]">현재 상품은 샘플 개발 단계입니다. 아래 항목은 운영 원칙이며, 구체적인 기간·비용·절차는 생산과 판매 개시 전에 최종 고지합니다.</p>
        <dl className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {policies.map(([title, detail]) => (
            <div key={title} className="grid gap-4 py-8 md:grid-cols-[150px_1fr]">
              <dt className="font-black">{title}</dt>
              <dd className="leading-7 text-[#a49b90]">{detail}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm leading-7 text-[#79736b]">이 페이지는 실제 판매 개시 전에 확정 내용으로 업데이트됩니다.</p>
      </div>
    </main>
  );
}
