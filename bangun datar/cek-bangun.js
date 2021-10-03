import {
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
} from "./rumus-bangun.js";
import { input, output, display } from "./display.js";

export default (bangun) => {
  if (bangun == 1) {
    const sisi = input("Masukkan sisi persegi ");
    output(display, luasPersegi(sisi), kelilingPersegi(sisi));
  } else if (bangun == 2) {
    const panjang = input("Masukkan Panjang");
    const lebar = input("Masukkan Lebar");
    output(
      display,
      luasPersegiPanjang(panjang, lebar),
      KelilingPersegiPanjang(panjang, lebar)
    );
  } else if (bangun == 3) {
    const alas = input("Masukkan alas Segitiga");
    const tinggi = input("Masukkan Tinggi Segitiga");
    const sisiSegitiga = input("Masukkan Sisi Segitiga");
    output(display, luasSegitiga(alas, tinggi), kelilingSegitiga(sisiSegitiga));
  } else if (bangun == 4) {
    const a = input("Masukkan Alas Jajar Genjang");
    const t = input("Masukkan Tinggi jajar Genjang");
    const s = input("Masukkan Sisi Jajar Genjang");
    output(display, luasJajarGenjang(a, t), kelilingJajarGenjang(s));
  } else if (bangun == 5) {
    const d1 = input("Masukkan Diagonal 1");
    const d2 = input("Masukkan Diagonal 2");
    const sisiBelah = input("Masukkan Sisi Belah Ketupat");
    output(display, luasBelahKetupat(d1, d2), kelilingBelahKetupat(sisiBelah));
  }
};
