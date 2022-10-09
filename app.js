//array slice
const food=["pizza","burger","fingerChips","donuts","springRolls"];
// index value 0,1,2,3,4
const modifiedFood=food.slice(1,4);
console.log(modifiedFood);

//array splice
const foods=["pizza","burger","fingerChips","donuts","springRolls"];
const modifiedFoods=foods.splice(2,0,"noodles","icecream");
console.log(foods);

//array filter
const numberArray=[12,324,213,4,2,3,45,4234];
const evenNumber=numberArray.filter(numberArray=>numberArray%2==0);
console.log(evenNumber);