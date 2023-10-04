/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:

1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector('form')

form.addEventListener('submit', (event => {
  event.preventDefault()

  const searchInput = document.querySelector('#search')

  const display = document.createElement('p')
  display.style.fontSize = `24px`
  display.style.fontWeight = `bold`

  const displayWrapper = document.querySelector('#output')
  displayWrapper.style.display = 'flex'
  displayWrapper.style.justifyContent = `center`
  displayWrapper.style.border = `solid`
  displayWrapper.style.backgroundColor = ``

  displayWrapper.innerHTML = ''


  const inputValue = searchInput.value
  const lb = inputValue * 2.2046
  const g = inputValue * 0.0010000
  const oz = inputValue * 35.274

  if (isNaN(inputValue) || inputValue === '') {
    display.textContent = `Įveskite skaičių`
    displayWrapper.style.backgroundColor = `red`
  } else {
    display.textContent = `${inputValue}Kg yra : ${lb}lb, ${g}g, ${oz}oz`
    displayWrapper.style.backgroundColor = `lightGreen`
  }
  displayWrapper.append(display)
}))
