// 기본형태
const promise = new Promise((resolve, reject) => {
  console.log("promise 영역");
  setTimeout(() => {
    // console.log("3초 지남");
    let promiseResult = "작업성공!";
    resolve(promiseResult);
  }, 3000);
});

promise
  // then >>>
  .then((result) => {
    // console.log("then 영역");
    // console.log(result);
  })
  // catch >>>
  .catch((err) => {
    // console.log("catch");
    // console.log(err);
  });

// Promise.all 병렬처리
const p1 = new Promise((resolve) => setTimeout(() => resolve("작업1"), 5000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("작업2"), 6000));
Promise.all([p1, p2]).then((results) => console.log(results));
