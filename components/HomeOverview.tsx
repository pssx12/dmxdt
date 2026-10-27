export default function HomeOverview() {
  return (
    <section id="brand" className="bg-[#f1ede5] px-5 py-20 text-[#0b0b0b] md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-black/15 pb-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 md:pb-28">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#a35f2f]">About DMXDT</p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#6f6860]">Dirty Mind × Doubting Thomas</p>
          </div>
          <div>
            <h2 className="text-[clamp(40px,6vw,82px)] font-black leading-[0.96] tracking-[-0.07em]">
              Question Everything.<br />Build What Lasts.
            </h2>
            <p className="mt-9 max-w-3xl text-lg leading-9 text-[#4e4944] md:text-xl">
              DMXDT는 세상을 부정하기 위해서가 아니라 더 깊이 이해하기 위해 질문합니다.
              당연하게 받아들여지는 기준을 다시 바라보고, 오래 남을 형태와 물성으로 답합니다.
            </p>
          </div>
        </div>

        <div className="grid gap-12 pt-20 md:grid-cols-3 md:gap-10 md:pt-28">
          <article>
            <p className="text-[11px] font-black tracking-[0.22em] text-[#a35f2f]">01 · IDENTITY</p>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">질문에서 시작합니다.</h3>
            <p className="mt-5 text-base leading-8 text-[#5b554f]">
              Dirty Mind의 자유로운 시선과 Doubting Thomas의 검증하는 태도를 하나의 브랜드 정신으로 연결합니다.
            </p>
          </article>
          <article>
            <p className="text-[11px] font-black tracking-[0.22em] text-[#a35f2f]">02 · PRODUCT</p>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">기준을 제품으로 만듭니다.</h3>
            <p className="mt-5 text-base leading-8 text-[#5b554f]">
              주얼리, 가방, 의류와 라이프스타일 제품을 통해 DMXDT만의 형태와 품질 기준을 구현합니다.
            </p>
          </article>
          <article>
            <p className="text-[11px] font-black tracking-[0.22em] text-[#a35f2f]">03 · TRUST</p>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">기록으로 신뢰를 남깁니다.</h3>
            <p className="mt-5 text-base leading-8 text-[#5b554f]">
              제품의 정보와 정품 여부를 투명하게 확인할 수 있도록 제작과 인증의 기록을 관리합니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
