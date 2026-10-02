Berikut adalah dokumen spesifikasi desain sistem (**`desain.md`**) yang diekstraksi secara presisi dari layout, hierarki visual, tipografi, palet warna, dan elemen konten pada dokumen **PORTOFOLIO BELA 2026.pdf**:

---

# `desain.md`

## 1. Visual & Theme Overview

* **Gaya Visual**: Modern, playful yet clean, editorial creative portfolio.
* **Mood**: Ramah, dinamis, terstruktur, dan bernuansa retro-modern (menggunakan ornamen bintang/sparkle, rounded badge, dan grid cards).
* **Target Display**: Web responsif (Desktop-first dengan layout adaptable ke tablet/mobile).

---

## 2. Color Palette (Design Tokens)

| Token Name | Hex Code | Deskripsi Penggunaan |
| --- | --- | --- |
| `--color-bg-primary` | `#FBFBF9` | Background utama halaman (off-white / cream hangat) |
| `--color-bg-card` | `#FFFFFF` | Background kartu proyek / container |
| `--color-primary` | `#111827` | Teks judul utama, border solid, dark contrast |
| `--color-accent-orange` | `#FF6B35` / `#FF7A45` | Badge kategori, aksen bintang, call-to-action primer |
| `--color-accent-yellow` | `#FFD166` | Aksen highlight, chip sub-skill |
| `--color-text-body` | `#4B5563` | Deskripsi proyek, teks paragraf |
| `--color-text-muted` | `#9CA3AF` | Label minor, metadata tanggal/tahun |
| `--color-border` | `#E5E7EB` / `#111827` | Border outline kartu dan elemen divider |

---

## 3. Typography System

* **Primary Font (Headings & Display)**:
* Family: `Plus Jakarta Sans`, `Cabinet Grotesk`, atau `Poppins` (Bold / ExtraBold / Black).
* Karakter: Geometris, solid, modern.


* **Secondary Font (Body Text & Metadata)**:
* Family: `Inter` atau `Plus Jakarta Sans` (Regular / Medium, 400 & 500).


* **Skala Tipografi**:
* **Hero Title (H1)**: `clamp(2.5rem, 5vw, 4.5rem)` – Font-weight: `800` (Title Case / Upper Highlight).
* **Section Title (H2)**: `2rem` – `2.5rem` – Font-weight: `700`.
* **Card Title (H3)**: `1.25rem` – `1.5rem` – Font-weight: `700`.
* **Body / Description**: `0.95rem` – `1.05rem` – Line-height: `1.6`.
* **Tags / Badges**: `0.75rem` – `0.85rem` – Font-weight: `600` (Caps/Uppercase opsional).



---

## 4. UI Components & Layout Structure

### A. Navigation Bar (Header)

* **Tipe**: Sticky / Floating Navbar dengan latar semi-transparan (`backdrop-blur-md`).
* **Elemen**:
* **Kiri**: Logo / Nama personal (`BELA.` / Signature badge).
* **Tengah**: Links menu (`About`, `Works`, `Services`, `Contact`).
* **Kanan**: Tombol CTA kontras ("Let's Talk" / "Hubungi Saya").



---

### B. Hero Section (Header Area)

* **Komposisi Layout**: Split 2 Kolom (atau Centralized dengan elemen floating).
* **Kolom Teks**:
* Floating chip/status: *"👋 Available for Freelance / Full-time"* (Border tipis + dot indikator hijau/oranye).
* Headline utama: Penegasan identitas peran kreatif (Desainer Grafis / UI Designer / Creative Specialist).
* Sub-deskripsi: Ringkasan singkat value proposition.
* Tombol aksi ganda: Primary button (oranye/hitam) + Secondary button (outline/link ke resume).


* **Kolom Visual**:
* Foto profil / Avatar Bela dengan bingkai rounded (border-radius `24px` atau shape organik).
* Ornamen pendukung: Aksen 4-point star (sparkles) dan stiker tag melayang (misal: "Creative Mind ✨", "2026 Edition").





---

### C. About & Core Skills Section

* **Grid Layout**: 2-3 Kolom kartu bento (Bento Grid style).
* **Komponen**:
* Kartu perkenalan diri singkat dan latar belakang profesional.
* Kartu daftar keahlian (Tools: Figma, Adobe Suite, dsb.).
* Kartu statistik ringkas (Tahun pengalaman, jumlah proyek selesai, dsb.).



---

### D. Featured Projects (Portfolio Grid)

* **Layout**: Grid 2 Kolom (Card Layout dengan proporsi seimbang).
* **Spesifikasi Kartu Proyek**:
* **Container**: Background putih, border tipis (`1px solid #E5E7EB` atau `2px solid #111827` untuk gaya neo-brutalist halus), border-radius `20px`, drop shadow lembut.
* **Media Preview**: Rasio gambar 16:10 atau 4:3 dengan efek hover zoom halus (`scale(1.02)`).
* **Tags/Kategori**: Pill chips di atas judul (misal: `Branding`, `UI/UX`, `Social Media`).
* **Judul & Deskripsi**: Judul tebal diikuti 1-2 kalimat ringkasan solusi desain.
* **Action**: Panah diagonal link (`↗`) di sudut kanan kartu.



---

### E. Services / What I Do (Jika ada pada PDF)

* Daftar layanan berupa kartu ringkas atau list accordion yang memaparkan:
* Branding & Visual Identity.
* UI/UX Design & Prototyping.
* Digital Marketing & Social Media Design.



---

### F. Footer & Contact Section

* **Komposisi**:
* Headline ajakan kolaborasi yang besar (*"Ready to create something amazing together?"*).
* Informasi kontak utama: Email, WhatsApp, tautan LinkedIn, Instagram, dan Behance/Dribbble.
* Watermark hak cipta: `© 2026 Bela. All rights reserved.`



---

## 5. Micro-Interactions & Styling Rules

* **Border Radius**:
* Kartu: `16px` – `24px`.
* Tombol / Badges: `9999px` (Full rounded / Pill shape).


* **Hover States**:
* Tombol: Sedikit translate ke atas (`translateY(-2px)`) dengan transisi `cubic-bezier(0.4, 0, 0.2, 1)`.
* Kartu portofolio: Bayangan bertambah dalam (`box-shadow: 0 12px 30px rgba(0,0,0,0.08)`).


* **Dekorasi Khas PDF**:
* Ikon bintang retro (Sparkle 4-titik).
* Outline divider melengkung halus / garis pemisah minimalis.



---

*File spesifikasi di atas dapat langsung disimpan sebagai **`desain.md`** di repository web Anda atau dijadikan panduan prompt pembuatan kode (HTML/Tailwind CSS, React, Next.js, atau Framer).*