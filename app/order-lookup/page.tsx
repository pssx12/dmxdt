import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OrderLookupPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050505] px-5 pb-24 pt-36 text-[#f5f1e8] md:px-[6vw] md:pt-44">
        <section className="mx-auto max-w-3xl">
          <p className="dmxdt-eyebrow">Order Status</p>
          <h1 className="mt-7 text-[clamp(42px,7vw,84px)] font-black leading-[0.94] tracking-[-0.07em]">주문 조회</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#aaa198] md:text-lg">
            주문번호와 주문자 정보를 이용해 결제 및 배송 진행 상태를 확인하는 화면입니다.
          </p>

          <div className="mt-12 border border-white/10 bg-[#080808] p-6 md:p-10">
            <div className="grid gap-7">
              <label className="grid gap-3">
                <span className="checkout-label">주문번호</span>
                <input className="checkout-input" type="text" placeholder="주문번호를 입력하세요" disabled />
              </label>
              <label className="grid gap-3">
                <span className="checkout-label">주문자 휴대전화번호</span>
                <input className="checkout-input" type="tel" placeholder="숫자만 입력하세요" disabled />
              </label>
              <button type="button" disabled className="min-h-14 cursor-not-allowed bg-[#f5f1e8]/35 px-6 text-sm font-black tracking-[0.08em] text-[#050505]">
                주문 조회 준비 중
              </button>
            </div>
            <p className="mt-6 text-sm leading-7 text-[#8c857d]">
              현재는 화면 시안 단계입니다. 주문 데이터베이스 연결과 조회 기능 검증을 마친 뒤 사용할 수 있습니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
