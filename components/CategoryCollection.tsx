import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PRODUCT } from '@/lib/store';

export const productCategories = [
  ['의류', 'apparel'],
  ['패션잡화', 'fashion-goods'],
  ['주얼리', 'jewelry'],
  ['리빙', 'living'],
  ['디지털 가전', 'digital'],
  ['기타', 'etc'],
] as const;

type CategorySlug = 'all' | (typeof productCategories)[number][1];

const labels: Record<CategorySlug, string> = {
  all: '전체 상품',
  apparel: '의류',
  'fashion-goods': '패션잡화',
  jewelry: '주얼리',
  living: '리빙',
  digital: '디지털 가전',
  etc: '기타',
};

export default function CategoryCollection({ category }: { category: CategorySlug }) {
  const hasRing = category === 'all' || category === 'jewelry';
  const title = labels[category];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050505] px-5 pb-24 pt-36 text-[#f5f1e8] md:px-[6vw] md:pt-44">
        <section className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8c857d]">DMXDT Collection</p>
          <div className="mt-6 flex flex-col justify-between gap-5 border-b border-white/10 pb-9 md:flex-row md:items-end">
            <div>
              <h1 className="text-[clamp(42px,7vw,88px)] font-black leading-[0.92] tracking-[-0.065em]">{title}</h1>
              <p className="mt-5 text-sm leading-7 text-[#918a82]">판매가 시작된 제품만 공식 이미지와 주문 정보를 공개합니다.</p>
            </div>
            <p className="text-xs font-bold tracking-[0.08em] text-[#6f6962]">판매 제품 {hasRing ? 1 : 0}</p>
          </div>

          {hasRing ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <article className="overflow-hidden border border-white/10 bg-[#080808]">
                <Link href="/products/design-22-eye-ring" className="block overflow-hidden bg-[#ede8df]">
                  <Image src={PRODUCT.image} alt={PRODUCT.name} width={1200} height={1200} className="aspect-square h-auto w-full object-cover transition duration-700 hover:scale-[1.015]" />
                </Link>
                <div className="p-6">
                  <p className="text-[11px] font-bold tracking-[0.2em] text-[#c47a3a]">주얼리</p>
                  <h2 className="mt-4 text-2xl font-black tracking-[-0.04em]">{PRODUCT.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#8c857d]">18K Au750 샴페인 골드 · KS 7–22호</p>
                  <div className="mt-7 flex items-end justify-between gap-4">
                    <strong className="text-lg">{PRODUCT.price.toLocaleString('ko-KR')}원</strong>
                    <Link href="/products/design-22-eye-ring" className="border border-white/40 px-5 py-3 text-sm font-black transition hover:bg-[#f5f1e8] hover:text-[#050505]">제품 보기</Link>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            <div className="mt-10 border-y border-white/10 py-24 text-center">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#8c857d]">{title}</p>
              <h2 className="mt-5 text-3xl font-black">공개 준비 중입니다.</h2>
              <p className="mt-4 text-sm leading-7 text-[#6f6962]">제품이 최종 확정되면 공식 이미지와 판매 정보를 등록합니다.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
