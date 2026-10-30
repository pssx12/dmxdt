import Header from '@/components/Header';
import Footer from '@/components/Footer';

const principles = [
  ['01', 'QUESTION', '당연하다고 여겨지는 것에 다시 질문합니다.'],
  ['02', 'VERIFY', '보이는 말보다 근거와 실제를 직접 확인합니다.'],
  ['03', 'THINK AGAIN', '선택하기 전에 한 번 더 생각합니다.'],
];

export default function BrandPage() {
  return (
    <>
      <Header />
      <main className="bg-[#050505] text-[#f2f0eb]">
        <section className="px-5 pb-20 pt-40 md:px-[6vw] md:pb-28 md:pt-52">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#8e8982]">About DMXDT</p>
            <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <h1 className="text-[clamp(56px,10vw,150px)] font-black uppercase leading-[0.79] tracking-[-0.085em]">
                Dirty Mind<br />
                <span className="text-[#6f6b65]">×</span><br />
                Doubting Thomas
              </h1>
              <div className="border-l border-white/15 pl-6 md:pl-9">
                <p className="text-[clamp(25px,3vw,44px)] font-medium leading-[1.42] tracking-[-0.05em]">
                  다르게 보고,<br />의심하고,<br />직접 확인하는 태도.
                </p>
                <p className="mt-7 max-w-xl text-sm leading-7 text-[#8f8981] md:text-base md:leading-8">
                  DMXDT는 Dirty Mind와 Doubting Thomas의 결합입니다. 익숙한 관점에 머물지 않고, 당연하게 받아들여지는 것에 질문하는 태도를 뜻합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#ece8e0] px-5 py-24 text-[#090909] md:px-[6vw] md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.35fr_1fr]">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8a7e72]">Our Philosophy</p>
            <blockquote className="text-[clamp(34px,5vw,76px)] font-medium leading-[1.24] tracking-[-0.065em]">
              세상을 부정하기 위해서가 아니라,<br />
              당연한 것을 다시 묻고,<br />
              보이는 그대로 믿기 전에<br />
              한 번 더 생각합니다.
            </blockquote>
          </div>
        </section>

        <section className="px-5 py-24 md:px-[6vw] md:py-36">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[0.45fr_1fr]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8e8982]">How We Think</p>
              <h2 className="text-[clamp(36px,5vw,72px)] font-black leading-[0.95] tracking-[-0.065em]">질문은 우리의 방식입니다.</h2>
            </div>
            <div className="grid md:grid-cols-3">
              {principles.map(([number, title, description]) => (
                <article key={number} className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                  <p className="text-[10px] font-bold tracking-[0.24em] text-[#c47a3a]">{number}</p>
                  <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">{title}</h3>
                  <p className="mt-5 text-sm leading-7 text-[#8f8981]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-5 py-24 md:px-[6vw] md:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8e8982]">Where We Go</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#67625c]">Apparel · Fashion Goods · Jewelry · Living · Digital · More</p>
            </div>
            <div>
              <h2 className="text-[clamp(38px,6vw,84px)] font-black leading-[0.94] tracking-[-0.07em]">우리는 생활의 전반에 걸쳐 스며들 계획입니다.</h2>
              <p className="mt-8 max-w-3xl text-base leading-8 text-[#8f8981]">
                DMXDT의 중심은 특정한 물건 하나가 아닙니다. 질문하고 확인하는 태도를 의류, 패션잡화, 주얼리, 리빙과 새로운 영역으로 이어갑니다.
              </p>
              <a href="/products" className="mt-10 inline-flex border border-white/25 px-6 py-4 text-xs font-bold tracking-[0.12em] transition hover:border-white hover:bg-white hover:text-black">전체 상품 보기</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
