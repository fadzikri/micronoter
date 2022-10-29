import axios from "axios";
import loadIdPhone from "./detail";

const baseURL = "https://phone-specs-api.azharimm.dev/v2";
const phoneCari = document.getElementById("phone-cari");
const tempatCari = document.getElementById("tempat-cari");
const judulCari = "<h4>Hasil Pencarian</h4>";

let slug = null;

document.getElementById("kirim-cari").addEventListener("click", async () => {
  if (!phoneCari.value)
    return (tempatCari.innerHTML = `${judulCari}<p>Kolom pencarian belum diisi</p>`);

  await axios
    .get(`${baseURL}/search?query=${phoneCari.value}`)
    .then(async (response) => {
      phoneCari.value = "";

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
    slug = phone.slug;
    phones += `<li><a class="hasil-cari" href="#${phone.slug}" id="${phone.slug}" title="${phone.slug}">${phone.phone_name}<a></li>`;
  });

  tempatCari.innerHTML = `${judulCari}<ul class="saran">${phones}<ul>`;
};

export { baseURL, judulCari, tempatCari, slug };
