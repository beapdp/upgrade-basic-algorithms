const character = {name: 'Jack Sparrow', age: 25};
let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log('Soy '+ firstName + ' ' + lastName + ', tengo ' + age +  'años y me gustan los lobos.');

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price)


let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: basePrice + globalBasePrice};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: basePrice + globalBasePrice};