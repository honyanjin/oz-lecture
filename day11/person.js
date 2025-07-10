// 생성자
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`안녕하세요. 저는 ${this.name}입니다.`);
  };
}

// 생성자로 만들어진 객체
const personA = new Person("hojin", 39);
const personB = new Person("cat", 40);

console.log("personA.name", personA.name);
console.log("personB.name", personB.name);
personA.greet();
personB.greet();
