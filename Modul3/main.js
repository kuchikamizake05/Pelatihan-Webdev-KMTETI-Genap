document.addEventListener("DOMContentLoaded", function () {
  // Seleksi elemen
  const textarea = document.querySelector("textarea");
  const btnRingkas = document.querySelectorAll("button")[0];
  const btnReset = document.querySelectorAll("button")[1];
  const hasilSection = document.querySelector("section:nth-of-type(1) p");
  const riwayatList = document.querySelector("section:nth-of-type(2) ul");

  const historyKey = "summaryHistory";
  let history = JSON.parse(localStorage.getItem(historyKey)) || [];

  // Fungsi untuk merender riwayat ringkasan
  function renderHistory() {
    riwayatList.innerHTML = "";
    history.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      riwayatList.appendChild(li);
    });
  }
  renderHistory();

  // Event handler untuk tombol "Ringkas"
  btnRingkas.addEventListener("click", function () {
    const inputText = textarea.value.trim();
    if (inputText === "") return;

    // Simulasi proses ringkasan (output hanya menampilkan teks asli)
    const summary = inputText;

    // Tampilkan hasil ringkasan
    hasilSection.textContent = summary;

    // Tambahkan ringkasan ke riwayat dan simpan ke local storage
    history.push(summary);
    localStorage.setItem(historyKey, JSON.stringify(history));
    renderHistory();
  });

  // Event handler untuk tombol "Reset"
  btnReset.addEventListener("click", function () {
    // Hapus tampilan hasil ringkasan dan kosongkan textarea
    hasilSection.textContent =
      "Hasil ringkasan teks akan muncul di sini setelah proses ringkasan selesai.";
    textarea.value = "";
    // Riwayat tetap tersimpan di local storage
  });
});
