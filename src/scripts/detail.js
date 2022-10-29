/* eslint-disable no-unused-vars */
import axios from "axios";
import { url, cariTempat } from "./smartphone";

const loadIdPhone = async () => {
  const hasilCari = document.querySelectorAll(".hasil-cari");
  hasilCari.forEach((hasil) => {
    hasil.addEventListener("click", async (e) => {
      cariTempat.innerHTML = "";

      await axios
        .get(`${url}/${e.target.id}`)
        .then(async (rensponse) => {
          await detailSpesifikasi(rensponse.data.data);
        })
        .catch(async (error) => {
          await console.log(error);
        });
    });
  });
};

const detailSpesifikasi = async (datas) => {
  console.log(datas);
};

export default loadIdPhone;
