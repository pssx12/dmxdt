import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionBlock from '@/components/SectionBlock';
import Foundation from '@/components/Foundation';
import Journey from '@/components/Journey';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionBlock id="why" eyebrow="WHY DMXDT" title="우리는 옷을 만드는 회사가 아닙니다.">
          <p>의류는 시작입니다. DMXDT는 질문하는 태도를 제품, 공간, 쉼, 공동체로 확장하는 브랜드입니다.</p>
        </SectionBlock>
        <SectionBlock id="philosophy" eyebrow="PHILOSOPHY" title={'질문하라.\n확인하라.\n오래 남길 것을 만들어라.'}>
          <p>Dirty Mind는 틀을 깨는 상상입니다. Doubting Thomas는 직접 확인하는 태도입니다. 이 둘이 만나 DMXDT의 눈이 되었습니다.</p>
        </SectionBlock>
        <Foundation />
        <SectionBlock id="archive" eyebrow="ARCHIVE" title="신뢰는 기록에서 시작됩니다.">
          <p>DMXDT는 완성품만 보여주지 않습니다. 샘플, 실패, 수정, 원단, 봉제, 운영 과정을 기록합니다. 행택과 QR은 이 기록으로 연결됩니다.</p>
          <div className="mt-12 border-l-4 border-[#f5f1e8] pl-8">
            <small className="block text-xs uppercase tracking-[.2em] text-[#999]">Question No.001</small>
            <strong className="mt-4 block text-3xl leading-snug md:text-5xl">오늘 당신은 정말 스스로 생각하며 살고 있습니까?</strong>
          </div>
        </SectionBlock>
        <Journey />
        <SectionBlock id="contact" eyebrow="CONTACT" title="DMXDT">
          <p>Brand Platform · Foundation · Place · Stay · Life Community</p>
          <p className="mt-8 text-3xl font-black">founder@dmxdt.com</p>
        </SectionBlock>
      </main>
      <Footer />
    </>
  );
}
