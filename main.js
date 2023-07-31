import "./style.css"
import superheroes from "superheroes"
import { obtenerNumeroSuperior, obtenerNumeroInferior } from "./view"
import { sumarNumeros } from "./calculadora"

console.log(superheroes)

///selectores
const superheroesArea = document.querySelector("#lista-superheroes")
const btnsuma = document.querySelector("#btnsuma")
const numeroSuperior = document.querySelector("#numeroSuperior")
const numeroInferior = document.querySelector("#numeroInferior")

////eventos
const init = () => {
  const randomSuperheroesArray = superheroes.random()
  console.log(randomSuperheroesArray)
  superheroesArea.innerHTML = /* HTML */ `
    <div>${randomSuperheroesArray}</div>
  `
}

/// evento boton suma

btnsuma.addEventListener("click", () => {
  const resultado = sumarNumeros(
    obtenerNumeroSuperior(numeroSuperior),
    obtenerNumeroInferior(numeroInferior)
  )
  console.log(resultado)

  if (resultado) {
    const resultadoArea = document.querySelector("#resultado")
    resultadoArea.innerHTML = /* HTML */ ` <div>${resultado}</div>`
  }
  return init()
})
