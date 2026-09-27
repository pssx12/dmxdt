import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HomeOverview from '@/components/HomeOverview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeOverview />
      </main>
      <Footer />
    </>
  );
}
