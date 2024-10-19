'use client'
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import { AnimatePresence,motion } from "framer-motion";
import { usePathname } from "next/navigation"





const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  const pathname = usePathname();
  

  return (
    <html lang="en">
      <body >
        <Navbar />
        <Rightbar />

        {/* <AnimatePresence mode="wait"> */}
          <motion.div
            key={pathname} // 使用 pathname 作为 key，以便在切换页面时触发动画
            initial={{ opacity: 0, y: 20 }} // 初始状态
            animate={{ opacity: 1, y: 0 }} // 进入动画
            exit={{ opacity: 0, y: -20 }} // 退出动画
            transition={{ duration: 0.5 }} // 动画时长
          >
         {children}

         </motion.div>
        {/* </AnimatePresence> */}
      </body>
    </html>
  );
}
