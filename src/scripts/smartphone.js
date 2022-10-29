import axios from "axios";
import loadIdPhone from "./detail";

const baseURL = "https://phone-specs-api.azharimm.dev/v2";
const kueriCari = document.getElementById("phone-cari");
const tempatCari = document.getElementById("tempat-cari");
const judulCari = "<h5>Hasil Pencarian</h5>";

document.getElementById("kirim-cari").addEventListener("click", async () => {
  if (!kueriCari.value)
    return (tempatCari.innerHTML = `${judulCari}<p>Kolom pencarian belum diisi</p>`);

  await axios
    .get(`${baseURL}/search?query=${kueriCari.value}`)
    .then(async (response) => {
      kueriCari.value = "";

      const datas = response.data.data.phones;
      await hasilCari(datas);
    })
    .catch(async (error) => {
      if (error)
        return (tempatCari.innerHTML = `${judulCari}<p>Maaf, terjadi kesalahan</p>`);
    });

  await loadIdPhone();
});

const hasilCari = async (datas) => {
  let phones = "";

  if (!datas.length)
    return (tempatCari.innerHTML = `${judulCari}<p>Tidak ada hasil ¯\\_(ツ)_/¯</p>`);

  Object.values(datas).forEach((phone) => {
    phones += `<li><a class="hasil-cari" href="#${phone.slug}" id="${phone.slug}" title="${phone.slug}">${phone.phone_name}<a></li>`;
  });

  tempatCari.innerHTML = `${judulCari}<ul class="saran">${phones}<ul>`;
};

export { baseURL, tempatCari };
