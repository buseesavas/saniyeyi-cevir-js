let girilenSaniye = Number(prompt('Saniye cinsinden bir sayı giriniz, dakika olarak karşılığını söyleyeyim.'));

let saat = Math.floor(girilenSaniye / 3600);
girilenSaniye = girilenSaniye - (saat * 3600);

let dakika = Math.floor(girilenSaniye / 60);
girilenSaniye = girilenSaniye - (dakika * 60);

let saniye = girilenSaniye;

alert(saat + " saat, " + dakika + " dakika, " + saniye + " saniye");