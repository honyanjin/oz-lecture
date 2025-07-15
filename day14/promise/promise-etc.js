// race, any

const raceTest = () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("느린성공"), 5000));
  const p2 = new Promise((resolve, reject) => setTimeout(() => reject("빠른 실패"), 2000));
  const p3 = new Promise((resolve) => setTimeout(() => resolve("엄청 빠른 성공"), 1000));
  Promise.race([p1, p2, p3]) // 가장 빨리 응답 된 것을 사용한다.
    .then((result) => console.log("race resolved:", result))
    .catch((error) => console.log("Race error:", error.message));
};

const anyTest = () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("느린 성공"), 5000));
  const p2 = new Promise((resolve, reject) => setTimeout(() => reject("빠른 실패"), 5000));
  Promise.any([p1, p2]) //
    .then((result) => console.log("race resolved:", result))
    .catch((error) => console.log("Race error:", error.message));
};

raceTest();
anyTest();
