// const fruits = ["사과", "바나나", "오렌지"];
const fruits = new Array("사과", "바나나", "오렌지");
console.log(fruits);
console.log(fruits[1]);
console.log(fruits.length);

const mixed = [1, "hello", true, { name: "홍길동" }];
console.log(mixed);

// Array.push() 배열 요소 추가 >> 인덱스 마지막에 밀어넣기
fruits.push("딸기");
console.log(fruits);
console.log(fruits.length);

// Array.pop() 배열 마지막 요소 삭제후 삭제한 요소 반환 >>> 인데스 마지막 요소 빼내기
fruits.pop();
console.log(fruits);
console.log(fruits.length);

// Array.shift() 배열 첫번째 요소 삭제후 삭제된 요소 반환
const removedbyShift = fruits.shift();
console.log(fruits);
console.log(fruits.length);
console.log("removedByShift : ", removedbyShift);

// Array.unshift() 배열 요소 첫번째 인덱스에 추가
fruits.unshift("파인애플");
console.log(fruits);
console.log(fruits.length);
