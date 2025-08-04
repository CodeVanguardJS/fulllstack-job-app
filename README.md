# fulllstack-job-app

Ada banget, Pi! 👨‍💻✨ Project **Job Board** tuh keren dan profesional banget buat portofolio. Bisa kamu targetin ke niche tertentu juga (misalnya: job IT, job freelance, job khusus muslim, dsb). Nah, aku bantu breakdown saran dan struktur biar kamu dan tim bisa mulai dengan jelas dan terarah.

---

## 🚀 Nama Proyek: **NextHire** (misal)

Platform lowongan kerja yang memungkinkan user mencari dan melamar pekerjaan, serta admin/rekruter mengelola postingan job.

---

## 🔧 Fitur Inti (MVP)

### 👤 1. **User Authentication**

* Pakai `next-auth`
* Role: **Job Seeker** dan **Recruiter**
* Google login (opsional)

---

### 📄 2. **Halaman Lowongan**

* Daftar semua job
* Filter by: kategori, lokasi, jenis kerja (remote/onsite), gaji
* Pagination atau infinite scroll (opsional)

---

### 📝 3. **Detail Job**

* Info lengkap: judul, perusahaan, lokasi, gaji, deskripsi, kualifikasi
* Tombol **Apply** → simpan ke database (atau kirim CV via email)

---

### 🔎 4. **Search & Filter**

* Keyword search (judul atau perusahaan)
* Filter dropdown: lokasi, kategori, gaji min, dsb.

---

### 🧑‍💼 5. **Dashboard Recruiter**

* CRUD job post
* Lihat pelamar untuk tiap job
* Edit / hapus postingan

---

### 🧑‍💻 6. **Dashboard Job Seeker**

* Lihat job yang pernah dilamar
* Simpan (bookmark) job

---

### ✅ Bonus Fitur (Bisa menyusul)

* Upload CV
* Notifikasi email jika apply berhasil
* Bookmark lowongan
* Mode gelap
* Validasi lowongan expired
* Admin global (untuk moderasi job)

---

## 🧠 Tech Stack Saran

| Kebutuhan    | Tools                                          |
| ------------ | ---------------------------------------------- |
| Frontend     | Next.js (App Router) + Tailwind CSS            |
| Auth         | next-auth (Google login + credential)          |
| DB ORM       | Prisma                                         |
| Database     | PostgreSQL (bisa pakai Supabase / PlanetScale) |
| Hosting      | Vercel (untuk frontend & API)                  |
| Image upload | Cloudinary / UploadThing                       |
| Email        | Resend / Nodemailer (untuk kirim notif)        |

---

## 🗂️ Struktur Folder Awal (Next.js App Router)

```
app/
│
├── page.tsx                  # Landing page
├── jobs/                     # Job listing & detail
│   ├── page.tsx              # All jobs
│   └── [id]/page.tsx         # Detail per job
├── dashboard/
│   ├── recruiter/            # CRUD Job
│   └── seeker/               # Bookmark, applied list
├── auth/                     # Login / register
├── api/
│   ├── jobs/                 # API routes for job
│   └── users/                # Apply, bookmark, dll
```

---

## 📅 Urutan Pengembangan yang Disarankan

1. ✅ Setup Next.js + Tailwind
2. ✅ Setup Prisma + DB + seeding jobs awal
3. ✅ Implement login dan auth
4. 🔄 Buat job listing dan detail page
5. ✍️ Buat form tambah job (rekruter)
6. 🔎 Tambahkan search & filter
7. 💾 Implement apply + bookmark
8. 📂 Dashboard user dan recruiter
9. 🚀 Deploy ke Vercel

---

## 🌟 Tambahan Ide Unik Biar Makin Menarik

* **Skor Kesesuaian Otomatis**: tampilkan "kecocokan" user dengan job
* **Job Based on Skill Tags** (array skill matching)
* **Lowongan Muslim Friendly** (fitur filter: halal workplace, jam kerja ramah ibadah)
* **Kirim CV via WhatsApp/Email langsung**

---

Kalau kamu mau aku bantu:

* Desain schema `Prisma`-nya
* Struktur API routes
* Komponen UI
* Roadmap mingguan kerja tim

Tinggal bilang aja ya.
Atau kamu mau project ini difokuskan ke niche tertentu? Misalnya:
**“job untuk fresh graduate”, “job remote”, atau “job muslim friendly”?**

Bagus banget pertanyaannya, Pi 🙌
Biar kamu bisa rencanakan UI/UX dan routing Next.js-nya, ini aku hitung **perkiraan total page** dalam project **Job Board (NextHire)**, lengkap beserta jenisnya.

---

## ✅ **Total: ± 12–16 Halaman Utama (Page)**

### 🔐 Auth Pages (2–3 halaman)

1. `/login` – halaman login
2. `/register` – halaman registrasi
3. (opsional) `/forgot-password` – jika ingin tambah reset password

---

### 🏠 Landing & Job Browsing (3–4 halaman)

4. `/` – landing page
5. `/jobs` – semua lowongan kerja
6. `/jobs/[id]` – detail lowongan
7. (opsional) `/companies/[id]` – profil perusahaan (kalau mau unik)

---

### 👤 Job Seeker Dashboard (3–4 halaman)

8. `/dashboard/seeker` – dashboard utama pencari kerja
9. `/dashboard/seeker/bookmarked` – daftar bookmark
10. `/dashboard/seeker/applied` – daftar yang pernah dilamar
11. (opsional) `/dashboard/seeker/profile` – edit profil, upload CV

---

### 🧑‍💼 Recruiter Dashboard (3–4 halaman)

12. `/dashboard/recruiter` – daftar job yang diposting
13. `/dashboard/recruiter/create` – form tambah job
14. `/dashboard/recruiter/edit/[id]` – form edit job
15. (opsional) `/dashboard/recruiter/applicants/[jobId]` – lihat pelamar job tertentu

---

### ⚙️ Extra (Opsional)

16. `/about` – info tentang platform
17. `/contact` – form kontak
18. `/terms` – syarat & ketentuan

---

### ✳️ Recap

| Kategori            | Jumlah Page |
| ------------------- | ----------- |
| Auth                | 2–3         |
| Job List & Detail   | 3–4         |
| Dashboard Seeker    | 3–4         |
| Dashboard Recruiter | 3–4         |
| Extra (optional)    | 2–3         |
| **Total**           | **±12–16**  |

---

UI Reference: 
- https://id.jobstreet.com/
- https://glints.com/id
- glassdoor (optional)
