// Mencari elemen tombol di HTML berdasarkan id="sapaButton" dan menyimpannya ke dalam variabel 'tombol'
const tombol = document.getElementById("sapaButton");

// PERBAIKAN: Mengecek apakah elemen tombol benar-benar ditemukan di halaman sebelum memasang aksi klik
// Ini mencegah munculnya error "Cannot read properties of null" di konsol browser
if (tombol) {
    // Menambahkan pendengar acara (event listener) ketika tombol diklik
    tombol.addEventListener("click", () => {
        // Menampilkan jendela pesan sapaan di browser
        alert("Hallo, Terimakasih sudah berkunjung");
    });
}