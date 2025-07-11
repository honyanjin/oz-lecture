// map
let numbers = [1, 2, 3];

// numbers에 있는 모든 숫자값을 2배로 하고 싶군.

// 1번 방법
// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   newNumbers.push(num * 2);
// }
// numbers = newNumbers;

// 2번 방법
// function double(num) {
//   return num * 2;
// }
// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   newNumbers.push(double(num));
// }
// numbers = newNumbers;

// 3번방법
numbers = numbers.map((num) => {
  return num * 2;
});

// console.log(numbers);

// filter
let numbersA = [1, 2, 3, 4, 5, 6];

// 짝수인 값만 빼고 싶군.

// 1번방법
// let newNumbersA = [];
// for (const num of numbersA) {
//   if (num % 2 === 0) newNumbersA.push(num);
// }

// 2번방법
// const even = function (num) {
//   if (num % 2 === 0) return num;
// };
// let newnumbersA = [];
// for (const num of numbersA) {
//   if (even(num)) newnumbersA.push(even(num));
// }
// console.log(newnumbersA);

// 3번방법
numbersA = numbersA.filter((num) => {
  return num % 2 === 0;
});
// console.log(numbersA);

// numbersA = numbersA.filter((num) => num % 2 === 0);

// reduce
let numbersB = [1, 2, 3, 4];
// 배열에 있는 값의 총합
// let sum = 0;
// numbersB.forEach((num) => {
//   sum += num;
// });
// console.log(sum);

// const sum = (a, b) => {
//   return a + b;
// };

// const sum1 = sum(sum(sum(sum(0, 1), 2), 3), 4);
// console.log(sum1);

const sum = numbersB.reduce((acc, num) => acc + num, 10);
console.log(sum);
