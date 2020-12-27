function changeText(text) {
  document.getElementById("demo").innerText = text;
}

function validate() {
  let name = document.getElementById("Name").value;
  let lastName = document.getElementById("LastName").value;
  let select = document.getElementById("exampleFormControlSelect1").value;

  let onlyLetters = /^[a-zA-Z\s]*$/;

  // VALIDACIJA ZA IME
  if (name == "" || name == null || name.includes(" ")) {
    alert('Polje "Ime" mora biti popunjeno.');
    document.getElementById("Name").focus();
    return false;
  }

  if (!name.match(onlyLetters)) {
    alert("Ime može da sadrži samo slova!");
    document.getElementById("Name").focus();
    return false;
  }

  // VALIDACIJA ZA PREZIME

  if (lastName == "" || lastName == null || lastName.includes(" ")) {
    alert('Polje "Prezime" mora biti popunjeno.');
    document.getElementById("LastName").focus();
    return false;
  }

  if (!lastName.match(onlyLetters)) {
    alert("Prezime može da sadrži samo slova!");
    document.getElementById("LastName").focus();
    return false;
  }

  // VALIDACIJA ZA ZANIMANJE

  if (select == "") {
    alert('Polje "Vaše Zanimanje" mora biti popunjeno');
    document.getElementById("exampleFormControlSelect1").focus();
    return false;
  }
}

function validateForm() {
  let ime = document.getElementById("ime").value;
  let prezime = document.getElementById("prezime").value;
  let naslov = document.getElementById("naslov").value;
  let poruka = document.getElementById("poruka").value;
  let broj = document.getElementById("broj").value;

  let onlyLetters = /^[a-zA-Z\s]*$/;
  let onlyNumbers = /^[+]?\d+$/;

  if (ime == " " || ime == null || ime.includes(" ")) {
    document.getElementById("imeLabel").innerText = "Neispravan unos imena";
    document.getElementById("ime").style.borderColor = "red";
    return false;
  }

  if (!ime.match(onlyLetters)) {
    document.getElementById("imeLabel").innerText =
      "Ime može da sadrži samo slova";
    document.getElementById("ime").style.borderColor = "red";
    return false;
  }

  if (prezime == "" || prezime == null || prezime.includes(" ")) {
    document.getElementById("prezimeLabel").innerText =
      "Neisparavn unos prezimena";
    document.getElementById("prezime").style.borderColor = "red";
    return false;
  }

  if (!prezime.match(onlyLetters)) {
    document.getElementById("prezimeLabel").innerText =
      "Prezime sadrži samo slova";
    document.getElementById("prezime").style.borderColor = "red";
    return false;
  }

  if (naslov == "" || naslov == null) {
    document.getElementById("naslovLabel").innerText = "Unesite naslov poruke";
    document.getElementById("naslov").style.borderColor = "red";
    return false;
  }

  if (broj == "" || broj == null) {
    document.getElementById("brojLabel").innerText = "Unesite broj telefona";
    document.getElementById("broj").style.borderColor = "red";
    return false;
  }

  if (broj.length < 6) {
    console.log("sasdas");
    document.getElementById("brojLabel").innerText =
      "Broj mora sadržati bar 6 cifra.";
    document.getElementById("broj").style.borderColor = "red";
    return false;
  } else if (broj.length > 12) {
    document.getElementById("brojLabel").innerText =
      "Broj ne sme da sadrži više od 12 cifara.";
    document.getElementById("broj").style.borderColor = "red";
    return false;
  }

  if (!broj.match(onlyNumbers)) {
    document.getElementById("brojLabel").innerText = "Neispravan unos broja";
    document.getElementById("broj").style.borderColor = "red";
    return false;
  }

  if (poruka.length > 20) {
    document.getElementById("porukaLabel").innerText =
      "Poruka ne sme sadržati više od 75 karaktera.";
    document.getElementById("poruka").style.borderColor = "red";
    return false;
  } else if (poruka.length < 1) {
    document.getElementById("porukaLabel").innerText =
      "Poruka mora sadržati bar 1 karakter.";
    document.getElementById("poruka").style.borderColor = "red";
    return false;
  }

  if (poruka == "" || poruka == null) {
    document.getElementById("poruka").style.borderColor = "red";
    return false;
  } else {
    return true;
  }
}

function initMap() {
  const mojaAdresa = { lat: 43.573, lng: 22.273 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7.5,
    center: mojaAdresa,
  });

  const marker = new google.maps.Marker({
    position: mojaAdresa,
    map: map,
  });
}
