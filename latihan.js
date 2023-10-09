document.addEventListener("DOMContentLoaded", function () {
  var bilanganpertamaInput = document.getElementById("bilanganpertama");
  var bilangankeduaInput = document.getElementById("bilangankedua");
  var jumlahButton = document.getElementById("jumlahButton");

  jumlahButton.addEventListener("click", function () {
    var bilanganpertama = parseFloat(bilanganpertamaInput.value);
    var bilangankedua = parseFloat(bilangankeduaInput.value);

    if (!isNaN(bilanganpertama) && !isNaN(bilangankedua)) {
      var hasil = bilanganpertama + bilangankedua;
      alert("Hasil penjumlahan: " + hasil);
    } else {
      alert("Mohon masukkan bilangan yang valid.");
    }
  });

  var ulangiButton = document.getElementById("ulangiButton");
  ulangiButton.addEventListener("click", function () {
    bilanganpertamaInput.value = "";
    bilangankeduaInput.value = "";
  });
});
