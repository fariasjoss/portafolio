const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

const texts = document.querySelectorAll("textarea");

texts.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    /*if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
    */

    if (input.validity.valid) {
      //input.parentElement.classList.remove("input-container--invalid");
      //button.disable = false;
    } else {
      //input.parentElement.classList.add("input-container--invalid");
      document.querySelector(".luz").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
  }
  
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
  ];
  
  const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    asunto: {
      valueMissing: "El campo asunto no puede estar vacío",
    },
    mensaje: {
      valueMissing: "El campo mensaje no puede estar vacío",
    },
  };
  
  /*const validadores = {
    nacimiento: (input) => validarNacimiento(input),
  };
  */

  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
  
  /*
  function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
      mensaje = "Debes tener al menos 18 años de edad";
    }
  
    input.setCustomValidity(mensaje);
  }
  
  function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
      fecha.getUTCFullYear() + 18,
      fecha.getUTCMonth(),
      fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
  }
  */