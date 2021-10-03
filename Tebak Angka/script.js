const angkaAwal = parseInt(prompt("masukkan angka awal", 0));

const angkaAkhir = parseInt(prompt("masukkan angka akhir", 0));

let angkaAcak = Math.floor(
  Math.random() * (angkaAkhir - angkaAwal) + angkaAwal
);

const tebak = parseInt(prompt("Tebak hayo", 0));
if (tebak == angkaAcak) {
  alert("horeee berhasil ");
} else {
  alert(`maaf anda gagal , seharusnya ${angkaAcak}`);
}
