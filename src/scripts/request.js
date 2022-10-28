import axios from "axios";

const url = "https://phone-specs-api.azharimm.dev/v2";

document.getElementById("cariKirim").addEventListener("click", async () => {
  const kueri = document.getElementById("cariSmartphone").value;

  if (!kueri) return console.log("tidak boleh kosong");

  await axios
    .get(`${url}/search?query=${kueri}`)
    .then(async (res) => {
      const data = res.data.data.phones;
      await hasil(data);
    })
    .catch(async (err) => {
      await console.log(err);
    });
});

const hasil = async (data) => {
  let phones = "";

  Object.values(data).forEach((phone) => {
    phones += `<li>${phone.phone_name}</li>`;
  });

  const cariTempat = document.getElementById("hasil");

  cariTempat.innerHTML = `<p>Hasil Pencarian :</p><ul class="saran">${phones}<ul>`;
};
