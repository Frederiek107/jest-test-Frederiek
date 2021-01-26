const divideBy3 = require("./index").divideBy3;

test ("divideBy3() should return if dividing a given number by 3 returns a round number: true/false" , ()=> {
//ARRANGE
const num1=1356
const num2=-1356
const num3=16
const num4=0

//ACT
const result1 = divideBy3(num1);
const result2 = divideBy3(num2);
const result3 = divideBy3(num3);
const result4 = divideBy3(num4);

//ASSERT
expect(result1).toBe(true);
expect(result2).toBe(true);
expect(result3).toBe(false);
expect(result4).toBe(true);
});