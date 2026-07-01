import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DMXDT — Question Everything',
  description: 'DMXDT — Dirty Mind × Doubting Thomas. 질문하고, 확인하고, 오래 남을 것을 만듭니다.',
  openGraph: { title:'DMXDT', description:'Question Everything. Build What Lasts.', url:'https://www.dmxdt.com', siteName:'DMXDT', type:'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
