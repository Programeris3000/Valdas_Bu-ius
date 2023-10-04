/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const button = document.querySelector('#btn')
const output = document.querySelector('#output')
const message = document.querySelector('#message')
// console.log(output)

button.addEventListener('click', async () => {
  output.innerHTML = ''

  const cardsFunction = await cards()
  console.log(cardsFunction)

  output.append(cardsFunction)

})

async function cards() {
  const res = await fetch(ENDPOINT)
  const users = await res.json()

  const cardsContainer = document.createElement('div')
  cardsContainer.classList.add('cardsContainer')
  cardsContainer.style.display = `flex`
  cardsContainer.style.flexWrap = `wrap`
  cardsContainer.style.justifyContent = `center`


  users.forEach(user => {
    const contentWrapper = document.createElement('div')
    contentWrapper.style.border = 'solid'
    contentWrapper.style.borderRadius = '10px'
    contentWrapper.style.margin = '20px'
    contentWrapper.style.backgroundColor = 'green'


    const userLogin = document.createElement('h2')
    userLogin.textContent = user.login
    userLogin.style.margin = `20px`
    userLogin.style.textAlign = `center`

    const imageWrapper = document.createElement('div')
    imageWrapper.classList.add('image-wrapper')

    const userAvatar = document.createElement('img')
    userAvatar.src = `${user.avatar_url}`
    userAvatar.style.width = `300px`
    userAvatar.style.display = `block`
  
  


    imageWrapper.append(userAvatar)
    contentWrapper.append(userLogin, imageWrapper)
    cardsContainer.append(contentWrapper)

  })
  return cardsContainer
}
