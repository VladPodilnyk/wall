import './globals.css';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/NavBar';

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
        <main className="flex flex-col h-screen w-screen bg-amber-100">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
