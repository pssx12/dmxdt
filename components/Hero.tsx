export default function Hero() {
  return (
    <section id="home" className="bg-[#070707] px-5 text-[#f2f0eb] md:px-[5vw]">
      <div className="mx-auto flex min-h-[100svh] max-w-[1200px] items-center justify-center pb-12 pt-24 text-center">
        <h1 className="text-[clamp(32px,5.2vw,72px)] font-semibold leading-[1.34] tracking-[-0.055em]">
          세상을 부정하기 위해서가 아니라,<br />
          당연한 것을 다시 묻고,<br />
          보이는 그대로 믿기 전에<br />
          한 번 더 생각합니다.
        </h1>
      </div>
    </section>
  );
}
