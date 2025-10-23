import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

export const metadata = {
  title: 'JingyiZhang',
  description: '',
  icons: {
    icon: '/images/dedicated/Profile.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
