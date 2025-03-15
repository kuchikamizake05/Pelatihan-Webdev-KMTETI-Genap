// Fungsi untuk menampilkan ringkasan dan menambahkan ke riwayat
function ringkas() {
  const input = document.getElementById("inputText").value.trim();
  if (input === "") return;

  // Simulasi ringkasan: output sama dengan input (karena belum terhubung ke model AI)
  const summary = input;
  document.getElementById("hasilRingkasan").innerText = summary;

  // Simpan ringkasan ke localStorage dan render riwayat
  let history = JSON.parse(localStorage.getItem("summaryHistory")) || [];
  history.push(summary);
  localStorage.setItem("summaryHistory", JSON.stringify(history));
  renderHistory();
}

// Fungsi untuk mereset input dan hasil ringkasan
function reset() {
  document.getElementById("inputText").value = "";
  document.getElementById("hasilRingkasan").innerText =
    "Hasil ringkasan teks akan muncul di sini setelah proses ringkasan selesai.";
}

// Fungsi untuk menghapus item riwayat berdasarkan index
function deleteHistory(index) {
  let history = JSON.parse(localStorage.getItem("summaryHistory")) || [];
  history.splice(index, 1);
  localStorage.setItem("summaryHistory", JSON.stringify(history));
  renderHistory();
}

// Fungsi untuk menampilkan riwayat ringkasan dan menambahkan delete button
function renderHistory() {
  const riwayatList = document.getElementById("riwayatRingkasan");
  riwayatList.innerHTML = "";
  let history = JSON.parse(localStorage.getItem("summaryHistory")) || [];

  // Jika tidak ada riwayat, tampilkan pesan
  if (history.length === 0)
    return (riwayatList.innerHTML =
      "<p class='text-gray-700'>Tidak ada riwayat ringkasan.</p>");

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

// Render riwayat saat halaman dimuat
window.onload = renderHistory;
