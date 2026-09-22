import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { PRODUCT } from '@/lib/store';

const details = [
  ['제품명', 'DESIGN 22 EYE RING'],
  ['소재', PRODUCT.material],
  ['색상', '샴페인 골드'],
  ['구조', '폐쇄형 원형 밴드 · 좌우 두 눈 교차 상부 조형'],
  ['디자인 기준', '첨부 CAD 눈반지(2).3dm'],
  ['제조자', PRODUCT.manufacturer],
  ['제조국', PRODUCT.countryOfOrigin],
  ['품질보증', '관련 법령 및 소비자분쟁해결기준에 따름'],
  ['A/S 문의', 'DMXDT · 055-942-6878'],
];

export default function ProductPage() {
  return (
    <>
      <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-10 text-[#f5f1e8] md:px-[6vw]">
        <div className="mx-auto max-w-6xl">
          <header className="flex items-center justify-between border-b border-white/10 pb-7">
            <Link href="/" className="text-xl font-black tracking-[0.18em]">DMXDT</Link>
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#a49b90]">Jewelry · Design 22</span>
          </header>
          <section className="grid gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <div>
              <div className="overflow-hidden bg-[#f2eee7]">
                <Image src={PRODUCT.image} alt="DMXDT DESIGN 22 공식 아이마크 18K 골드 반지" width={1600} height={1600} className="h-full w-full object-cover" priority />
              </div>
              <p className="mt-3 text-xs leading-6 text-[#79736b]">첨부 CAD를 기준으로 제작한 광고용 렌더 이미지이며 실제 제품의 색상과 광택은 다를 수 있습니다.</p>
            </div>
            <div className="lg:py-6">
              <p className="dmxdt-eyebrow">DMXDT · Design 22</p>
              <h1 className="mt-6 text-4xl font-black leading-tight tracking-[-0.06em] md:text-6xl">{PRODUCT.shortName}</h1>
              <div className="mt-7 flex flex-wrap items-end gap-x-4 gap-y-2">
                <p className="text-3xl font-black">{PRODUCT.price.toLocaleString('ko-KR')}원</p>
                <p className="pb-1 text-sm text-[#79736b] line-through">정상가 {PRODUCT.regularPrice.toLocaleString('ko-KR')}원</p>
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#c47a3a]">Launch Price</p>
              <p className="mt-2 text-sm text-[#a49b90]">배송비 무료</p>
              <p className="mt-8 border-y border-white/10 py-7 text-base leading-8 text-[#cfc7bc]">서로 마주 보는 두 눈의 곡선을 하나의 상부 조형으로 연결한 DMXDT DESIGN 22 반지입니다. 폐쇄형 원형 밴드 위에 좌우 눈 형상이 중앙에서 교차하며, 보는 방향에 따라 실루엣과 빈 공간이 달라집니다.</p>
              <div className="mt-8 border border-[#c47a3a]/50 bg-[#c47a3a]/10 p-5 text-sm leading-7 text-[#d8c8b7]">출시 수량을 비회원 주문으로 접수합니다. 18K 제품은 결제 완료 후 최종 검수하여 출고하며, 배송 일정은 주문자 연락처로 안내합니다.</div>
              <Link href="/checkout" className="mt-8 flex w-full justify-center bg-[#f5f1e8] px-6 py-5 text-sm font-black tracking-[0.08em] text-[#050505] transition hover:bg-[#c47a3a]">비회원으로 주문하기</Link>
              <p className="mt-4 text-center text-xs leading-6 text-[#79736b]">회원가입 없이 주문할 수 있습니다.</p>
            </div>
          </section>
          <section className="overflow-hidden border-y border-white/10 py-16">
            <Image src="/products/design-22-eye-ring/design22-campaign-ad-official-v1.webp" alt="검은 석재 위의 DMXDT DESIGN 22 공식 아이마크 18K 반지 광고" width={1920} height={1080} className="w-full" />
          </section>
          <section className="border-t border-white/10 py-16">
            <p className="dmxdt-eyebrow">Product Information</p>
            <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">상품 필수정보</h2>
            <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {details.map(([term, description]) => <div key={term} className="grid gap-2 py-5 text-sm md:grid-cols-[180px_1fr]"><dt className="font-bold">{term}</dt><dd className="leading-7 text-[#a49b90]">{description}</dd></div>)}
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
