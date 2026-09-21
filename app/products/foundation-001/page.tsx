import Link from 'next/link';
import Footer from '@/components/Footer';
import { PRODUCT } from '@/lib/store';

const details = [
  ['소재', PRODUCT.material],
  ['색상', PRODUCT.colors.join(' / ')],
  ['사이즈', PRODUCT.sizes.join(' / ')],
  ['제조자', PRODUCT.manufacturer],
  ['제조국', PRODUCT.countryOfOrigin],
  ['세탁방법', PRODUCT.care],
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
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#a49b90]">Product · Foundation 001</span>
          </header>

          <section className="grid gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <div className="grid min-h-[560px] place-items-center border border-white/10 bg-[#080808] p-8">
              <div className="w-full max-w-md">
                <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-[#c47a3a]">Color Study</p>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="aspect-[3/4] border border-white/10 bg-[#070707]" aria-label="Black" />
                  <div className="aspect-[3/4] border border-black/10 bg-[#e9e3d8]" aria-label="Off White" />
                  <div className="aspect-[3/4] border border-white/10 bg-[#888]" aria-label="Melange Grey" />
                </div>
                <p className="mt-8 text-center text-sm leading-7 text-[#79736b]">실물 촬영 이미지는 최종 샘플 확정 후 교체됩니다.</p>
              </div>
            </div>

            <div className="lg:py-6">
              <p className="dmxdt-eyebrow">DMXDT · Foundation 001</p>
              <h1 className="mt-6 text-4xl font-black leading-tight tracking-[-0.06em] md:text-6xl">{PRODUCT.shortName}</h1>
              <p className="mt-7 text-2xl font-black">{PRODUCT.price.toLocaleString('ko-KR')}원</p>
              <p className="mt-2 text-sm text-[#a49b90]">배송비 무료</p>
              <p className="mt-8 border-y border-white/10 py-7 text-base leading-8 text-[#cfc7bc]">
                고밀도 무광 표면과 묵직한 실루엣을 기준으로 개발한 면 100% 헤비웨이트 루프백 맨투맨입니다. 과장된 장식보다 원단, 핏, 봉제와 작은 디테일의 완성도에 집중합니다.
              </p>
              <div className="mt-8 rounded-none border border-[#c47a3a]/50 bg-[#c47a3a]/10 p-5 text-sm leading-7 text-[#d8c8b7]">
                현재 PG 심사 준비 단계입니다. 표시 가격은 배포 전 최종 승인이 필요하며, 실물 판매 개시 전 생산·배송 일정을 다시 고지합니다.
              </div>
              <Link href="/checkout" className="mt-8 flex w-full justify-center bg-[#f5f1e8] px-6 py-5 text-sm font-black tracking-[0.08em] text-[#050505] transition hover:bg-[#c47a3a]">
                옵션 선택하고 주문하기
              </Link>
              <p className="mt-4 text-center text-xs leading-6 text-[#79736b]">회원가입 없이 주문할 수 있습니다.</p>
            </div>
          </section>

          <section className="border-t border-white/10 py-16">
            <p className="dmxdt-eyebrow">Product Information</p>
            <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">상품 필수정보</h2>
            <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {details.map(([term, description]) => (
                <div key={term} className="grid gap-2 py-5 text-sm md:grid-cols-[180px_1fr]">
                  <dt className="font-bold text-[#f5f1e8]">{term}</dt>
                  <dd className="leading-7 text-[#a49b90]">{description}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
