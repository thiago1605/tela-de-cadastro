let form = document.querySelector(".b7validator");

let B7Validator = {
  handleSubmit: (event) => {
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll("label input");

    B7Validator.clearErrors();

    inputs.forEach((input) => {
      let check = B7Validator.checkInput(input);
      if (check != true) {
        send = false;
        console.log(check);
        B7Validator.showError(input, check);
      }
    });

    if (send) {
      form.submit();
    }
  },

  checkInput: (input) => {
    let rules = input.getAttribute("data-rules");
    if (rules !== null) {
      rules = rules.split("|");
      for (k in rules) {
        let rDetails = rules[k].split("=");
        switch (rDetails[0]) {
          case "required":
            if (input.value === "") {
              return "Campo obrigatório!";
            }
            break;

          case "min":
            if (input.value.length < rDetails[1]) {
              return `Campo exige pelo menos ${rDetails[1]} caracteres`;
            }
            break;

          case "email":
            if (input.value != "") {
              let regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
              if (!regex.test(input.value.toLowerCase())) {
                return "E-mail inválido!";
              }
            }
        }
        console.log(rDetails[0][0]);
      }
      return true;
    }
  },

  showError: (input, error) => {
    input.style.borderColor = "#ff0000";
    let errorElement = document.createElement("small");
    errorElement.classList.add("error");
    errorElement.textContent = error;

    input.insertAdjacentElement("afterEnd", errorElement);
  },

  clearErrors: () => {
    let inputs = form.querySelectorAll("input");
    inputs.forEach((input) => (input.style = ""));
    let errorElements = document.querySelectorAll("label small");
    errorElements.forEach((small) => {
      small.remove();
    });
  },
};

form.addEventListener("submit", B7Validator.handleSubmit);
