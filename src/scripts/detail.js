import axios from "axios";
import { url, cariTempat } from "./smartphone";

const loadIdCari = async () => {
  const hasilCari = document.querySelectorAll(".hasil-cari");
  hasilCari.forEach((hasil) => {
    hasil.addEventListener("click", async (e) => {
      cariTempat.innerHTML = "";

      await axios
        .get(`${url}/${e.target.id}`)
        .then(async (res) => {
          await detailSpesifikasi(res.data.data);
        })
        .catch(async (err) => {
          await console.log(err);
        });
    });
  });
};

const detailSpesifikasi = async (data) => {
  let {
    brand,
    dimension,
    os,
    phone_images,
    phone_name,
    release_date,
    specifications,
    storage,
  } = data;

  // eslint-disable-next-line no-unused-vars
  const [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14] =
    specifications;

  release_date = release_date.replace(/released/i, "");
  dimension = dimension.replace(/thickness/i, "");
  storage = storage.replace(/storage/i, "");
  storage = storage.replace(/no.*/i, "tidak ada slot SD card");

  cariTempat.innerHTML = "<h5>Detail Spesifikasi<h5>";
  cariTempat.innerHTML += `<img src="${phone_images[0]}" alt="${phone_name}"><p>Nama : ${phone_name}<br>Brand : ${brand}<br>Rilisan : ${release_date}<br>Sistem Operasi : ${os}<br>Dimensi : ${dimension}<br>Penyimpanan : ${storage}</p>`;
};

export default loadIdCari;
