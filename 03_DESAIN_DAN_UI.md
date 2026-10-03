# 🎨 Desain & UI/UX: Viral Video Clipper & Slicedrivee Link Cloaker

## 🎭 Estetika & Konsep Visual
- **Tema:** *Modern Dark Studio* (Slate-950, Indigo-950, Aksen Neon Violet & Cyan).
- **Tipografi:** System Sans-Serif modern (Inter / SF Pro Display) dengan tata letak step-by-step (*Wizard UI*).
- **Responsif:** Nyaman digunakan dari layar HP (layar sentuh untuk menggeser slider pemotong) hingga monitor desktop lebar.

---

## 📱 Langkah-Langkah Antarmuka Pengguna (4-Step Wizard)

### Langkah 1: Pilih / Unggah Video
- Kotak Drag-and-drop file video.
- Tombol "Pilih File dari Galeri / Komputer".
- Indikator durasi total dan ukuran file.

### Langkah 2: Pemotong Durasi Visual (The Clipper)
- Layar pratinjau video interaktif.
- Dual Range Slider (Waktu Mulai: detik ke-X, Waktu Selesai: detik ke-Y).
- Tombol *"Putar Pratinjau Klip Terpilih"*.
- Badge durasi hasil potongan (misal: `Durasi Klip: 14 detik`).

### Langkah 3: Informasi Konten & Iklan CPA
- Form input **Judul Video Pancingan**.
- Form input **Kategori** (Viral, Lucu, Trending, Musik).
- Form input **Link Penawaran CPA / Smartlink** (Otomatis terisi jika ada default).
- Form input **Kustom Alias Slicedrivee** (Opsional, misal: `viral-heboh-2026`).

### Langkah 4: Tombol Proses & Hasil Jadi
- Tombol besar: **`[⚡ Potong, Upload & Samarkan Link]`**.
- Status progress bertahap:
  1. *✂️ Memotong video klip...*
  2. *☁️ Mengunggah video ke CDN publik...*
  3. *💾 Menyimpan ke database Supabase...*
  4. *🛡️ Membuat link anti-spam di slicedrivee.site...*
- **Hasil Akhir (Success Box):**
  - Kotak link terselubung: `https://cdn2.slicedrivee.site/[alias].mp4`
  - Tombol Salin Link (1-klik).
  - Tombol Tes Redirect.
  - Tombol Cepat Bagikan ke WhatsApp & Telegram.
