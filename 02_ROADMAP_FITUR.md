# 🗺️ Roadmap Fitur: Viral Video Clipper & Slicedrivee Link Cloaker

## 🚀 Fase 1: MVP (Rilis Utama - Selesai Hari Ini)
- [x] **File Selector & Video Loader:** Mendukung file MP4, WEBM, MOV langsung dari galeri HP atau PC.
- [x] **Visual Time Slider (Video Clipper):** Penanda waktu mulai (*Start*) dan selesai (*End*) dengan live preview pemotongan.
- [x] **Client-Side Video Trimmer:** Menggunakan HTML5 Canvas & MediaRecorder untuk mengekspor klip pendek secara instan di peramban pengguna tanpa biaya server.
- [x] **Auto-Upload CDN Gratis:** Terintegrasi langsung dengan endpoint pengunggahan video publik (Catbox.moe / Videy / Cloudinary).
- [x] **Sinkronisasi Supabase:** Otomatis memasukkan metadata video ke tabel `cpa_videos` di Supabase.
- [x] **Slicedrivee Cloaking Integration:** Menghasilkan link terselubung `https://cdn2.slicedrivee.site/[alias].mp4` yang me-redirect ke player Cloudflare Pages saat diklik.
- [x] **1-Click Share:** Tombol cepat salin link, bagikan ke WhatsApp, dan bagikan ke Telegram.

---

## ⚡ Fase 2: Peningkatan & Kenyamanan
- [ ] **Preset Durasi Instan:** Tombol cepat "15 Detik Pertama", "30 Detik Pertama", atau "Klip Terbaik".
- [ ] **Auto Thumbnail Extractor:** Mengambil screenshot otomatis dari frame detik ke-2 sebagai gambar pratinjau thumbnail.
- [ ] **Multi-Subdomain Selector:** Pilihan subdomain Slicedrivee (`cdn`, `cdn2`, `media`).

---

## 🌐 Fase 3: Otomasi Skala Penuh
- [ ] **Batch Processing:** Potong dan samarkan hingga 5 video sekaligus.
- [ ] **Direct TikTok/IG Scraper:** Pengambilan video langsung dari URL media sosial via backend proxy.
