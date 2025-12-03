import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'www.art-exponential.co.th', // หรือโดเมนจริง
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // ถ้ามีหน้าอื่นก็เพิ่มต่อตรงนี้
  ]
}