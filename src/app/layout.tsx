import './globals.css';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/NavBar';
import { PageContainer } from '@/components/PageContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wall app',
  description: 'Do not memorize all you plans, just make a note.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col h-full w-full bg-beige-100">
          <PageContainer>
            <NavBar />
            {children}
          </PageContainer>
        </main>
      </body>
    </html>
  );
}
