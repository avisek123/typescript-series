type AvailableDrinks = 'coffee' | 'tea' | 'juice' | 'water';
let myDrink: AvailableDrinks;
myDrink = 'coffee';

type AvailableDrinks2 = 'coffee' | 'tea';
let myDrink2: Exclude<AvailableDrinks, AvailableDrinks2>;
// myDrink2 = 'coffee'; // this should error 
myDrink2 = 'juice'