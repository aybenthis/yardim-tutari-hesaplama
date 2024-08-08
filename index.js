function tutarHesapla(isimler) {
  const ahmetHarfleri = 'ahmet';
  let toplamHarfSayisi = 0;

  for (let i = 0; i < isimler.length; i++) {
    const isim = isimler[i].toLowerCase();

    for (let j = 0; j < ahmetHarfleri.length; j++) {
      const harf = ahmetHarfleri[j];
      toplamHarfSayisi += isim.split(harf).length - 1;
    }
  }
  return toplamHarfSayisi * 1000;
}
