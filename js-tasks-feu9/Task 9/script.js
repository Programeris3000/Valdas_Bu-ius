/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite objektą, kuris turi 3 savybes ir 1 metodą:

Savybės:
title, director, budget

Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins:
- Jeigu true, tai atsakymą išvesti tokiu formatu: „Režisieriaus {režisieriaus vardas} sukurto filmo {filmo pavadinimas} biudžetas viršijo 100 000 000 mln USD"


- Jeigu false, tai atsakymą išvesti tokiu formatu: „Režisierius {režisieriaus vardas}, kurdamas filmą {filmo pavadinimas}, neviršijo 100 000 000 mln USD biudžeto"
------------------------------------------------------------------------------------------------------ */
const object = {
  title: 'Good guys',
  director: 'John Macler',
  budget: 12,
  wasExpensive: function () {
    if (this.budget > 100000000) {
      console.log(`Režisieriaus ${this.director} sukurto filmo ${this.title} biudžetas viršijo 100 000 000 mln USD`)
    } else {
      console.log(`Režisierius ${this.director}, kurdamas filmą ${this.title}, neviršijo 100 000 000 mln USD biudžeto`)
    }
  }
}

object.wasExpensive()

