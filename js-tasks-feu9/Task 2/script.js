/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const button = document.querySelector('#btn__element')
const buttonState = document.querySelector('#btn__state')
let clickCount = 0

button.addEventListener('click',()=>{
  clickCount++
  buttonState.textContent = clickCount
})