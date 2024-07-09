// Function to get query string parameters
function getQueryParams() {
  const params = {};
  const queryString = window.location.search.substring(1);
  const queryArray = queryString.split("&");
  queryArray.forEach((param) => {
    const [key, value] = param.split("=");
    params[key] = decodeURIComponent(value);
  });
  return params;
}

window.addEventListener("load", function () {
  const params = getQueryParams();
  const nama = params.nama;
  const tanggalLahir = new Date(params.tanggal);
  const today = new Date();
  let age = today.getFullYear() - tanggalLahir.getFullYear();
  const m = today.getMonth() - tanggalLahir.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < tanggalLahir.getDate())) {
    age--;
  }

  const greetingMessage = `Selamat Ulang Tahun ${nama}!<br> Sekarang kamu berumur ${age} tahun.`;
  document.getElementById("greetingMessage").innerHTML = greetingMessage;
});

// Musik mulai dengan diklik
// var musik = "";
// if (musik == "") {
//   musik = "asset/musik/Hari Bahagia.mp3";
// }
// var audio = new Audio(musik);
// audio.loop = true;
// audio.autoplay = false;
// function mulai() {
//   audio.play();
// }
// musik otomatis
document.addEventListener("DOMContentLoaded", function () {
  var musik = "asset/musik/Hari Bahagia.mp3"; // Tentukan path musik yang benar
  var audio = new Audio(musik);
  audio.loop = true;
  audio.autoplay = true; // Aktifkan autoplay

  // Tambahkan event listener untuk memastikan audio dimulai setelah dimuat sepenuhnya
  audio.addEventListener("canplaythrough", function () {
    audio.volume = 0.3;
    audio.play();
  });
});
