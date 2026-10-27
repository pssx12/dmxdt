'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PRODUCT } from '@/lib/store';

const categories = ['전체', '주얼리', '가방', '의류', '액세서리'] as const;

const products = [
  {
    category: '주얼리',
    name: PRODUCT.name,
    description: '18K Au750 샴페인 골드 · KS 7–22호',
    price: PRODUCT.price,
    image: PRODUCT.image,
    href: '/products/design-22-eye-ring',
  },
];

export default function ProductsPage() {
  const [selected, setSelected] = useState<(typeof categories)[number]>('전체');
  const visibleProducts = useMemo(
    () => selected === '전체' ? products : products.filter((product) => product.category === selected),
    [selected],
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050505] px-5 pb-24 pt-36 text-[#f5f1e8] md:px-[6vw] md:pt-44">
        <section className="mx-auto max-w-6xl">
          <p className="dmxdt-eyebrow">DMXDT Collection</p>
          <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-[clamp(44px,8vw,96px)] font-black leading-[0.9] tracking-[-0.07em]">제품 구매</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#aaa198] md:text-lg">
                제품군을 선택해 DMXDT 컬렉션을 확인하세요. 판매가 시작된 제품만 주문할 수 있습니다.
              </p>
            </div>
            <p className="text-sm font-bold tracking-[0.08em] text-[#8c857d]">현재 판매 제품 1</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-y border-white/10 py-5" role="tablist" aria-label="제품군">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected === category}
                onClick={() => setSelected(category)}
                className={`min-h-11 border px-5 text-sm font-bold transition ${selected === category ? 'border-[#f5f1e8] bg-[#f5f1e8] text-[#050505]' : 'border-white/15 text-[#aaa198] hover:border-white/50 hover:text-[#f5f1e8]'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {visibleProducts.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <article key={product.name} className="overflow-hidden border border-white/10 bg-[#080808]">
                  <Link href={product.href} className="block overflow-hidden bg-[#ede8df]">
                    <Image src={product.image} alt={product.name} width={1200} height={1200} className="aspect-square h-auto w-full object-cover transition duration-700 hover:scale-[1.015]" />
                  </Link>
                  <div className="p-6">
                    <p className="text-[11px] font-bold tracking-[0.2em] text-[#c47a3a]">{product.category}</p>
                    <h2 className="mt-4 text-2xl font-black tracking-[-0.04em]">{product.name}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#8c857d]">{product.description}</p>
                    <div className="mt-7 flex items-end justify-between gap-4">
                      <strong className="text-lg">{product.price.toLocaleString('ko-KR')}원</strong>
                      <Link href={product.href} className="border border-white/40 px-5 py-3 text-sm font-black transition hover:bg-[#f5f1e8] hover:text-[#050505]">제품 보기</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 border border-white/10 bg-[#080808] px-6 py-20 text-center">
              <p className="text-sm font-bold tracking-[0.16em] text-[#c47a3a]">{selected}</p>
              <h2 className="mt-5 text-3xl font-black">공개 준비 중입니다.</h2>
              <p className="mt-4 text-sm leading-7 text-[#8c857d]">제품이 최종 확정되면 공식 이미지와 판매 정보를 등록합니다.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
