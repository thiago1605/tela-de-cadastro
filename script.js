import { subscribe } from "./firebase/validador.js";

const txtName = document.getElementById("name"),
  txtEmail = document.getElementById("email"),
  txtPassword = document.getElementById("password");


  form.addEventListener("submit", async () => {
    const subscription = {
      name: txtName.value,
      email: txtEmail.value,
      password: txtPassword.value,
    };

    await subscribe(subscription);
  });

