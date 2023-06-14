import { ReactNode } from "react";
import { Nunito } from 'next/font/google';
import Header from "@/components/app/header";
import 'swiper/css'
import "swiper/css/navigation";
import './global.css'
import { SideBarFundo, SideBarRoot, SidebarMain } from "@/components/app/sidebar";

const nunito = Nunito({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <SideBarRoot>
          <Header />
          {children}
        </SideBarRoot>
      </body>
    </html>
  );
}
