/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite objektą, kuri turi 2 savybes ir 4 metodus.

Savybės: du skaičiai, kuriuos reikės panaudoti nurodytuose metoduose.

Metodai:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

const object = {
  feature1: 24,
  feature2: 36,
  sum: function () {
    return this.feature1 + this.feature2
  },
  subtraction: function () {
    return this.feature2 - this.feature1
  },
  multiplication: function () {
    return this.feature1 * this.feature2
  },
  division: function () {
    return this.feature1 / this.feature2
  }
}
console.log(object.sum())
console.log(object.subtraction())
console.log(object.multiplication())
console.log(object.division())
