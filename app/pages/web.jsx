import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
// หมายเหตุ: หากไม่มี next/image หรือมีปัญหาเรื่องโดเมนรูปภาพ สามารถใช้ <img> ธรรมดาแทนได้
// ในโค้ดนี้ผมใช้ <img> ธรรมดาในส่วนที่เป็น Content เพื่อลดปัญหาการตั้งค่า next.config.js

import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  ChevronRight,
  Zap,        // ไฟฟ้า
  Package,
  Wrench,
  Shield,
  Target,
  Users,
  Building2,
  Stethoscope, // แพทย์
  FlaskConical, // วิทยาศาสตร์
  Monitor,     // ไอที
  Briefcase,
  Bolt,
  ArrowRight,
  Lightbulb
} from "lucide-react";

/* =========================================
   1. MOCK DATA (ข้อมูลจำลอง)
   ========================================= */

const news = [
  {
    id: 1,
    title: "A.R.T. EXPONENTIAL เปิดตัวโซลูชันประหยัดพลังงานสำหรับโรงงานอุตสาหกรรม",
    date: "15 Nov 2025",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
    excerpt: "นวัตกรรมระบบจัดการพลังงานอัจฉริยะ ช่วยลดต้นทุนค่าไฟฟ้าได้สูงสุด 30% พร้อมระบบ Monitor Real-time"
  },
  {
    id: 2,
    title: "ส่งมอบครุภัณฑ์ทางการแพทย์ รพ.ศูนย์อุบลราชธานี",
    date: "02 Nov 2025",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
    excerpt: "ทีมงานเข้าติดตั้งและทดสอบระบบเครื่องมือแพทย์ห้องผ่าตัด เพื่อยกระดับการรักษาพยาบาลในพื้นที่ภาคอีสาน"
  },
  {
    id: 3,
    title: "กิจกรรม CSR: ปันน้ำใจสู่โรงเรียนห่างไกล",
    date: "20 Oct 2025",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
    excerpt: "มอบอุปกรณ์การเรียนและติดตั้งระบบไฟฟ้าโซล่าเซลล์ให้กับโรงเรียนในถิ่นทุรกันดาร"
  }
];

const products = [
  // --- หมวดระบบไฟฟ้า ---
  {
    id: 101,
    name: "Industrial Switchgear (ตู้สวิทช์บอร์ด)",
    detail: "ตู้ MDB มาตรฐาน IEC รองรับกระแสไฟฟ้าสูง",
    category: "ระบบไฟฟ้าและงานติดตั้ง",
    image: "https://images.unsplash.com/photo-1563729881604-e53b6cb55639?auto=format&fit=crop&q=80&w=600",
    description: "ตู้ควบคุมไฟฟ้าหลัก (Main Distribution Board) ออกแบบและผลิตตามมาตรฐานวิศวกรรม พร้อมอุปกรณ์ป้องกันครบถ้วน"
  },
  {
    id: 102,
    name: "Solar Hybrid System 10kW",
    detail: "ระบบโซล่าเซลล์ไฮบริด พร้อมแบตเตอรี่สำรองไฟ",
    category: "ระบบไฟฟ้าและงานติดตั้ง",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600",
    description: "ชุดติดตั้งโซล่าเซลล์ขนาด 10kW ระบบ Hybrid Inverter สามารถทำงานร่วมกับไฟบ้านและแบตเตอรี่ เหมาะสำหรับสำนักงาน"
  },
  {
    id: 103,
    name: "LED High Bay Light 200W",
    detail: "โคมไฟโรงงานประสิทธิภาพสูง ประหยัดไฟ",
    category: "ระบบไฟฟ้าและงานติดตั้ง",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=600",
    description: "โคมไฟ LED High Bay สำหรับติดตั้งในโกดังหรือโรงงาน ให้ความสว่างสูง อายุการใช้งานยาวนานกว่า 50,000 ชั่วโมง"
  },
  // --- หมวดการแพทย์ ---
  {
    id: 201,
    name: "Patient Monitor (เครื่องติดตามสัญญาณชีพ)",
    detail: "แสดงผล Vital Signs 5 พารามิเตอร์ จอสัมผัส",
    category: "การแพทย์",
    image: "https://images.unsplash.com/photo-1551076882-68b47d19d609?auto=format&fit=crop&q=80&w=600",
    description: "เครื่องติดตามสัญญาณชีพผู้ป่วยรุ่นล่าสุด เชื่อมต่อระบบ Central Monitor ได้ พร้อมฟังก์ชันวิเคราะห์คลื่นหัวใจ"
  },
  {
    id: 202,
    name: "Medical Ventilator",
    detail: "เครื่องช่วยหายใจชนิดควบคุมปริมาตรและความดัน",
    category: "การแพทย์",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    description: "เครื่องช่วยหายใจสำหรับผู้ป่วยวิกฤต รองรับทั้งเด็กและผู้ใหญ่ มีโหมดการทำงานครบถ้วน"
  },
  // --- หมวดวิทยาศาสตร์ ---
  {
    id: 301,
    name: "Digital Microscope",
    detail: "กล้องจุลทรรศน์ดิจิทัล กำลังขยาย 1600x",
    category: "วิทยาศาสตร์และห้องปฏิบัติการ",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600",
    description: "กล้องจุลทรรศน์คุณภาพสูง พร้อมกล้องถ่ายภาพในตัว เชื่อมต่อคอมพิวเตอร์ผ่าน USB เพื่อบันทึกภาพและวิดีโอ"
  },
  // --- หมวดไอที ---
  {
    id: 401,
    name: "Enterprise Server",
    detail: "เซิร์ฟเวอร์ประสิทธิภาพสูง สำหรับองค์กร",
    category: "สินค้าไอทีและคอมพิวเตอร์",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=600",
    description: "Rack Server 2U รองรับ CPU คู่, RAM สูงสุด 2TB เหมาะสำหรับงาน Virtualization และ Database"
  }
];

const executives = [
  {
    name: "นายสนั่น สุตัญตั้งใจ",
    position: "ประธานบริษัท",
    image: "/images/TJC1.jpg", // ใช้รูป Placeholder หรือ URL จริง
  },
  {
    name: "นางประนอม สุตัญตั้งใจ",
    position: "รองประธานบริษัท",
    image: "/images/TJC2.jpg",
  },
  {
    name: "นายอรรถสิทธิ์ สุตัญตั้งใจ",
    position: "ประธานเจ้าหน้าที่บริหาร",
    image: "/images/TJC3.jpg",
  },
];

const services = [
  {
    icon: Zap,
    title: "ระบบไฟฟ้าครบวงจร",
    desc: "บริการออกแบบ ติดตั้ง และซ่อมบำรุงระบบไฟฟ้าแรงสูง-แรงต่ำ โดยทีมวิศวกรและช่างผู้ชำนาญการ",
  },
  {
    icon: Package,
    title: "จัดส่งและติดตั้ง",
    desc: "บริการจัดส่งสินค้าพร้อมติดตั้งด้วยมาตรฐานความปลอดภัยสูงสุด รวดเร็ว ตรงเวลา",
  },
  {
    icon: Wrench,
    title: "ซ่อมบำรุง",
    desc: "บริการดูแลรักษาและซ่อมบำรุงเครื่องมือแพทย์และระบบไฟฟ้า เพื่อยืดอายุการใช้งาน",
  },
  {
    icon: Shield,
    title: "การรับประกัน",
    desc: "มั่นใจด้วยการรับประกันคุณภาพสินค้าและบริการหลังการขายที่รวดเร็วตลอด 24 ชม.",
  },
];

const clients = [
  { name: "กระทรวงการอุดมศึกษาฯ", short: "อว.", sector: "กระทรวง", logo: "/images/dechudom.png" },
  { name: "กรมส่งเสริมการปกครองท้องถิ่น", short: "DLA", sector: "ท้องถิ่น", logo: "/images/department.png" },
  { name: "สสว.", short: "สสว.", sector: "SME", logo: "/images/ssw.jpg" },
  { name: "มหาวิทยาลัยราชภัฏพระนครศรีอยุธยา", short: "PSAU", sector: "มหาวิทยาลัย", logo: "/images/dechudom.png" },
  { name: "กรมควบคุมโรค", short: "DDC", sector: "สาธารณสุข", logo: "/images/diseasecontrol.jpg" },
  { name: "สพฐ.", short: "สพฐ.", sector: "การศึกษา", logo: "/images/hightschoolbkk.jpg" },
  { name: "องค์การบริหารส่วนจังหวัด", short: "อบจ.", sector: "ท้องถิ่น", logo: "/images/busubon.jpg" },
  { name: "กรมสุขภาพจิต", short: "DMH", sector: "สาธารณสุข", logo: "/images/health.jpg" },
  { name: "เทศบาลนครอุบลราชธานี", short: "เทศบาลนครอุบลฯ", sector: "เทศบาล", logo: "/images/tessabanubon.png" },
  { name: "วิทยาลัยเทคนิคอุบลราชธานี", short: "UBON TECH", sector: "อาชีวศึกษา", logo: "/images/technicalubon.jpg" },
];

/* =========================================
   2. MAIN COMPONENT (หน้าเว็บหลัก)
   ========================================= */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>A.R.T EXPONENTIAL | Powering Innovation</title>
        <meta name="description" content="A.R.T EXPONENTIAL - Excellence in Electrical & Medical Innovation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; box-shadow: 0 0 10px rgba(251, 191, 36, 0.2); }
          50% { opacity: 1; box-shadow: 0 0 30px rgba(251, 191, 36, 0.6); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out 3s infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s infinite; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        
        .bg-grid-slate {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
      `}</style>

      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
        
        {/* --- Navbar --- */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled
              ? "bg-[#0B1120]/95 backdrop-blur-md shadow-lg py-2 border-b border-white/10"
              : "bg-transparent py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo Area */}
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-amber-500/30">
                   A
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight text-white leading-none">
                    A.R.T <span className="text-amber-400">EXPONENTIAL</span>
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-slate-400">
                    Innovation & Energy
                  </span>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                {["หน้าแรก", "บริการ", "สินค้า", "เกี่ยวกับ", "ลูกค้า", "ติดต่อ"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
                  </a>
                ))}
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-6 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                >
                  ปรึกษาเรา
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-white hover:text-amber-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#0B1120] border-t border-slate-800 absolute w-full shadow-2xl">
              <div className="px-4 py-4 space-y-2">
                {["หน้าแรก", "บริการ", "สินค้า", "เกี่ยวกับ", "ลูกค้า", "ติดต่อ"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-white/5 hover:text-amber-400 font-medium transition-colors border-l-2 border-transparent hover:border-amber-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* --- HERO SECTION --- */}
        <section id="หน้าแรก" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1120]">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none opacity-20" />
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Content */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span className="text-blue-200 text-xs font-bold tracking-wider uppercase">Future of Engineering</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                  POWERING <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 drop-shadow-lg">
                    THE FUTURE
                  </span>
                </h1>
                
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                  ผู้นำด้านนวัตกรรม <span className="text-white font-medium">ระบบไฟฟ้า เครื่องมือแพทย์ และโซลูชันวิทยาศาสตร์</span> 
                  ที่ขับเคลื่อนด้วยเทคโนโลยีและความเชี่ยวชาญกว่า 10 ปี เพื่อความยั่งยืนของคุณ
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="#สินค้า" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white rounded-full font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 hover:-translate-y-1">
                    <Zap size={20} fill="currentColor" />
                    ดูสินค้าของเรา
                  </Link>
                  <Link href="#ติดต่อ" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center backdrop-blur-sm hover:-translate-y-1">
                    ติดต่อสอบถาม
                  </Link>
                </div>

                {/* Stats */}
                <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-white">10+</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Visual Content (Abstract Electric Hub) */}
              <div className="relative hidden lg:block h-[600px]">
                {/* Central Glowing Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-900 to-slate-900 rounded-full shadow-[0_0_100px_rgba(59,130,246,0.2)] flex items-center justify-center animate-pulse-glow z-10 border border-blue-500/30">
                  <div className="absolute inset-2 border border-blue-400/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
                  <Bolt size={80} className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
                </div>

                {/* Floating Orbiting Elements */}
                {/* 1. Medical */}
                <div className="absolute top-[20%] left-[10%] p-4 bg-[#0B1120]/80 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl animate-float z-20 hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <Stethoscope className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Department</div>
                      <div className="text-sm font-bold text-white">Medical Equip.</div>
                    </div>
                  </div>
                </div>

                {/* 2. Science */}
                <div className="absolute bottom-[25%] right-[5%] p-4 bg-[#0B1120]/80 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl animate-float-delayed z-20 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <FlaskConical className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Department</div>
                      <div className="text-sm font-bold text-white">Science Lab</div>
                    </div>
                  </div>
                </div>

                {/* 3. Electrical (Main) */}
                <div className="absolute top-[15%] right-[15%] p-4 bg-[#0B1120]/80 backdrop-blur-md border border-amber-500/50 rounded-2xl shadow-xl animate-float z-20 hover:border-amber-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                      <Zap className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Core Service</div>
                      <div className="text-sm font-bold text-white">Electrical Sys.</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M300 300 L150 150" stroke="#60A5FA" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M300 300 L450 150" stroke="#FBBF24" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M300 300 L450 450" stroke="#A78BFA" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="300" cy="300" r="150" stroke="rgba(255,255,255,0.1)" fill="none" />
                  <circle cx="300" cy="300" r="220" stroke="rgba(255,255,255,0.05)" fill="none" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Curve Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
            </svg>
          </div>
        </section>

        {/* --- SERVICES --- */}
        <section id="บริการ" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">Our Services</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">บริการมาตรฐานวิศวกรรม</h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amber-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-amber-500 transition-colors">
                      <Icon className="text-amber-500 group-hover:text-white transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- PRODUCT CATEGORIES (Featured) --- */}
        <section id="สินค้า" className="py-24 bg-[#0F172A] relative overflow-hidden">
          {/* Decorative Glows */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <span className="text-amber-400 font-bold tracking-wider uppercase text-sm">Product Categories</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
                  หมวดหมู่สินค้า
                </h2>
              </div>
              <div className="hidden md:block text-slate-400 max-w-md text-right">
                ครอบคลุมทุกความต้องการด้านวิศวกรรมไฟฟ้า วิทยาศาสตร์ และการแพทย์
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* 1. ระบบไฟฟ้า (Highlight) */}
               <div 
                 onClick={() => setSelectedCategory({ title: "ระบบไฟฟ้าและงานติดตั้ง", key: "ระบบไฟฟ้าและงานติดตั้ง" })}
                 className="col-span-1 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-colors"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900 z-0"></div>
                  {/* Background Image Placeholder */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" /> 
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                  
                  <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                    <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                      <Zap className="text-white" size={28} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">ระบบไฟฟ้าและงานติดตั้ง</h3>
                    <p className="text-slate-300 mb-6 max-w-lg leading-relaxed">อุปกรณ์ไฟฟ้าโรงงาน อุปกรณ์แรงสูง-แรงต่ำ สายไฟ โคมไฟ LED และงานระบบ Solar Cell ครบวงจร</p>
                    <span className="flex items-center text-amber-400 font-bold group-hover:translate-x-2 transition-transform">
                      ดูสินค้าทั้งหมด <ArrowRight className="ml-2" size={20} />
                    </span>
                  </div>
               </div>

               {/* 2. การแพทย์ */}
               <div 
                 onClick={() => setSelectedCategory({ title: "เครื่องมือและอุปกรณ์ทางการแพทย์", key: "การแพทย์" })}
                 className="bg-white rounded-3xl p-8 cursor-pointer group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden min-h-[250px] flex flex-col justify-between"
               >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                 <Stethoscope className="text-emerald-500 mb-6 relative z-10" size={40} />
                 <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">เครื่องมือแพทย์</h3>
                    <p className="text-slate-500 text-sm mb-4 relative z-10">ครุภัณฑ์ทางการแพทย์ และวัสดุสิ้นเปลืองมาตรฐานสากล</p>
                 </div>
                 <span className="text-emerald-600 text-sm font-bold flex items-center">เลือกดู <ChevronRight size={16} /></span>
               </div>

               {/* 3. วิทยาศาสตร์ */}
               <div 
                 onClick={() => setSelectedCategory({ title: "วิทยาศาสตร์และห้องปฏิบัติการ", key: "วิทยาศาสตร์และห้องปฏิบัติการ" })}
                 className="bg-white rounded-3xl p-8 cursor-pointer group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden min-h-[250px] flex flex-col justify-between"
               >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                 <FlaskConical className="text-purple-500 mb-6 relative z-10" size={40} />
                 <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">วิทยาศาสตร์</h3>
                    <p className="text-slate-500 text-sm mb-4 relative z-10">อุปกรณ์ห้องแล็บ สารเคมี และเครื่องมือวิเคราะห์</p>
                 </div>
                 <span className="text-purple-600 text-sm font-bold flex items-center">เลือกดู <ChevronRight size={16} /></span>
               </div>

               {/* 4. ไอที */}
               <div 
                 onClick={() => setSelectedCategory({ title: "สินค้าไอทีและคอมพิวเตอร์", key: "สินค้าไอทีและคอมพิวเตอร์" })}
                 className="bg-white rounded-3xl p-8 cursor-pointer group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden min-h-[250px] flex flex-col justify-between"
               >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                 <Monitor className="text-blue-500 mb-6 relative z-10" size={40} />
                 <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">ไอที & คอมพิวเตอร์</h3>
                    <p className="text-slate-500 text-sm mb-4 relative z-10">ฮาร์ดแวร์ ซอฟต์แวร์ และระบบเครือข่าย</p>
                 </div>
                 <span className="text-blue-600 text-sm font-bold flex items-center">เลือกดู <ChevronRight size={16} /></span>
               </div>

               {/* 5. อื่นๆ */}
               <div 
                 onClick={() => setSelectedCategory({ title: "อุปกรณ์สำนักงาน", key: "อุปกรณ์สำนักงาน" })}
                 className="bg-slate-800 rounded-3xl p-8 cursor-pointer group hover:-translate-y-2 transition-transform duration-300 border border-slate-700 min-h-[250px] flex flex-col justify-between"
               >
                 <Briefcase className="text-slate-400 mb-6 group-hover:text-white transition-colors" size={40} />
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2">สำนักงาน & อื่นๆ</h3>
                    <p className="text-slate-400 text-sm mb-4">ครุภัณฑ์สำนักงาน อุปกรณ์กีฬา และงานก่อสร้าง</p>
                 </div>
                 <span className="text-white text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">เลือกดู <ChevronRight size={16} /></span>
               </div>

            </div>
          </div>
        </section>

        {/* --- NEWS SECTION --- */}
        <section id="ข่าวสาร" className="py-24 bg-slate-50">
           <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-end mb-12">
                 <div>
                    <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">Update</span>
                    <h2 className="text-3xl font-bold text-slate-900 mt-2">ข่าวสารและกิจกรรม</h2>
                 </div>
                 <a href="#" className="text-slate-500 hover:text-amber-600 font-semibold flex items-center gap-2 text-sm">ดูทั้งหมด <ArrowRight size={16}/></a>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {news.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                       <div className="h-48 overflow-hidden relative">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">
                             {item.date}
                          </div>
                       </div>
                       <div className="p-6">
                          <h3 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                          <p className="text-slate-500 text-sm line-clamp-2 mb-4">{item.excerpt}</p>
                          <span className="text-amber-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">อ่านต่อ <ArrowRight size={16}/></span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- ABOUT / EXECUTIVES --- */}
        <section id="เกี่ยวกับ" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative">
                   <div className="absolute inset-0 bg-amber-200 rounded-3xl transform rotate-3"></div>
                   <div className="relative bg-[#0B1120] rounded-3xl p-10 text-white shadow-2xl overflow-hidden">
                      <div className="absolute top-0 right-0 p-10 opacity-10">
                         <Target size={200} />
                      </div>
                      <h3 className="text-3xl font-bold mb-6 text-amber-400">วิสัยทัศน์ (Vision)</h3>
                      <p className="text-lg leading-relaxed text-slate-300 relative z-10">
                      "มุ่งเป็นผู้นำด้านอุปกรณ์วิศวกรรมและการแพทย์มาตรฐานสากล สร้างความเชื่อมั่นด้วยนวัตกรรม 
                       พร้อมขับเคลื่อนสังคมด้วยพลังงานที่ยั่งยืน"
                      </p>
                      <div className="mt-8 pt-8 border-t border-slate-700 flex gap-8">
                         <div>
                            <span className="block text-3xl font-bold text-white">2562</span>
                            <span className="text-xs text-slate-500">Established</span>
                         </div>
                         <div>
                            <span className="block text-3xl font-bold text-white">ISO</span>
                            <span className="text-xs text-slate-500">Certified</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div>
                   <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">About Us</span>
                   <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">ผู้บริหารมืออาชีพ</h2>
                   <p className="text-slate-600 mb-8 leading-relaxed">
                      ทีมผู้บริหารที่มีวิสัยทัศน์กว้างไกล พร้อมนำพาองค์กรสู่ความเป็นเลิศ 
                      ด้วยประสบการณ์การทำงานกว่าทศวรรษในวงการวิศวกรรมและการแพทย์
                   </p>
                   
                   <div className="space-y-6">
                      {executives.map((exec, idx) => (
                         <div key={idx} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-100 flex-shrink-0">
                               <img src={exec.image} alt={exec.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                               <h4 className="font-bold text-slate-900">{exec.name}</h4>
                               <span className="text-amber-600 text-sm font-medium">{exec.position}</span>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* --- CLIENTS --- */}
        <section id="ลูกค้า" className="py-16 bg-slate-50 border-t border-slate-200">
           <div className="max-w-7xl mx-auto px-4">
              <p className="text-center text-slate-500 font-semibold mb-8 uppercase tracking-widest text-xs">Trusted By Government & Private Sectors</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                 {clients.slice(0, 5).map((client, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center p-4">
                       <img src={client.logo} alt={client.short} className="h-16 object-contain mb-2" />
                       <span className="text-xs text-center hidden md:block">{client.short}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="bg-[#0B1120] text-slate-300 py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                   <div className="flex items-center gap-2 mb-6 text-white">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-xl text-white">A</div>
                      <span className="text-xl font-bold">A.R.T EXPONENTIAL</span>
                   </div>
                   <p className="mb-6 max-w-sm text-slate-400">
                      บริษัทชั้นนำด้านการจัดจำหน่ายและติดตั้งอุปกรณ์ไฟฟ้า เครื่องมือแพทย์ และเครื่องมือวิทยาศาสตร์ 
                      มุ่งมั่นสร้างสรรค์งานคุณภาพเพื่อความพึงพอใจสูงสุดของลูกค้า
                   </p>
                   <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={20} /></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"><MessageCircle size={20} /></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all"><Mail size={20} /></a>
                   </div>
                </div>

                <div>
                   <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm text-amber-500">Contact Info</h4>
                   <ul className="space-y-4 text-sm">
                      <li className="flex gap-3">
                         <Phone size={18} className="text-slate-500 flex-shrink-0" />
                         <span>094-543-8829 (สำนักงาน)<br/>099-413-2744 (เคลมสินค้า)</span>
                      </li>
                      <li className="flex gap-3">
                         <Mail size={18} className="text-slate-500 flex-shrink-0" />
                         <span>a.r.t.exponential.office@gmail.com</span>
                      </li>
                      <li className="flex gap-3">
                         <MapPin size={18} className="text-slate-500 flex-shrink-0" />
                         <span>99/35 นิว คอนเน็กซ์ เฮาส์ ถ.พหลโยธิน แขวงสนามบิน เขตดอนเมือง กทม. 10210</span>
                      </li>
                   </ul>
                </div>

                <div>
                   <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm text-amber-500">Quick Links</h4>
                   <ul className="space-y-2 text-sm">
                      <li><a href="#หน้าแรก" className="hover:text-white transition-colors">หน้าแรก</a></li>
                      <li><a href="#สินค้า" className="hover:text-white transition-colors">สินค้าและบริการ</a></li>
                      <li><a href="#เกี่ยวกับ" className="hover:text-white transition-colors">เกี่ยวกับเรา</a></li>
                      <li><a href="#ติดต่อ" className="hover:text-white transition-colors">ติดต่อเรา</a></li>
                   </ul>
                </div>
             </div>
             <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
                &copy; 2025 A.R.T EXPONENTIAL CO., LTD. All rights reserved.
             </div>
          </div>
        </footer>

        {/* --- MODALS --- */}
        
        {/* 1. Category Modal */}
        {selectedCategory && (
           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4" onClick={() => setSelectedCategory(null)}>
              <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[85vh] flex flex-col overflow-hidden animate-[float_0.3s_ease-out]" onClick={e => e.stopPropagation()}>
                 <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">{selectedCategory.title}</h3>
                        <p className="text-sm text-slate-500">รายการสินค้าในหมวดหมู่</p>
                    </div>
                    <button onClick={() => setSelectedCategory(null)} className="p-2 hover:bg-slate-200 rounded-full transition-colors"><X className="text-slate-500" /></button>
                 </div>
                 <div className="p-8 overflow-y-auto custom-scrollbar bg-slate-50/50 h-full">
                    {products.filter(p => p.category === selectedCategory.key || selectedCategory.key === 'All').length > 0 ? (
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          {products.filter(p => p.category === selectedCategory.key).map((product, idx) => (
                             <div key={idx} onClick={() => setSelectedProduct(product)} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg border border-slate-200 hover:border-amber-400 cursor-pointer transition-all group">
                                <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden mb-3 relative">
                                   <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h4 className="font-bold text-slate-800 text-sm line-clamp-2 mb-1 group-hover:text-amber-600 transition-colors">{product.name}</h4>
                                <p className="text-xs text-slate-500 truncate">{product.detail}</p>
                             </div>
                          ))}
                       </div>
                    ) : (
                       <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                          <Package size={64} className="mb-4 opacity-50"/>
                          <p>ยังไม่มีรายการสินค้าในหมวดหมู่นี้</p>
                       </div>
                    )}
                 </div>
              </div>
           </div>
        )}

        {/* 2. Product Modal */}
        {selectedProduct && (
           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
              <div className="bg-white rounded-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden shadow-2xl animate-[float_0.3s_ease-out]" onClick={e => e.stopPropagation()}>
                 <div className="bg-slate-100 aspect-square md:aspect-auto relative">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                 </div>
                 <div className="p-8 flex flex-col h-full overflow-y-auto">
                    <div className="flex justify-between items-start mb-4">
                       <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">{selectedProduct.category}</span>
                       <button onClick={() => setSelectedProduct(null)}><X className="text-slate-400 hover:text-red-500" /></button>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{selectedProduct.name}</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed flex-grow text-lg">
                        {selectedProduct.description || selectedProduct.detail}
                    </p>
                    <div className="mt-auto">
                        <button onClick={() => { setSelectedProduct(null); setIsContactOpen(true); }} className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                            <MessageCircle size={20} />
                            ขอใบเสนอราคา / สอบถามข้อมูล
                        </button>
                    </div>
                 </div>
              </div>
           </div>
        )}

        {/* 3. Contact Modal (Slide up) */}
        {isContactOpen && (
           <div className="fixed bottom-0 right-0 md:bottom-8 md:right-8 z-[80] w-full md:w-96 bg-white md:rounded-3xl shadow-2xl p-6 border-t md:border border-slate-200 animate-[float_0.3s_ease-out]">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-6 bg-amber-500 rounded-full"></span>
                    ติดต่อเราทันที
                 </h3>
                 <button onClick={() => setIsContactOpen(false)}><X className="text-slate-400 hover:text-slate-800" /></button>
              </div>
              <div className="space-y-3">
                 <a href="tel:0945438829" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all group cursor-pointer">
                    <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors"><Phone size={20} /></div>
                    <div>
                       <div className="font-bold text-slate-900">โทรศัพท์สำนักงาน</div>
                       <div className="text-xs text-slate-500">094-543-8829</div>
                    </div>
                 </a>
                 <a href="https://line.me/R/ti/p/@024lfgkw" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-green-50 border border-transparent hover:border-green-200 transition-all group cursor-pointer">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors"><MessageCircle size={20} /></div>
                    <div>
                       <div className="font-bold text-slate-900">LINE Official</div>
                       <div className="text-xs text-slate-500">@artexponential</div>
                    </div>
                 </a>
                 <a href="mailto:a.r.t.exponential.office@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all group cursor-pointer">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors"><Mail size={20} /></div>
                    <div>
                       <div className="font-bold text-slate-900">Email</div>
                       <div className="text-xs text-slate-500 truncate w-48">a.r.t.exponential.office@gmail.com</div>
                    </div>
                 </a>
              </div>
           </div>
        )}

      </div>
    </>
  );
}