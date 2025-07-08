// 변수 선언
var age = undefined; // 할당 X
var age = null; // null 할당
age = 39; // 값(39) 할당
console.log("age :", age);

var isMarried = false; // boolean 타입
console.log("isMarried :", isMarried);

const Myname = "이호진";
console.log("name :", Myname);

// BigInt 값 사용
let anyValue1 = 1234567890123456789012345678901234567890n;
let nayvalye2 = BigInt("45615615648465315644865456456414154616164");
console.log("anyValue1 :", anyValue1);
console.log("nayvalye2 :", nayvalye2);

// Symbol : 고유 식별자를 만들려고 유일한 값 생성
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("sym1=sym2의 결과 : ", sym1 === sym2);

// 문자열처리
let profileInfo = "[인\t사]" + "안녕하세요\n" + `저는 ${Myname} 입니다.`;
console.log(profileInfo);

// 배열 리터럴
let hobbies = ["reading", "gaming", "coding"];
console.log("My hobbies : " + hobbies.join(","));

// 객체 리터럴
let infomation = {
  name: "hojin",
  age: 39,
  isOZStudent: true,
  pic: null,
  catcatcat: undefined,
  email: null,
};
console.log("My Name is " + infomation.name);

// 타입
console.log(typeof hobbies);
console.log(typeof infomation.isOZStudent);

// null과 undefined 구분
let something1 = undefined;
let something2 = null;
console.log(something1);
console.log(something2);
console.log(something1 === something2);

// 템플릿 문자열
console.log(`i\`m ${infomation.age}`);

// 추가데이터 처리
console.log(infomation.email);
