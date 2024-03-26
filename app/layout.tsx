import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Head from 'next/head';

export const metadata = {
  title: 'JingyiZhang',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head><link rel="shortcut icon" href="/favicon.ico" /></Head>
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
