export default function HomeOverview() {
  return (
    <section id="brand" className="bg-[#f1ede5] px-5 py-20 text-[#0b0b0b] md:px-[6vw] md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-black/15 pb-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 md:pb-28">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#a35f2f]">Why DMXDT</p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#6f6860]">Two minds. One standard.</p>
          </div>
          <div>
            <h2 className="text-[clamp(40px,6vw,82px)] font-black leading-[0.98] tracking-[-0.07em]">
              두 개의 시선이<br />하나의 기준이 됩니다.
            </h2>
            <p className="mt-9 max-w-3xl text-lg leading-9 text-[#4e4944] md:text-xl">
              <strong className="font-black text-[#0b0b0b]">Dirty Mind</strong>는 익숙한 것을 낯설게 바라보는 자유로운 상상입니다.
              <br className="hidden md:block" />{' '}
              <strong className="font-black text-[#0b0b0b]">Doubting Thomas</strong>는 직접 보고, 만지고, 확인한 뒤에야 믿는 태도입니다.
            </p>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-[#4e4944] md:text-xl">
              DMXDT는 상상만으로 끝내지 않고, 의심만을 남기지도 않습니다.
              질문을 형태로 만들고, 감각을 품질로 증명합니다.
            </p>
          </div>
        </div>

        <div className="grid gap-12 border-b border-black/15 py-20 md:grid-cols-3 md:gap-10 md:py-28">
          <article>
            <p className="text-[11px] font-black tracking-[0.22em] text-[#a35f2f]">01 · SEE DIFFERENTLY</p>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">다르게 봅니다.</h3>
            <p className="mt-5 text-base leading-8 text-[#5b554f]">
              이미 정해진 답과 익숙한 아름다움을 그대로 따르지 않습니다. 작은 차이에서 새로운 가능성을 발견합니다.
            </p>
          </article>
          <article>
            <p className="text-[11px] font-black tracking-[0.22em] text-[#a35f2f]">02 · PROVE THE DETAIL</p>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">끝까지 확인합니다.</h3>
            <p className="mt-5 text-base leading-8 text-[#5b554f]">
              소재, 비율, 촉감과 마감까지 직접 검토합니다. 설명보다 실제 제품으로 우리의 기준을 증명합니다.
            </p>
          </article>
          <article>
            <p className="text-[11px] font-black tracking-[0.22em] text-[#a35f2f]">03 · MAKE IT LAST</p>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">오래 남게 만듭니다.</h3>
            <p className="mt-5 text-base leading-8 text-[#5b554f]">
              빠르게 소비되는 유행보다 시간이 지나도 다시 선택할 수 있는 형태와 물성을 추구합니다.
            </p>
          </article>
        </div>

        <div className="grid gap-10 pt-20 md:grid-cols-[0.75fr_1.25fr] md:items-end md:pt-28">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#a35f2f]">What We Make</p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#6f6860]">Jewelry · Bags · Apparel · Lifestyle</p>
          </div>
          <div>
            <p className="text-[clamp(28px,4vw,52px)] font-black leading-[1.12] tracking-[-0.055em]">
              보이는 것 너머를 보고,<br />남는 것을 만듭니다.
            </p>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#5b554f] md:text-lg">
              DMXDT는 주얼리, 가방, 의류와 라이프스타일 제품을 통해 질문하는 태도를 일상에서 사용할 수 있는 물건으로 완성합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
