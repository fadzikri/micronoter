/* eslint-disable no-unused-vars */
import axios from "axios";
import { baseURL, judulCari, tempatCari, slug } from "./smartphone";

const loadIdPhone = async () => {
  const hasilCari = document.querySelectorAll(".hasil-cari");
  hasilCari.forEach((hasil) => {
    hasil.addEventListener("click", async (e) => {
      tempatCari.innerHTML = "";

      await axios
        .get(`${baseURL}/${e.target.id}`)
        .then(async (rensponse) => {
          const datas = rensponse.data.data;
          await deskripsi(datas);
        })
        .catch(async (error) => {
          if (error)
            return (tempatCari.innerHTML = `${judulCari}<p>Maaf, terjadi kesalahan</p>`);
        });
    });
  });
};

const deskripsi = async (datas) => {
  const imagePhone = datas.phone_images[0];
  const namaPhone = datas.phone_name;
  const brandPhone = datas.brand;
  const spesifikPhone = await extractDatas(datas);

  return (tempatCari.innerHTML = `<h4 id="${slug}">Deskripsi</h4>
  <img src="${imagePhone}" class="gambar-hasil" title="${slug}"><br>
  <h5>Produk</h5>
  <p>Nama : ${namaPhone}<br>
  Brand : ${brandPhone}<br>
  ${spesifikPhone}
  </p>
  `);
};

const extractDatas = async (datas) => {
  let collections = new String();

  datas.specifications.forEach((unit) => {
    collections += `<h5>${unit.title}</h5>`;
    unit.specs.forEach((subUnit) => {
      collections += `${subUnit.key} : ${subUnit.val[0]}<br>`;
    });
    collections += `<br>`;
  });

  return collections;
};

export default loadIdPhone;
