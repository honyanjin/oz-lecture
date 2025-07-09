let score = null;
var grade = null;
const maxScore = 105;
var statusResult;
let Message = null;
let isResultPrint = false;

// 입출력
let inputStr = prompt("점수를 입력하세요.");
let input = parseInt(inputStr);
console.log("입력한 점수 : ", input);

score = input;

// 점수유효검사하고 콘솔출력여부결정
if (isNaN(score) || score > 100 || score < 0) {
  console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
  isResultPrint = true;
}

// 보너스 점수
score++;
score += 5;
score *= 1.1;
score = parseInt(score);
if (score > 105) score = 105; // 105제한

// 등급부여
if (score >= 100) {
  grade = "S";
} else if (score >= 90 && score < 100) {
  grade = "A";
} else if (score >= 80 && score < 90) {
  grade = "B";
} else if (score >= 70 && score < 80) {
  grade = "C";
} else if (score >= 60 && score < 70) {
  grade = "D";
} else if (score < 60) {
  grade = "F";
}

// 합격/불합격 여부
statusResult = score >= 60 ? "pass" : "Fail";

// 등급별 메세지
switch (grade) {
  case "S":
    Message = "Super!";
    break;
  case "A":
    Message = "Excellent work!";
    break;
  case "B":
    Message = "Good job!";
    break;
  case "C":
    Message = "Satisfactory performance!";
    break;
  case "D":
    Message = "Needs improvement.";
    break;
  case "F":
    Message = "Please try harder!";
    break;
}

// 출력
if (isResultPrint) {
  console.log("Final Score : ", score);
  console.log("Grade : ", grade);
  console.log("Status : ", statusResult);

  if (score === 100) {
    Message += " Perfect Score!";
  }

  console.log("Message : ", Message);
}
