# 📌 Modul 3: Dasar JavaScript untuk React

## 🎯 Tujuan Pertemuan

Pada pertemuan ketiga ini, peserta akan:

- Menjelaskan Node.js dan cara instalasinya, sehingga JavaScript bisa berjalan di luar browser.
- Memahami dasar-dasar JavaScript (tipe data, pengkondisian, perulangan, dan array function) yang dipakai di React.
- Mengenal konsep DOM dan bagaimana JavaScript memanipulasi elemen HTML.
- Membuat event handler untuk tombol **Ringkas**, **Reset**, dan **Delete Riwayat**.
- Menggunakan local storage untuk menyimpan riwayat ringkasan sementara.
- Mengintegrasikan kode JavaScript terpisah dengan HTML agar aplikasi interaktif.

---

## Node.js: JavaScript di Luar Browser

### Penjelasan Singkat

Node.js adalah runtime environment yang memungkinkan JavaScript dijalankan di luar browser, seperti di laptop atau server. Node.js menggunakan mesin V8 dari Google Chrome dan menyediakan API asinkron (non-blocking) yang sangat efisien untuk aplikasi berskala besar. Dengan npm (Node Package Manager), kita dapat mengelola paket-paket yang membantu pengembangan fullstack.

### Cara Instalasi Node.js

#### Di Windows

1. **Unduh Installer:**

   - Kunjungi [situs resmi Node.js](https://nodejs.org) dan unduh versi LTS (Long Term Support).

2. **Instalasi:**

   - Jalankan installer dan ikuti petunjuknya. Pastikan opsi untuk menambahkan Node.js ke PATH dicentang agar Anda dapat menjalankan perintah `node` dan `npm` dari command prompt.

3. **Verifikasi:**

   - Buka Command Prompt dan ketik:
     ```bash
     node -v
     npm -v
     ```
   - Pastikan kedua perintah mengembalikan versi Node.js dan npm yang terpasang.

4. **Penambahan PATH (Jika belum otomatis agar node dapat dipakai secara global):**
   - Klik kanan pada **This PC** atau **Computer**, pilih **Properties**, lalu **Advanced system settings**.
   - Klik **Environment Variables** dan di bagian **System variables**, cari variable **Path**.
   - Klik **Edit** dan tambahkan direktori instalasi Node.js (misalnya: `C:\Program Files\nodejs\`).
   - Simpan dan restart Command Prompt.

#### Di Linux

1. **Menggunakan Package Manager (Debian/Ubuntu):**
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```
2. **Atau Menggunakan Node Version Manager (nvm):**
   - Install nvm dengan perintah:
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
     ```
   - Tutup dan buka kembali terminal, lalu install Node.js:
     ```bash
     nvm install --lts
     ```
3. **Verifikasi:**
   - Ketik di terminal:
     ```bash
     node -v
     npm -v
     ```

#### Di macOS

- **Menggunakan Homebrew:**
  - Pastikan Homebrew sudah terinstal. Jika belum, instal dari [brew.sh](https://brew.sh).
  - Jalankan perintah:
    ```bash
    brew install node
    ```
- **Verifikasi:**
  - Buka Terminal dan ketik:
    ```bash
    node -v
    npm -v
    ```

---

## Basic Javascript

- 🔗 [PPT](https://docs.google.com/presentation/d/1WpakPiQUarnP7htMg2jHTPQm8Wo4mrsWF4iQPaj53nw/edit?usp=sharing) (buka dengan email ugm)

## Dasar JavaScript yang Terpakai di React

- **Tipe Data:** JavaScript memiliki tipe data seperti string, number, boolean, null, dan undefined.
  ```javascript
  let message = "Hello React"; // String
  const count = 10; // Number
  let isVisible = true; // Boolean
  ```
- **Pengkondisian:** Digunakan untuk mengambil keputusan dengan `if`, `else if`, dan `else`.
  ```javascript
  if (count > 0) {
    console.log("Positive");
  } else {
    console.log("Not positive");
  }
  ```
- **Perulangan:** Loop seperti `for` dan metode array seperti `forEach` digunakan untuk iterasi.

  ```javascript
  [1, 2, 3].forEach((item) => console.log(item));
  ```

- **Arrow Functions:** Untuk menulis fungsi dengan sintaks ringkas.
  ```javascript
  const greet = (name) => `Hello, ${name}!`;
  ```
- **Destructuring:** Untuk mengambil nilai dari objek atau array.
  ```javascript
  const { title, content } = props;
  ```
- **State Management:** Menggunakan hook seperti `useState` untuk mengelola state komponen.
  ```javascript
  const [text, setText] = useState("");
  ```

---

## 🛠 **Install Extension Pendukung**

1. **JavaScript (ES6) code snippets** - Menyediakan autocompletion, linting, dan tooltips untuk sintaks JavaScript ES6, sehingga memudahkan penulisan dan menjaga konsistensi kode.  
   🔗 [Unduh JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

## Kode Aplikasi AI Summarizer (Versi Interaktif)

Aplikasi ini menggunakan JavaScript untuk mengambil input, menampilkan hasil, menyimpan riwayat di local storage, dan menyediakan tombol delete untuk menghapus item riwayat.

### File: `index.html`

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Summarizer</title>
    <!-- Global Styles -->
    <link rel="stylesheet" href="style.css" />
    <!-- Tailwind CSS via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 font-sans">
    <header class="bg-blue-500 text-white py-4">
      <h1 class="text-3xl font-bold">AI Summarizer</h1>
    </header>
    <main class="max-w-3xl mx-auto p-4">
      <p class="mb-4 text-lg">Masukkan teks untuk diringkas:</p>
      <!-- Container input dan tombol -->
      <div class="flex flex-col sm:flex-row gap-4">
        <textarea
          id="inputText"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Masukkan teks di sini"
        ></textarea>
        <div class="flex flex-col gap-2">
          <button
            class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onclick="ringkas()"
          >
            Ringkas
          </button>
          <button
            class="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            onclick="reset()"
          >
            Reset
          </button>
        </div>
      </div>
      <!-- Fitur Tambahan: Hasil Ringkasan -->
      <section class="mt-8 bg-white p-4 rounded shadow">
        <h2 class="text-xl font-semibold mb-2">Hasil Ringkasan</h2>
        <p id="hasilRingkasan" class="text-gray-700">
          Hasil ringkasan teks akan muncul di sini setelah proses ringkasan
          selesai.
        </p>
      </section>
      <!-- Fitur Tambahan: Riwayat Ringkasan -->
      <section class="mt-8 bg-white p-4 rounded shadow">
        <h2 class="text-xl font-semibold mb-2">Riwayat Ringkasan</h2>
        <ul
          id="riwayatRingkasan"
          class="list-disc list-inside text-gray-700 flex flex-col gap-[8px]"
        >
          <!-- Riwayat akan dirender secara dinamis -->
        </ul>
      </section>
    </main>
    <!-- Hubungkan file JavaScript eksternal -->
    <script src="script.js"></script>
  </body>
</html>
```

### File: `main.js`

```javascript
// Fungsi untuk menampilkan riwayat ringkasan dan menambahkan tombol delete
function renderHistory() {
  const riwayatList = document.getElementById("riwayatRingkasan");
  riwayatList.innerHTML = "";
  let history = JSON.parse(localStorage.getItem("summaryHistory")) || [];

  if (history.length === 0) {
    riwayatList.innerHTML =
      "<p class='text-gray-700'>Tidak ada riwayat ringkasan.</p>";
    return;
  }

  history.forEach((item, index) => {
    let li = document.createElement("li");
    li.className = "flex justify-between items-center";
    li.innerText = item;

    // Tombol delete untuk tiap riwayat
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className =
      "ml-4 px-2 py-1 bg-red-400 text-white rounded hover:bg-red-500 transition";
    delBtn.onclick = function () {
      deleteHistory(index);
    };

    li.appendChild(delBtn);
    riwayatList.appendChild(li);
  });
}

// Fungsi untuk menghapus item riwayat berdasarkan index
function deleteHistory(index) {
  let history = JSON.parse(localStorage.getItem("summaryHistory")) || [];
  history.splice(index, 1);
  localStorage.setItem("summaryHistory", JSON.stringify(history));
  renderHistory();
}

// Fungsi untuk event tombol "Ringkas"
function ringkas() {
  var input = document.getElementById("inputText").value.trim();
  if (input === "") return;

  // Simulasi ringkasan: output sama dengan input (karena belum terhubung ke model AI)
  var summary = input;
  document.getElementById("hasilRingkasan").innerText = summary;

  // Simpan ringkasan ke localStorage dan render riwayat
  let history = JSON.parse(localStorage.getItem("summaryHistory")) || [];
  history.push(summary);
  localStorage.setItem("summaryHistory", JSON.stringify(history));
  renderHistory();
}

// Fungsi untuk event tombol "Reset"
function reset() {
  document.getElementById("inputText").value = "";
  document.getElementById("hasilRingkasan").innerText =
    "Hasil ringkasan teks akan muncul di sini setelah proses ringkasan selesai.";
  // Riwayat tetap tersimpan di localStorage
}

// Render riwayat saat halaman dimuat
window.onload = renderHistory;
```

---

## Penjelasan Kode JavaScript

- **DOM Manipulation:**  
  Menggunakan `document.getElementById` untuk memilih elemen, `document.createElement` untuk membuat elemen baru, dan `innerText` atau `innerHTML` untuk memanipulasi konten elemen.

- **Local Storage:**  
  Local storage digunakan untuk menyimpan riwayat ringkasan sehingga data tetap ada saat halaman direfresh. Data diambil menggunakan `localStorage.getItem()` dan disimpan dengan `localStorage.setItem()`.

- **Event Handling:**  
  Fungsi `ringkas()`, `reset()`, dan `deleteHistory(index)` dipanggil melalui atribut `onclick` pada tombol. Ini menangani aksi klik dan memanipulasi DOM sesuai kebutuhan.

- **Array Function & Iterasi:**  
  Metode `forEach` digunakan untuk mengiterasi array riwayat dan merender tiap item ke dalam elemen list. Fungsi `splice` digunakan untuk menghapus item dari array.

---

## Kesimpulan Modul 3

- **Dasar JavaScript:**  
  Peserta telah mengenal tipe data, pengkondisian, perulangan, dan fungsi array yang umum dipakai di React.
- **DOM & Local Storage:**  
  Kode mengilustrasikan cara memanipulasi elemen HTML dan menyimpan data sementara menggunakan local storage.
- **Node.js & JavaScript di Luar Browser:**  
  Penjelasan Node.js menunjukkan bahwa JavaScript dapat berjalan di luar browser dengan memanfaatkan mesin V8 dan npm untuk pengembangan fullstack.
- **Implementasi Interaktivitas:**  
  Dengan memisahkan file JavaScript dari HTML, aplikasi menjadi lebih modular dan mudah dipelihara.

🚀 **Selanjutnya**, kita akan mendalami konsep React, migrasi proyek ke React dalam bentuk kumpulan komponen!
