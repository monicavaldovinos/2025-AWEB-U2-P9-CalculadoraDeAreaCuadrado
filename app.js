const inputMedida = document.getElementById("inputMedida");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", functionClick);

function functionClick() {
  const valor = (inputMedida.value || "").trim();
  const medida = parseFloat(valor);

  if (valor === "" || isNaN(medida) || medida <= 0) {
    resultado.textContent = "Error: ingresa un número mayor a cero.";
    resultado.className = "mensajeIncorrecto";
    return;
  }

  const area = medida * medida;
  resultado.textContent = "El área del cuadrado es: " + area;
  resultado.className = "mensajeCorrecto";
}
