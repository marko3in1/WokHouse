function changeText(text) {
  document.getElementById("demo").innerText = text;
}

function validate() {
  if (document.getElementById("Name").value.match(letters)) {
    return false;
  }
  if (document.getElementById("Name").value == "") {
    alert('Polje "Ime" mora biti popunjeno.');
    document.getElementById("Name").focus();
    return false;
  }
  if (document.getElementById("LastName").value == "") {
    alert('Polje "Prezime" mora biti popunjeno');
    document.getElementById("LastName").focus();
    return false;
  }
  if (document.getElementById("exampleFormControlSelect1").value == "") {
    alert('Polje "Vaše Zanimanje" mora biti popunjeno');
    document.getElementById("exampleFormControlSelect1").focus();
    return false;
  }
}
