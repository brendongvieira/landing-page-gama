function store() {
  var inputName = document.getElementById("input-name");
  localStorage.setItem("Nome: ", inputName.value);
  var inputEmail = document.getElementById("input-email");
  localStorage.setItem("Email: ", inputEmail.value);

  if (inputName.value !== "" && inputEmail.value !== "") {
    alert("Oba! Entre no seu e-mail para resgatar o seu cupom.");
  }
}
