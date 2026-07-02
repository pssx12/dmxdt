import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Why from '@/components/Why';
import Philosophy from '@/components/Philosophy';
import Foundation from '@/components/Foundation';
import Journey from '@/components/Journey';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Why />
        <Philosophy />
        <Foundation />

        <section id="archive" className="dmxdt-section bg-[#050505] text-[#f5f1e8]">
          <div className="mx-auto max-w-6xl">
            <p className="dmxdt-eyebrow">Archive</p>
            <h2 className="dmxdt-title mt-8">Trust begins with records.</h2>
            <p className="dmxdt-copy mt-10">
              DMXDT는 완성품만 보여주지 않습니다. 질문, 샘플, 실패, 수정, 선택의 과정을 기록합니다. 기록은 신뢰의 시작입니다.
            </p>
            <div className="mt-16 border-l-4 border-[#c47a3a] pl-8">
              <small className="block text-xs uppercase tracking-[0.26em] text-[#a49b90]">Question No.001</small>
              <strong className="mt-5 block text-3xl font-black leading-snug tracking-[-0.06em] md:text-6xl">
                오늘 당신은 정말 스스로 생각하며 살고 있습니까?
              </strong>
            </div>
          </div>
        </section>

        <Journey />

        <section id="contact" className="dmxdt-section flex items-center bg-[#080808] text-[#f5f1e8]">
          <div className="mx-auto max-w-6xl">
            <p className="dmxdt-eyebrow">Contact</p>
            <h2 className="dmxdt-title mt-8">Begin your journey.</h2>
            <p className="dmxdt-copy mt-10">DMXDT는 질문하는 사람들과 함께 성장합니다.</p>
            <p className="mt-10 text-3xl font-black tracking-[-0.06em] md:text-5xl">founder@dmxdt.com</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
