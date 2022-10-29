/* eslint-disable no-unused-vars */
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
  return (cariTempat.innerHTML = `<h5>Jaringan</h5>
  ${await extract(data)}
  `);
};

const extract = async (data) => {
  let { phone_images, phone_name, brand, specifications } = data;
  let jaringan = await extractSn(specifications[0]);
  // let status = await extractSn(specifications[1]);
  // let body = await extractSn(specifications[2]);
  // let display = await extractSn(specifications[3]);
  // let device = await extractSn(specifications[4]);
  // let memory = await extractSn(specifications[5]);
  // let kameraBel = await extractSn(specifications[6]);
  // let kameraDep = await extractSn(specifications[7]);
  // let suara = await extractSn(specifications[8]);
  // let sinyal = await extractSn(specifications[9]);
  // let fitur = await extractSn(specifications[10]);
  // let hal = await extractSn(specifications[11]);
  // let baterai = await extractSn(specifications[12]);

  return await extractSn(jaringan);

  // console.log(jaringan);

  // jaringan = jaringan[0][0];
  // status = status[0][0];
  // body = { dimensi: body[0][0], berat: body[1][0], sim: body[2][0] };
  // display = {
  //   tipe: display[0][0],
  //   size: display[1][0],
  //   resolusi: display[2][0],
  // };
  // device = {
  //   os: device[0][0],
  //   chip: device[1][0],
  //   cpu: device[2][0],
  //   gpu: device[3][0],
  // };
  // memory = {
  //   external: memory[0][0],
  //   internal: memory[1][0],
  // };
  // kameraBel = {
  //   foto: 1,
  //   video: 2,
  // };
  // kameraDep = {
  //   foto: 1,
  //   video: 2,
  // };
  // suara = {
  //   speaker: 1,
  //   audiojack: 2,
  // };
  // sinyal = {};
  // hal = {};
  // baterai = {};
};

const extractSn = async (Sn) => {
  let res = new String();

  Sn.specs.forEach((x) => {
    console.log(res);
    res += `${x.key} : ${x.val[0]}<br>`;
  });

  return res;
};

export default loadIdCari;
