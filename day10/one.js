// 후치연산 : 값을 사용하고 연산한다.
let increment = 10;
console.log("1", increment); // 10
increment++;
console.log("2", increment); // 11
console.log("3", increment++); // 11 출력후 1더함
console.log("4", increment); // 12

let decrement = 10;
console.log("dec1", decrement); // 10
decrement--;
console.log("dec2", decrement); // 9
console.log("dec3", decrement--); // decremt9 출력후 1빼기
console.log("dec4", decrement); // 8

// 전치연산 : 연산하고 값을 사용한다.
let incFirst = 10;
console.log("incFirst 1", incFirst); // 10
++incFirst;
console.log("incFirst 2", incFirst); // 11
console.log("incFirst 3", ++incFirst); // incFirst에 1올린 12출력
console.log("incFirst 4", incFirst); // 12

let decFirst = 10;
console.log("decFirst 1", decFirst); // 10
--decFirst;
console.log("decFirst 2", decFirst); // 9
console.log("decFirst 3", --decFirst); // decFirst에 1내린 8출력
console.log("decFirst 4", decFirst); // 8

// console.log(++a) 전치연산
let a = 10;
a = a + 1;
console.log(a);

// console.log(b++) 후치연산
let b = 10;
console.log(b);
b = b + 1;

// 불가 : let c = c++;

// 단항 부정 연산자
let num_1 = -10;
num_1 = -num_1;
console.log(num_1);

let num_2 = 10;
num_2 = -num_2;
console.log("-(10)", num_2);
