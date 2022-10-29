import axios from "axios";
import loadIdCari from "./detail";

const url = "https://phone-specs-api.azharimm.dev/v2";
const cariTempat = document.getElementById("hasil");
const judulCari = "<h5>Hasil Pencarian</h5>";

document.getElementById("cariKirim").addEventListener("click", async () => {
  const kueri = document.getElementById("cariSmartphone").value;

  if (!kueri)
    return (cariTempat.innerHTML = `${judulCari}<p>Kolom pencarian kosong</p>`);

  await axios
    .get(`${url}/search?query=${kueri}`)
    .then(async (res) => {
      const data = res.data.data.phones;
      await hasil(data);
    })
    .catch(async (err) => {
      await console.log(err);
    });

  await loadIdCari();
});

const hasil = async (data) => {
  let phones = "";

  if (!data.length)
    return (cariTempat.innerHTML = `${judulCari}<p>Tidak ada hasil ¯\\_(ツ)_/¯</p>`);

  Object.values(data).forEach((phone) => {
    phones += `<li><a class="hasil-cari" href="#${phone.slug}" id="${phone.slug}" title="${phone.slug}">${phone.phone_name}<a></li>`;
  });

  cariTempat.innerHTML = `${judulCari}<ul class="saran">${phones}<ul>`;
};

export { url, cariTempat };
