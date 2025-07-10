const maxStars = 10;
let input;
var stars = "";

// 별
function printStars(count = 1) {
  var output = "";
  for (let i = 0; i < count; i++) {
    output += "*";
  }
  console.log(output);
}

// 역순별
const printReverseStars = function (count = 1) {
  for (let i = count; i >= 1; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line);
  }
};

// 사각형
const printSquare = (count = 1) => {
  for (let i = 0; i < count; i++) {
    console.log(`${i + 1}: ` + "*".repeat(count)); // 콘솔 출력이 완전히 같으면 콘솔에서 압축되서 안보임.
  }
};

// 유효성 검사
function isValidInput(value) {
  const num = Number(value);
  return !isNaN(num) && num >= 1 && num <= maxStars;
}

// 메인 함수
function main() {
  while (true) {
    input = prompt("Enter the number of stars (1-10):");

    if (isValidInput(input)) {
      const num = Number(input);

      console.log("--- 별 ---");
      // 별
      printStars(num);

      // 역순별
      console.log("--- 역순별 ---");
      printReverseStars(num);

      // 사각형
      console.log("--- 사각형 ---");
      printSquare(num);

      break;
    } else {
      console.log("Invalid input! Enter a number between 1 and 10.");
      continue;
      1;
    }
  }
}

// 프로그램 실행
main();
