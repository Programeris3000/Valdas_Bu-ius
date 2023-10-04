/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą. Vartotojui atėjus į tinklapį, kreipsis į cars.json failą
ir atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const outputElement = document.querySelector('#output')
outputElement.style.display = `flex`
outputElement.style.flexWrap = `wrap`
outputElement.style.justifyContent = `center`




fetch('cars.json')
  .then(res => res.json())
  .then(brands => {
    brands.forEach(brand => {
      console.log(brand)
      const brandCard = document.createElement('div')
      brandCard.style.border = `solid `
      brandCard.style.borderRadius = `10px`
      brandCard.style.margin = `20px`
      brandCard.style.padding = `20px`
      brandCard.style.backgroundColor = `pink`

      const manufacturer = document.createElement('h2')
      manufacturer.style.marginBottom = `20px`
      manufacturer.style.textAlign = `center`
      manufacturer.textContent = `Brand: ${brand.brand}`

      const listWrapper = document.createElement('div')
      listWrapper.classList.add('list-wrapper')

      const listTitle = document.createElement('h3')
      listTitle.textContent = 'Models:'
      listTitle.style.marginBottom = '10px'

      const modelList = document.createElement('ul')

      const allModels = brand.models

      allModels.forEach(model => {
        const oneModel = document.createElement('li')
        oneModel.style.listStyle = `none`
        oneModel.textContent = model
        modelList.append(oneModel)
      })

      listWrapper.append(listTitle, modelList)
      brandCard.append(manufacturer, listWrapper)
      outputElement.append(brandCard)
    })
  })
