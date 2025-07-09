let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log("isMathLowAvg", isMathLowAvg);

let isEnglishLowAvg = english < avg;
console.log("isEnglishLowAvg", isEnglishLowAvg);

// 수학이 평균보다 낮고 AND 영어가 평균보다 낮냐?
console.log(isMathLowAvg && isEnglishLowAvg);

// 수학이 평균보다 낮거나 OR 영어가 평균보다 낮냐?
console.log(isMathLowAvg || isEnglishLowAvg);
