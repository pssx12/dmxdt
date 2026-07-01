export default function Foundation() {
  return (
    <section id="foundation" className="section grid gap-16 md:grid-cols-2 md:items-center">
      <div>
        <p className="eyebrow">FIRST STEP</p>
        <h2 className="title">FOUNDATION F001</h2>
        <p className="copy">DMXDT의 첫 번째 기준 제품. 큰 로고보다 완성도, 유행보다 오래 입는 기준, 과시보다 신뢰를 선택합니다.</p>
        <ul className="mt-8 text-lg text-[#ddd]">
          {['Relaxed Box Fit','100% Cotton French Terry','470–490 GSM Target','Prototype Under Development'].map((item) => <li key={item} className="border-b border-white/10 py-4">{item}</li>)}
        </ul>
      </div>
      <div className="text-center">
        <div className="relative mx-auto h-[340px] w-[300px] rounded-[76px_76px_24px_24px] bg-[#020202] shadow-2xl">
          <img src="/logo/dmxdt-eye-official.png" alt="symbol position" className="absolute left-[123px] top-[38px] w-[34px]" />
        </div>
        <p className="mt-6 text-sm text-[#9f978c]">심볼 위치: 목 시보리 봉제선 아래, 착용자 기준 왼쪽</p>
      </div>
    </section>
  );
}
