# 🎓 SITTA - Sistem Pemesanan Bahan Ajar UT

## Vue.js Application - Complete Project

---

## 📌 Quick Start

1. **Open** `index.html` di browser
2. **Navigate** ke halaman Stok atau Tracking
3. **Explore** fitur-fitur aplikasi

---

## 🎯 Project Objectives (5 Milestone Indikator Capaian)

### ✅ Milestone 1: Perorganisasian Kode Vue.js

**Tujuan:** Struktur proyek Vue.js yang terstandar dan terorganisir

**Deliverable:**

- Folder structure (css/, js/)
- 3 halaman HTML (index, stok, tracking)
- File CSS dengan responsive design
- File JS dengan Vue instances
- File dummy data
- Dokumentasi lengkap

**Status:** ✅ COMPLETE

---

### ✅ Milestone 2: Data Display (Mustaches & v-text)

**Tujuan:** Menampilkan data menggunakan Vue.js templating

**Deliverable:**

- Mustaches `{{ }}` untuk menampilkan data
- v-text directive untuk text content
- v-html directive untuk HTML content
- v-for untuk list rendering
- Currency formatting

**Data Ditampilkan:**

- **Stok:** 11 kolom (Kode, Judul, Kategori, UT-Daerah, Lokasi Rak, Qty, Safety, Status, Harga, Catatan, Aksi)
- **Tracking:** Nomor DO, NIM, Nama, Ekspedisi, Paket, Tanggal, Total, Timeline

**Status:** ✅ COMPLETE

---

### ✅ Milestone 3: Conditional Logic (v-if, v-else, v-show)

**Tujuan:** Menerapkan logika pengandaian untuk output dinamis

**Deliverable:**

- Status stok visual dengan 3 kondisi:
  - 🟢 Aman (qty >= safety) - Hijau
  - 🟠 Menipis (qty < safety && qty > 0) - Orange
  - 🔴 Kosong (qty = 0) - Merah
- Filter dependent options (kategori muncul setelah pilih UT-Daerah)
- Tombol reset hanya tampil jika ada filter aktif
- Pesan "tidak ada data" saat filter kosong
- Form show/hide dengan smooth transition
- Detail paket tampil saat dipilih
- Timeline tampil saat ada data

**Status:** ✅ COMPLETE

---

### ✅ Milestone 4: Data Binding & Properties

**Tujuan:** Two-way binding, one-way binding, computed properties, methods

**Two-Way Binding (v-model):**

- Filter inputs (select, checkbox)
- Form inputs (text, number, select, textarea, date)
- Automatic type conversion (.number modifier)

**One-Way Binding (v-bind):**

- Attribute binding (:value, :disabled, :key)
- Class binding via conditional

**Computed Properties:**

- `filteredKategori` - Get kategori berdasarkan UT-Daerah
- `processedStok` - Filter & sort data stok
- `nextDoNumberFormatted` - Auto-generate nomor DO
- `selectedPaketDetails` - Get detail paket terpilih
- `processedTrackingOrders` - Convert object ke array

**Methods:**

- Filter management (resetFilters)
- Form management (openAddForm, addNewItem, openEditForm, saveEditItem, closeEditForm)
- Utility functions (formatCurrency, getTodayDate, initDoTracking)
- DO management (addNewDo)

**Status:** ✅ COMPLETE

---

### ✅ Milestone 5: Watcher Functions

**Tujuan:** Menerapkan watcher untuk reactive data changes

**Deliverable:**

- Watch `filters.selectedUpbjj` → Reset kategori saat UT-Daerah berubah
- Watch `newDoForm.ekspedisi` → Reset paket saat ekspedisi berubah
- Reactive data flow yang konsisten
- Side effects management
- Automatic state updates

**Status:** ✅ COMPLETE

---

## 📁 Project Structure

```
sitta-vue/
├── index.html                 ← Halaman utama
├── stok.html                  ← Halaman Stok Bahan Ajar
├── tracking.html              ← Halaman Tracking DO
├── css/
│   └── style.css              ← Stylesheet (responsive)
├── js/
│   ├── dataBahanAjar.js       ← Dummy data
│   ├── stok-app.js            ← Vue instance (Stok)
│   └── tracking-app.js        ← Vue instance (Tracking)
├── MILESTONE_1.md             ← Dokumentasi M1
├── MILESTONE_5.md             ← Dokumentasi M5
├── PROJECT_SUMMARY.md         ← Ringkasan project
├── FINAL_CHECKLIST.md         ← Checklist final
├── README_FINAL.md            ← File ini
└── plan.md                    ← Rencana awal
```

---

## 🎨 Features Overview

### Halaman Stok (stok.html)

**Fitur Utama:**

1. **Tabel Stok** - Menampilkan semua data stok dengan 11 kolom
2. **Filter UT-Daerah** - Dropdown untuk memilih UT-Daerah
3. **Filter Kategori** - Dropdown dependent (muncul setelah pilih UT-Daerah)
4. **Filter Stok Rendah** - Checkbox untuk tampilkan qty < safety atau qty = 0
5. **Sort Options** - Sort berdasarkan Judul, Qty, Harga (Asc/Desc)
6. **Status Visual** - 3 warna berbeda untuk status stok
7. **Reset Filter** - Tombol reset (hanya tampil jika ada filter aktif)
8. **Add Form** - Form untuk tambah data bahan ajar baru
9. **Edit Modal** - Modal untuk edit data stok
10. **Validasi** - Simple validation untuk required fields

**Data Kolom:**

- Kode Mata Kuliah
- Judul Mata Kuliah
- Kategori
- UT-Daerah
- Lokasi Rak
- Jumlah Stok
- Safety Stock
- Status (Aman/Menipis/Kosong)
- Harga
- Catatan (HTML)
- Aksi (Edit button)

### Halaman Tracking (tracking.html)

**Fitur Utama:**

1. **Tracking Cards** - Menampilkan DO dalam card format
2. **Timeline Perjalanan** - Menampilkan perjalanan paket dengan waktu
3. **Add Form** - Form untuk buat delivery order baru
4. **Auto-Generate Nomor** - Nomor DO otomatis (DO2025-001, dst)
5. **Detail Paket** - Detail paket tampil saat dipilih
6. **Total Harga** - Auto-populate dari paket
7. **Form Validation** - Tombol submit disabled jika belum lengkap
8. **Responsive Cards** - Card layout yang responsive

**Form Fields:**

- Nomor DO (auto-generate)
- NIM (manual input)
- Nama (manual input)
- Ekspedisi (select)
- Paket Bahan Ajar (select)
- Tanggal Kirim (date input)
- Total Harga (auto-populate)

---

## 🔧 Technology Stack

- **Frontend Framework:** Vue.js 2.7.14 (CDN)
- **Markup:** HTML5
- **Styling:** CSS3 (Responsive Design)
- **JavaScript:** ES5 (Vanilla)
- **APIs:** Intl API (Currency Formatting)
- **No Build Tool:** Vanilla setup (no webpack/bundler)

---

## 📊 Data Structure

### Dummy Data (dataBahanAjar.js):

```javascript
dummyData = {
  upbjjList: ["Jakarta", "Surabaya", "Makassar", "Padang", "Denpasar"],
  kategoriList: ["MK Wajib", "MK Pilihan", "Praktikum", "Problem-Based"],
  pengirimanList: [
    { kode: "REG", nama: "Reguler (3-5 hari)" },
    { kode: "EXP", nama: "Ekspres (1-2 hari)" }
  ],
  paket: [
    { kode: "PAKET-UT-001", nama: "PAKET IPS Dasar", isi: [...], harga: 120000 },
    { kode: "PAKET-UT-002", nama: "PAKET IPA Dasar", isi: [...], harga: 140000 }
  ],
  stok: [ /* 4 items */ ],
  tracking: { /* 1 DO */ }
}
```

---

## 🎓 Vue.js Concepts Implemented

### Core Concepts:

✅ Vue Instance
✅ Reactive Data Properties
✅ Computed Properties (dengan caching)
✅ Methods (event handlers & utility functions)
✅ Watchers (observe data changes)
✅ Lifecycle Hooks (mounted)

### Template Syntax:

✅ Mustaches `{{ }}`
✅ Directives (v-if, v-else, v-else-if, v-show, v-for, v-bind, v-model, v-text, v-html)
✅ Event Binding (@click, @submit, @change)
✅ Attribute Binding (:value, :disabled, :key)
✅ Class Binding (via conditional)

### Data Binding:

✅ One-way binding (v-bind)
✅ Two-way binding (v-model)
✅ Form input binding (text, number, select, checkbox, textarea, date)
✅ Modifiers (.number)

### Advanced Features:

✅ Dependent options
✅ Auto-generate nomor
✅ Nested v-for
✅ Conditional rendering dengan multiple branches
✅ Form validation
✅ Currency formatting

---

## 📱 Responsive Design

**Breakpoints:**

- Desktop: > 768px
- Tablet: 768px
- Mobile: 480px

**Features:**

- Flexible grid layout
- Responsive table (stacking on mobile)
- Mobile-friendly forms
- Touch-friendly buttons
- Readable font sizes

---

## 🎯 How to Use

### Halaman Stok:

1. **Filter Data:**
   - Pilih UT-Daerah dari dropdown
   - Kategori dropdown akan muncul dengan opsi yang sesuai
   - Centang "Tampilkan hanya stok rendah" untuk filter stok rendah
   - Pilih sort option dan direction

2. **Tambah Data:**
   - Klik tombol "+ Tambah Bahan Ajar Baru"
   - Isi form dengan data baru
   - Klik "Simpan"

3. **Edit Data:**
   - Klik tombol "Edit" pada baris yang ingin diubah
   - Ubah qty, safety, atau catatan
   - Klik "Simpan"

4. **Reset Filter:**
   - Klik tombol "🔄 Reset Filter" untuk reset semua filter

### Halaman Tracking:

1. **Lihat Tracking:**
   - Lihat list delivery order dalam card format
   - Klik card untuk melihat detail
   - Scroll untuk melihat timeline perjalanan

2. **Buat DO Baru:**
   - Klik tombol "+ Buat Delivery Order Baru"
   - Isi NIM, Nama, Ekspedisi, Paket, Tanggal
   - Detail paket dan total harga akan tampil otomatis
   - Klik "Buat DO"

---

## 📝 Notes

- Semua data disimpan di memory (tidak persistent)
- Refresh page akan reset semua data ke dummy data awal
- Untuk production, perlu connect ke backend API
- Validasi form masih sederhana, bisa ditingkatkan

---

## 🚀 Future Improvements

1. Backend API integration
2. User authentication
3. Advanced form validation
4. Delete functionality
5. Search feature
6. Pagination
7. Export to CSV/PDF
8. Local storage persistence
9. Animations/transitions
10. Dark mode
11. Unit tests
12. Error handling
13. Loading states
14. Toast notifications
15. Vue 3 migration

---

## 📚 Documentation Files

- **MILESTONE_1.md** - Perorganisasian Kode Vue.js
- **MILESTONE_2.md** - Data Display (v-text, mustaches)
- **MILESTONE_3.md** - Conditional Logic (v-if, v-else, v-show)
- **MILESTONE_4.md** - Data Binding & Properties
- **MILESTONE_5.md** - Watcher Functions
- **PROJECT_SUMMARY.md** - Ringkasan project lengkap
- **FINAL_CHECKLIST.md** - Checklist verifikasi
- **README_FINAL.md** - File ini

---

## ✅ Completion Status

| Milestone                                   | Status      |
| ------------------------------------------- | ----------- |
| 1. Perorganisasian Kode Vue.js              | ✅ COMPLETE |
| 2. Data Display (v-text, mustaches)         | ✅ COMPLETE |
| 3. Conditional Logic (v-if, v-else, v-show) | ✅ COMPLETE |
| 4. Data Binding & Properties                | ✅ COMPLETE |
| 5. Watcher Functions                        | ✅ COMPLETE |

**Overall Status:** ✅ **PROJECT COMPLETE**

---

## 🏆 Project Summary

**Aplikasi SITTA (Sistem Pemesanan Bahan Ajar UT) telah selesai dikembangkan dengan:**

✅ Semua 5 Milestone Indikator Capaian tercapai
✅ Semua fitur terimplementasi dengan baik
✅ Dokumentasi lengkap dan terstruktur
✅ Code quality yang baik
✅ Responsive design untuk semua device
✅ Vue.js best practices diterapkan

**Siap untuk digunakan dan dikembangkan lebih lanjut!**

---

**Last Updated:** 2026
**Version:** 1.0
**Status:** ✅ READY FOR SUBMISSION
