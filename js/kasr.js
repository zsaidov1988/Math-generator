const elKasrGenerate = document.querySelector(".js-fraction-generate");
const elKasrCheck = document.querySelector(".js-fraction-check");
const elButunNatija = document.querySelector(".js-fraction-int-result");
const elSuratNatija = document.querySelector(".js-fraction-surat-result");
const elMahrajNatija = document.querySelector(".js-fraction-mahraj-result");
const elKasr = document.querySelector(".js-fraction-expression");
const inputs = document.querySelector(".kasr");
let surat, mahraj, butun;

elKasrGenerate.addEventListener("click", (e) => {
  e.preventDefault();
  do {
    surat = getRndInteger(10, 99);
    mahraj = getRndInteger(2, 9);
  } while (surat <= mahraj || surat % mahraj == 0 || surat / mahraj < 1);
  elKasr.textContent = `${surat} / ${mahraj}`;
  elButunNatija.value = "";
  elSuratNatija.value = "";
  elMahrajNatija.value = "";
  elButunNatija.disabled = false;
  elSuratNatija.disabled = false;
  elMahrajNatija.disabled = false;
  elButunNatija.style.color = "black";
  elSuratNatija.style.color = "black";
  elMahrajNatija.style.color = "black";
});

elKasrCheck.addEventListener("click", (e) => {
  e.preventDefault();
  butun = Math.trunc(surat / mahraj);
  const suratRes = surat % mahraj;
  console.log(butun, mahraj, suratRes);
  const inputInt = elButunNatija.value.trim();
  const inputSurat = elSuratNatija.value.trim();
  const inputMahraj = elMahrajNatija.value.trim();
  if (inputInt == butun && inputSurat == suratRes && inputMahraj == mahraj) {
    elButunNatija.style.color = "green";
    elSuratNatija.style.color = "green";
    elMahrajNatija.style.color = "green";
  } else {
    elButunNatija.style.color = "red";
    elSuratNatija.style.color = "red";
    elMahrajNatija.style.color = "red";
  }
});

inputs.addEventListener("input", () => {
  elButunNatija.style.color = "black";
  elSuratNatija.style.color = "black";
  elMahrajNatija.style.color = "black";
});
