
  // Fungsi untuk memeriksa apakah suatu bilangan adalah genap atau ganjil
  function cekGenapGanjil(bilangan) {
    if (bilangan % 2 === 0) {
      return "Genap";
    } else {
      return "Ganjil";
    }
  }

  // Loop for untuk mengecek genap atau ganjil untuk angka 1 hingga 5
  for (let i = 1; i <= 5; i++) {
    let hasilCek = cekGenapGanjil(i);
    console.log(`Angka ${i} adalah ${hasilCek}`);
    
    // Menambahkan hasil ke dalam elemen HTML
    let hasilElement = document.createElement("p");
    hasilElement.textContent = `Angka ${i} adalah ${hasilCek}`;
    document.body.appendChild(hasilElement);
  }

