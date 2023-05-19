const bookprice = [567.50,345.40,767.45,567.60,600,400,230,450,350.50,560.40,800.56,890.9];

console.log("BookPrice");

//1. Find all prices less than 500
const lessthan500 = bookprice.filter(price => price < 500);
console.log("Q1");
console.log(lessthan500);


// 2. Find the first price greater than 600
const firstPriceGreaterThan600 = bookprice.find(price => price > 600);
console.log("Q2");
console.log(firstPriceGreaterThan600);


// 3. Find prices between 500 and 600
const pricesBetween500and600 = bookprice.filter(price => price > 500 && price < 600);
console.log("Q3");
console.log(pricesBetween500and600);


// 4. Display sum of all prices
const sumOfPrices = bookprice.reduce((first, second) => first + second, 0);
console.log("Q4");
console.log(sumOfPrices);


// 5. Display sum of all prices but initial value of sum should be 100
const sumOfPricesWithInitialValue = bookprice.reduce((first, second) => first + second, 100);
console.log("Q5");
console.log(sumOfPricesWithInitialValue);


// 6. Double every price from the array and display new prices
const doubledPrices = bookprice.map(price => price * 2);
console.log("Q6");
console.log(doubledPrices);


// 7. Display sum of prices which are less than 500
const sumOfPricesLessThan500 = bookprice.filter(price => price < 500).reduce((first, second) => first + second, 0);
console.log("Q7");
console.log(sumOfPricesLessThan500);
