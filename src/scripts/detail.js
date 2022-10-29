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

  const [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14] =
    specifications;
  const jaringan = s1.specs[0].val[0];
  const status = s2.specs[1].val[0];
  const bodyDimensi = s3.specs[0].val[0];
  const bodyBerat = s3.specs[1].val[0];
  const bodyTerbuat = s3.specs[2].val[0];
  const bodySim = s3.specs[3].val[0];
  const bodyLainnya = s3.specs[4].val[0];
  const displayTipe = s4.specs[0].val[0];
  const displayResolusi = s4.specs[1].val[0];
  const displaySize = s4.specs[2].val[0];
  const displayUkuran = s4.specs[3].val[0];
  const deviceOS = 
  const deviceChip =
  const deviceCPU =
  const deviceGPU =
  const
  const
  const
  const
  const
  const
  const
  const
  const
  const
  const
  const
  const
  const
  const
  const
  const


  console.log(data);

  release_date = release_date.replace(/released|exp\.\srelease/i, "");
  dimension = dimension.replace(/thickness/i, "");
  storage = storage.replace(/storage/i, "");
  storage = storage.replace(/no.*/i, "tidak ada slot SD Card");

  cariTempat.innerHTML = "<h5>Detail Spesifikasi<h5>";
  cariTempat.innerHTML += `<img src="${phone_images[0]}" alt="${phone_name}" class="gambar-hasil"><br>`;
  cariTempat.innerHTML += `<h5>Deskripsi</h5>`;
  cariTempat.innerHTML += `<p>Nama : ${phone_name}<br>Brand : ${brand}<br>Rilisan : ${release_date}<br>Sistem Operasi : ${os}<br>Dimensi : ${dimension}<br>Penyimpanan : ${storage}`;
  cariTempat.innerHTML += `Jaringan</p>`;
};

const extractSn = async (Sn) => {
  let data = new Object();

  for (i in Sn) {
    data[i] = Sn.specs[i].val[0]
  }
  
  return data;
}

export default loadIdCari;

// ecifications
// :
// Array(14)
// 0
// :
// {title: 'Network', specs: Array(6)}
// 1
// :
// {title: 'Launch', specs: Array(2)}
// 2
// :
// {title: 'Body', specs: Array(5)}
// 3
// :
// {title: 'Display', specs: Array(5)}
// 4
// :
// {title: 'Platform', specs: Array(4)}
// 5
// :
// {title: 'Memory', specs: Array(3)}
// 6
// :
// {title: 'Main Camera', specs: Array(3)}
// 7
// :
// {title: 'Selfie camera', specs: Array(3)}
// 8
// :
// {title: 'Sound', specs: Array(2)}
// 9
// :
// {title: 'Comms', specs: Array(6)}
// 10
// :
// {title: 'Features', specs: Array(2)}
// 11
// :
// {title: 'Battery', specs: Array(2)}
// 12
// :
// {title: 'Misc', specs: Array(5)}
// 13
// :
// {title: 'Tests', specs: Array(6)}
// length
// :
// 14
