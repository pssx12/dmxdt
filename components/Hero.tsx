import Image from 'next/image';
import Link from 'next/link';
import { PRODUCT } from '@/lib/store';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#050505] px-5 pb-16 pt-28 text-[#f5f1e8] md:px-[6vw] md:pb-24 md:pt-36">
      <div className="dmxdt-noise pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="dmxdt-rise dmxdt-eyebrow">First Drop · 18K Jewelry</p>
          <h1 className="dmxdt-rise delay-1 mt-6 text-[clamp(46px,7vw,96px)] font-black uppercase leading-[0.9] tracking-[-0.075em]">Design 22<br />Eye Ring</h1>
          <p className="dmxdt-rise delay-2 mt-7 max-w-xl text-lg leading-8 text-[#cfc7bc] md:text-xl">서로 마주 보는 두 눈의 곡선을 하나로 연결한 DMXDT의 첫 번째 18K 주얼리입니다.</p>
          <div className="dmxdt-rise delay-3 mt-8 flex flex-wrap items-center gap-4">
            <Link href="/products/design-22-eye-ring" className="inline-flex min-h-14 items-center justify-center bg-[#f5f1e8] px-7 text-sm font-black tracking-[0.08em] text-[#050505] transition hover:bg-[#c47a3a]">제품 보기</Link>
            <a href="#brand" className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 text-sm font-bold tracking-[0.08em] transition hover:border-white/70">브랜드 이야기</a>
          </div>
          <p className="dmxdt-rise delay-4 mt-6 text-sm text-[#8c857d]">{PRODUCT.material} · 국내 제작 · 무료 배송</p>
        </div>
        <Link href="/products/design-22-eye-ring" className="dmxdt-rise order-1 block overflow-hidden bg-[#ede8df] lg:order-2" aria-label="DESIGN 22 EYE RING 제품 보기">
          <Image src={PRODUCT.image} alt="DMXDT DESIGN 22 EYE RING" width={1600} height={1600} priority className="aspect-square h-auto w-full object-cover transition duration-700 hover:scale-[1.015]" />
        </Link>
      </div>
    </section>
  );
}
