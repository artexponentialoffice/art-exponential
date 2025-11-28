// data/mockData.js

export const products = [
  // --- หมวด: ไฟฟ้า (สินค้าทั่วไป / วัสดุสิ้นเปลือง) ---
  {
    id: 1,
    name: "สายไฟ THW ยาซากิ (Yazaki) / Phelps Dodge",
    category: "ไฟฟ้า",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=1000", // รูปสายไฟ
    detail: "สายไฟทองแดงแกนเดี่ยว หุ้มฉนวน PVC มาตรฐาน มอก. 11-2553",
    description: "สายไฟคุณภาพสูงสำหรับเดินในท่อร้อยสาย ทนแรงดัน 450/750V เหมาะสำหรับงานระบบไฟฟ้าภายในอาคารและโรงงานอุตสาหกรรม มีทุกขนาดตั้งแต่ 1.5 - 400 sq.mm."
  },
  {
    id: 2,
    name: "ตู้คอนซูมเมอร์ยูนิต (Consumer Unit) Schneider",
    category: "ไฟฟ้า",
    image: "https://images.unsplash.com/photo-1563509172-f38eb45d587c?auto=format&fit=crop&q=80&w=1000", // รูปตู้ไฟ
    detail: "ตู้ควบคุมไฟฟ้าภายในบ้าน พร้อมเมนเบรกเกอร์กันดูด RCBO",
    description: "ปกป้องชีวิตและทรัพย์สินด้วยระบบตัดไฟอัตโนมัติเมื่อเกิดไฟรั่ว ไฟดูด หรือไฟลัดวงจร ดีไซน์สวยงาม ทนทาน ได้มาตรฐาน IEC 61439"
  },
  {
    id: 3,
    name: "หลอดไฟ LED T8 และโคมไฟ Downlight",
    category: "ไฟฟ้า",
    image: "https://images.unsplash.com/photo-1565814329-64c2deac1112?auto=format&fit=crop&q=80&w=1000", // รูปหลอดไฟ
    detail: "หลอดไฟ LED ประหยัดพลังงาน แสงขาว/แสงวอร์ม อายุการใช้งานยาวนาน",
    description: "ชุดรางนีออน LED และโคมไฟดาวน์ไลท์สำหรับฝ้าเพดาน ให้ความสว่างสูงแต่กินไฟน้อย ช่วยลดค่าไฟได้ถึง 50% เหมาะสำหรับออฟฟิศและที่พักอาศัย"
  },
  {
    id: 4,
    name: "สวิตช์และเต้ารับ Panasonic / Philips",
    category: "ไฟฟ้า",
    image: "https://plus.unsplash.com/premium_photo-1678736932598-f2b7b51f0f08?auto=format&fit=crop&q=80&w=1000", // รูปปลั๊กไฟ
    detail: "อุปกรณ์สวิตช์ไฟและปลั๊กพ่วง เกรดพรีเมียม ทนทาน ไม่ลามไฟ",
    description: "หน้ากากสวิตช์และเต้ารับรุ่นใหม่ ดีไซน์โมเดิร์น ผลิตจากวัสดุ Polycarbonate คุณภาพสูง ทนความร้อนและไม่ลามไฟ รองรับการใช้งานระยะยาว"
  },
  {
    id: 5,
    name: "ท่อร้อยสายไฟ UPVC และ EMT/IMC",
    category: "ไฟฟ้า",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1000", // รูปท่อร้อยสาย
    detail: "ท่อร้อยสายไฟสีขาว/เหลือง และท่อเหล็กสำหรับงานอุตสาหกรรม",
    description: "จำหน่ายท่อร้อยสายไฟทุกเกรด ทั้งท่อ PVC สำหรับงานภายใน และท่อเหล็ก EMT/IMC สำหรับงานภายนอกหรือโรงงาน พร้อมอุปกรณ์ข้อต่อครบชุด"
  },

  // --- หมวด: ระบบไฟฟ้าและงานติดตั้ง (งาน Project / ติดตั้ง) ---
  {
    id: 6,
    name: "ตู้สวิทช์บอร์ด MDB (Main Distribution Board)",
    category: "ระบบไฟฟ้าและงานติดตั้ง",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000", // รูปตู้คอนโทรลใหญ่
    detail: "ออกแบบและประกอบตู้ MDB สำหรับโรงงานและอาคารสูง",
    description: "บริการออกแบบ ประกอบ และติดตั้งตู้เมนไฟฟ้า MDB ตามมาตรฐานวิศวกรรม เลือกใช้อุปกรณ์ภายในเกรด A (Mitsubishi, Schneider, ABB) พร้อมทดสอบระบบก่อนส่งมอบ"
  },
  {
    id: 7,
    name: "โคมไฟโรงงาน High Bay LED",
    category: "ระบบไฟฟ้าและงานติดตั้ง",
    image: "https://images.unsplash.com/photo-1563283296-1b3336214371?auto=format&fit=crop&q=80&w=1000", // รูปโกดัง/Highbay
    detail: "โคมไฟแขวนเพดานสูง สำหรับโกดังและโรงงานอุตสาหกรรม",
    description: "บริการจำหน่ายและติดตั้งโคมไฟ High Bay LED ให้ความสว่างทั่วถึง ทนต่อฝุ่นและละอองน้ำ (IP65) เหมาะสำหรับพื้นที่ที่มีเพดานสูง ช่วยลดต้นทุนค่าไฟฟ้าในโรงงาน"
  },
  {
    id: 8,
    name: "งานติดตั้งรางวายเวย์และเคเบิลแลดเดอร์",
    category: "ระบบไฟฟ้าและงานติดตั้ง",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000", // รูปรางสายไฟ
    detail: "ระบบรองรับสายไฟ Wireway, Cable Tray, Cable Ladder",
    description: "รับเหมาติดตั้งระบบรางเดินสายไฟ ทั้งแบบพ่นสีและชุบกัลวาไนซ์ (Hot Dip Galvanized) แข็งแรง ทนทานต่อการกัดกร่อน สำหรับจัดระเบียบสายไฟจำนวนมาก"
  },
  {
    id: 9,
    name: "ระบบล่อฟ้าและกราวด์ (Lightning Protection)",
    category: "ระบบไฟฟ้าและงานติดตั้ง",
    image: "https://images.unsplash.com/photo-1605218427306-635ba243971c?auto=format&fit=crop&q=80&w=1000", // รูปสายฟ้า/เสา
    detail: "ติดตั้งหัวล่อฟ้า สายนำลงดิน และระบบกราวด์ Loop",
    description: "บริการติดตั้งระบบป้องกันฟ้าผ่า (Lightning Protection System) และวัดค่าความต้านทานดินให้ได้ตามมาตรฐาน เพื่อความปลอดภัยสูงสุดของโครงสร้างอาคารและเครื่องจักร"
  }
];

export const news = [
  {
    id: 1,
    title: "A.R.T Exponential ได้รับรองมาตรฐาน ISO 9001:2015",
    date: "15 OCT",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000", // รูปประชุม/ทีมงาน
    excerpt: "ตอกย้ำความเป็นผู้นำด้านระบบไฟฟ้า ด้วยการผ่านการรับรองมาตรฐานบริหารงานคุณภาพระดับสากล",
    content: "บริษัท เอ.อาร์.ที. เอกซ์โพเนนเชียล จำกัด มีความยินดีที่จะประกาศว่า..."
  },
  {
    id: 2,
    title: "ส่งมอบงานติดตั้งระบบไฟฟ้า โรงงานอุตสาหกรรมนิคมบางปู",
    date: "02 NOV",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000", // รูปช่างทำงาน
    excerpt: "ทีมวิศวกรเข้าตรวจสอบและส่งมอบงานติดตั้งตู้ MDB และระบบแสงสว่าง High Bay LED เฟส 2",
    content: "ความสำเร็จอีกขั้นกับโครงการติดตั้งระบบไฟฟ้า..."
  },
  {
    id: 3,
    title: "โปรโมชั่นต้อนรับปีใหม่: เปลี่ยนหลอดไฟ LED ราคาสุดพิเศษ",
    date: "10 DEC",
    image: "https://images.unsplash.com/photo-1565063077759-450c33d7b42d?auto=format&fit=crop&q=80&w=1000", // รูปหลอดไฟสวยๆ
    excerpt: "ลดค่าไฟรับปีใหม่ กับโปรโมชั่นหลอดไฟและโคมไฟ LED ลดสูงสุด 30% สำหรับลูกค้าองค์กร",
    content: "เพื่อเป็นการขอบคุณลูกค้าทุกท่าน..."
  },
  {
    id: 4,
    title: "อบรมความปลอดภัยในการทำงานเกี่ยวกับไฟฟ้า (Safety Talk)",
    date: "20 DEC",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000", // รูปหมวก Safety
    excerpt: "บริษัทจัดอบรมประจำปีเพื่อทบทวนมาตรการความปลอดภัยในการปฏิบัติงานให้กับทีมช่างทุกคน",
    content: "ความปลอดภัยคือหัวใจสำคัญของการทำงาน..."
  }
];