document
  .getElementById("birthdayForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tanggal").value;

    // Encode the data into URL query string
    const queryString = `nama=${encodeURIComponent(
      nama
    )}&tanggal=${encodeURIComponent(tanggalLahir)}`;

    // Redirect to the greeting page with the query string
    window.location.href = `greeting.html?${queryString}`;
  });
