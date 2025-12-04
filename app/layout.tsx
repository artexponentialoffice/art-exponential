import type { Metadata } from "next";
import { Prompt } from "next/font/google"; 
import "./globals.css";

// 2. ตั้งค่าฟอนต์
const prompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"], 
  variable: "--font-prompt", 
  display: "swap",
});

// --- ส่วนที่เพิ่มเข้ามาใหม่สำหรับ SEO ---
export const metadata: Metadata = {
  // 1. ใส่ชื่อเว็บและคำอธิบาย (สำคัญมาก ⭐)
  title: "A.R.T EXPONENTIAL",
  description: "ผู้เชี่ยวชาญด้านงานระบบไฟฟ้าครบวงจร ตั้งแต่การจำหน่ายอุปกรณ์ไฟฟ้า ไปจนถึงการติดตั้งและบำรุงรักษา ด้วยมาตรฐานความปลอดภัยสูงสุด",
  
  // 2. ใส่คำค้นหา (Keywords)
  keywords: ["จำหน่ายอุปกรณ์ไฟฟ้าพร้อมติดตั้ง", "ขายอุปกรณ์ไฟฟ้าพร้อมติดตั้ง", "อุปกรณ์ไฟฟ้า", "บริษัท เอ.อาร์.ที. เอกซ์โพเนนเชียล จำกัด", "A.R.T EXPONENTIAL"],

  // 3. ยืนยันตัวตนกับ Google (ที่ได้จาก Google Search Console)
  verification: {
    google: "google-site-verification=vZp-a_5Fvs-uY0UQBDy6ZrZ5u_ca4qbyLRfv4THf_2g",
    // ตัวอย่าง: 'G-1234567890' (ถ้ายังไม่มี ให้เว้นว่างไว้ก่อน หรือลบบรรทัด verification นี้ออก)
  },

  // 4. (แถม) ตั้งค่าเวลาเอาลิงก์ไปแปะใน Facebook/Line (Open Graph)
  openGraph: {
    title: "A.R.T EXPONENTIAL",
    description: "ผู้เชี่ยวชาญด้านงานระบบไฟฟ้าครบวงจร ตั้งแต่การจำหน่ายอุปกรณ์ไฟฟ้า ไปจนถึงการติดตั้งและบำรุงรักษา ด้วยมาตรฐานความปลอดภัยสูงสุด",
    url: "www.art-exponential.co.th", // ใส่โดเมนจริงของคุณ
    siteName: "A.R.T EXPONENTIAL",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // เปลี่ยน lang="en" เป็น "th" เพื่อบอก Google ว่านี่เว็บไทย
    <html lang="th"> 
      <body
        className={`${prompt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
