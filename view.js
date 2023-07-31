//// view calculadora
export const obtenerNumeroSuperior = (numeroSuperior) => {
  return Number(numeroSuperior.value)
}

export const obtenerNumeroInferior = (numeroInferior) => {
  return Number(numeroInferior.value)
}

const calculadoraArea = document.querySelector("#calculadoraArea")
//area de la  calculadora
calculadoraArea.innerHTML = /* HTML */ `
  <div>
    <div>
      <label>Primer numero</label>
      <input id="numeroSuperior" type="number" />
    </div>
    <div>
      <label>Segundo numero</label>
      <input id="numeroInferior" type="number" />
    </div>
    <button id="btnsuma">sumar</button>
    <div id="resultado"></div>
  </div>
`
