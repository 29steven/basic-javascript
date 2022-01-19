// 1. mencari luas tanah
// 2. menghitung total harga
// 3. menghitung ppn + total harga

var p = "20.5";
var l = "30";
var luas = "0";
var harga = "1500000";
var totalHarga = "0";
var ppn = "0";
var hargaAkhir = "0";

luas = p * l;
totalHarga = luas * harga;
ppn = 15/100 * totalHarga;
hargaAkhir = totalHarga + ppn;

console.log("Luas = "+hargaAkhir);
