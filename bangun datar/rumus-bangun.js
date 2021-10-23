// keliling lingkaran
const kelilingLingkaran = (r) => 2 * PHI * r;
// luas lingkaran
const luasLingkaran = (r) => PHI * r ** 2;
// keliling persegi
const kelilingPersegi = (s) => 4 * s;
// luas persegi
const luasPersegi = (s) => s ** 2;
// luas persegi panjang
const luasPersegiPanjang = (p, l) => p * l;
// keliling persgi panjang
const KelilingPersegiPanjang = (p, l) => 2 * (p + l);
// keliling segitiga
const kelilingSegitiga = (s) => 3 * s;
// luas segitiga
const luasSegitiga = (a, t) => (a * t) / 2;
// luas jajar genjang
const luasJajarGenjang = (a, t) => a * t;
// keliling jajar genjang
const kelilingJajarGenjang = (s) => 4 * s;
// keliling belah ketupat
const kelilingBelahKetupat = (s) => 4 * s;
// luas belah ketupat
const luasBelahKetupat = (d1, d2) => (d1 * d2) / 2;
export {
  kelilingLingkaran,
  luasLingkaran,
  kelilingPersegi,
  luasPersegi,
  KelilingPersegiPanjang,
  luasPersegiPanjang,
  kelilingSegitiga,
  luasSegitiga,
  kelilingJajarGenjang,
  luasJajarGenjang,
  kelilingBelahKetupat,
  luasBelahKetupat,
};
