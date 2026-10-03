# 🎬 Konsep & Tujuan: Viral Video Clipper & Slicedrivee Link Cloaker

**Nama Web / Tool:** Viral Video Clipper & Slicedrivee Link Cloaker
**Slogan / Deskripsi Singkat:** Potong video viral, unggah otomatis ke hosting gratis, dan samarkan link CPA anti-spam menggunakan slicedrivee.site (.mp4 mask) dalam satu klik.

---

## 📌 Ringkasan Eksekutif
**Viral Video Clipper & Slicedrivee Link Cloaker** adalah alat utilitas web yang dibuat untuk konten kreator, pengelola akun viral, dan affiliate marketer. Alat ini mengotomatiskan seluruh alur kerja dari pemotongan video (15-30 detik), pengunggahan ke CDN gratis (Catbox/Videy), penyimpanan ke database Supabase, hingga pembuatan link pendek terselubung via **`https://slicedrivee.site/`** yang berkedok file `.mp4` asli agar **100% lolos dari blokir dan deteksi spam media sosial** (Facebook, WhatsApp, TikTok, Telegram, Twitter/X).

---

## 🎯 Masalah yang Diselesaikan
1. **Link CPA Sering Diblokir / Terdeteksi Spam:** Platform medsos sangat agresif memblokir link langsung ke penawaran CPA atau domain baru. Dengan mengubah link ke `https://cdn2.slicedrivee.site/[alias].mp4`, link terlihat seperti file video mentah yang aman dan dipercaya sistem.
2. **Ribet Memotong & Upload Manual:** Biasanya pengguna harus membuka aplikasi editor video di HP, render, lalu buka website hosting gratis, salin link, lalu buka website shortener satu per satu. Tool ini menggabungkan semua proses dalam **1 halaman dengan 1 tombol klik**.
3. **Biaya Server $0:** Pemotongan video berjalan di browser pengguna (Client-side HTML5/Canvas/MediaRecorder) tanpa membebani CPU server.

---

## 🏗️ Alur Kerja Lengkap Sistem
```text
[1. Upload / Pilih Video di HP/PC]
                 │
                 ▼
[2. Visual Clipper: Tentukan Waktu Mulai & Selesai (Detik 0 - 15)]
                 │
                 ▼
[3. Auto-Upload: Unggah Otomatis ke CDN Gratis (Catbox / Videy API)]
                 │
                 ▼
[4. Simpan ke Supabase: Catat URL Video, Judul, & Smartlink CPA ke `cpa_videos`]
                 │
                 ▼
[5. Auto-Cloak Slicedrivee: POST ke https://slicedrivee.site/]
                 │ (Mengarahkan ke https://wt-cpa-video-player.pages.dev/?id=...)
                 ▼
[6. Hasil Jadi: https://cdn2.slicedrivee.site/[alias].mp4]
(Link berkedok .mp4, aman disebar ke medsos tanpa takut banned/spam!)
```
