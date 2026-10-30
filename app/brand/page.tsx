import Header from '@/components/Header';
import Footer from '@/components/Footer';

const principles = [
  ['질문', '당연하다고 여겨지는 것에 다시 질문합니다.'],
  ['확인', '보이는 말보다 근거와 실제를 직접 확인합니다.'],
  ['다시 생각', '선택하기 전에 한 번 더 생각합니다.'],
];

export default function BrandPage() {
  return (
    <>
      <Header />
      <main className="bg-[#050505] text-[#f2f0eb]">
        <section className="px-5 pb-20 pt-32 md:px-[6vw] md:pb-24 md:pt-40">
          <div className="mx-auto max-w-[1280px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#817c75]">About DMXDT</p>
            <div className="mt-8 grid gap-10 border-y border-white/10 py-12 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-16">
              <div>
                <h1 className="text-[clamp(48px,7vw,88px)] font-black leading-none tracking-[-0.07em]">DMXDT</h1>
                <p className="mt-5 text-[clamp(22px,2.2vw,32px)] font-medium leading-[1.4] tracking-[-0.045em]">
                  당연한 것을<br />다시 묻는 브랜드.
                </p>
              </div>

              <div className="md:border-l md:border-white/10 md:pl-16">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c47a3a]">Dirty Mind × Doubting Thoma<span className="inline-block -scale-x-100">s</span></p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#aaa49c] md:text-lg md:leading-9">
                  디엠엑스디티(DMXDT)는 익숙한 관점에 머물지 않고, 질문하고 확인하는 태도로 생활 전반의 영역을 전개합니다.
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#716c66]">
                  이름은 새로운 관점으로 바라보는 Dirty Mind와 직접 확인하려는 Doubting Thomas의 결합입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#ebe7df] px-5 py-20 text-[#0a0a0a] md:px-[6vw] md:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[0.3fr_1fr] md:gap-14">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#867b70]">Our Philosophy</p>
            <blockquote className="text-[clamp(26px,3.2vw,44px)] font-medium leading-[1.35] tracking-[-0.055em]">
              세상을 부정하기 위해서가 아니라,<br />
              당연한 것을 다시 묻고,<br />
              보이는 그대로 믿기 전에<br />
              한 번 더 생각합니다.
            </blockquote>
          </div>
        </section>

        <section className="px-5 py-20 md:px-[6vw] md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-8 md:grid-cols-[0.3fr_1fr] md:gap-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#817c75]">Our Approach</p>
              <div>
                <h2 className="text-[clamp(28px,3.4vw,46px)] font-black leading-[1.15] tracking-[-0.055em]">질문하고, 확인하고, 다시 생각합니다.</h2>
                <div className="mt-10 grid border-t border-white/10 md:grid-cols-3">
                  {principles.map(([title, description]) => (
                    <article key={title} className="border-b border-white/10 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                      <h3 className="text-base font-black">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#817c75]">{description}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-14 border-t border-white/10 pt-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#817c75]">Our Direction</p>
                  <p className="mt-5 text-[clamp(24px,3vw,40px)] font-medium leading-[1.35] tracking-[-0.05em]">
                    우리는 특정한 제품 하나에 머물지 않고,<br />생활의 전반에 걸쳐 스며들 계획입니다.
                  </p>
                  <p className="mt-6 max-w-3xl text-sm leading-7 text-[#817c75]">
                    의류, 패션잡화, 주얼리, 리빙, 디지털 가전과 새로운 영역까지 DMXDT의 기준을 차분히 확장해 나갑니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
