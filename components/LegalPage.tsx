import Link from 'next/link';
import Footer from '@/components/Footer';

export default function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: Array<[string, string]> }) {
  return (
    <>
      <main className="min-h-screen bg-[#050505] px-6 py-12 text-[#f5f1e8] md:px-[6vw] md:py-20">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.22em] text-[#c47a3a]">← DMXDT Home</Link>
          <p className="dmxdt-eyebrow mt-16">{eyebrow}</p>
          <h1 className="mt-7 text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl">{title}</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#a49b90]">{intro}</p>
          <dl className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {sections.map(([sectionTitle, detail]) => (
              <div key={sectionTitle} className="grid gap-4 py-8 md:grid-cols-[180px_1fr]">
                <dt className="font-black">{sectionTitle}</dt>
                <dd className="whitespace-pre-line leading-7 text-[#a49b90]">{detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm leading-7 text-[#79736b]">시행일: 2026년 9월 21일</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
