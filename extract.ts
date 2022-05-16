type AvailableDrinks3 = 'coffee' | 'tea' | 'juice' | 'water';
let myDrin2: AvailableDrinks;
myDrink = 'coffee';

type AvailableDrinks4 = 'coffee' | 'tea';
let myDrink3: Extract<AvailableDrinks, AvailableDrinks2>;
myDrink3 = 'coffee'; 