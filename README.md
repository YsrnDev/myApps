# Aplikasi Portofolio GitHub

Proyek ini adalah halaman web sederhana yang menampilkan daftar repositori publik dari akun GitHub Anda. Website ini dibangun menggunakan HTML, CSS, dan JavaScript, dengan proses pembaruan data yang diotomatisasi menggunakan GitHub Actions.

## Fitur Utama

-   Menampilkan daftar repositori publik.
-   Tampilan dapat diubah antara mode **list** dan **grid**.
-   Terdapat **mode terang** dan **mode gelap**, dengan preferensi yang disimpan di browser.
-   Data repositori diambil dan diperbarui secara otomatis menggunakan **GitHub Actions**, sehingga tidak terpengaruh oleh batasan API.
-   Repositori yang di-fork dan halaman utama tidak akan ditampilkan.

## Cara Menggunakan

Jika Anda ingin menggunakan proyek ini untuk portofolio pribadi Anda, ikuti langkah-langkah di bawah ini.

### 1. Buat Repositori Baru

Buatlah repositori baru di akun GitHub Anda dan beri nama `nama-anda.github.io`. Contoh: `ysrndev.github.io`.

### 2. Salin File Proyek

Salin semua file dari proyek ini ke dalam repositori baru yang telah Anda buat. File-file tersebut adalah:
-   `index.html`
-   `style.css`
-   `script.js`
-   `.github/workflows/update-repos.yml`
-   `update.js`

### 3. Konfigurasi

#### A. Perbarui Skrip `update.js`
Buka file `update.js` dan ganti `ysrndev` dengan username GitHub Anda.
```javascript
const username = 'ysrndev'; // Ganti dengan username GitHub Anda
````

#### B. Atur Izin (Permissions) untuk GitHub Actions
Agar GitHub Actions dapat mengubah file di repositori Anda, Anda harus memberikan izin tulis (write permission).

-  Buka repositori Anda.
-  Pergi ke Settings -> Actions -> General.
-  Di bagian Workflow permissions, pilih Read and write permissions.
-  Klik Save.

### 4. Jalankan GitHub Actions
Setelah semua file berada di repositori Anda dan konfigurasi telah diperbarui, pergi ke tab Actions.

-  Klik pada workflow "Update Repos JSON" di menu samping kiri.
-  Klik tombol "Run workflow" untuk menjalankan skrip secara manual.

Ini akan membuat file repos.json yang berisi daftar repositori Anda. Setelah proses ini selesai, halaman web Anda akan tersedia di URL https://nama-anda.github.io/.
