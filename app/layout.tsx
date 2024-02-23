import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from '@/components/Footer';


export const metadata = {
  title: "wei react project",
  description: "Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //setup loyout
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
