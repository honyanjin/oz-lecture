// 포스트 가져오기
const fetchMultiplePosts = async (...ids) => {
  // console.log(ids);
  const results = {}; // 결과용

  for (let id of ids) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) {
        throw new Error(`에러 : ${response.status}`);
      }
      const data = await response.json();
      results[id] = data.title;
    } catch (error) {
      results[id] = `에러 : ${error.message}`;
    }
  }

  return results; // 반환해
};

// 메인 함수
const mainFunction = function () {
  const input = document.getElementById("postIds").value;
  const output = document.getElementById("output");
  const button = document.getElementById("fetchPosts");

  // DOM 초기화
  output.innerHTML = "";
  output.classList.remove("error");

  // 쉼표로 나누고 숫자 배열로 변환
  const rawIds = input.split(",").map((id) => id.trim());
  const numericIds = rawIds.map(Number);

  // 유효한 ID 필터링 (1~100 사이 정수)
  const validIds = numericIds.filter((id) => !isNaN(id) && id >= 1 && id <= 100);

  if (validIds.length === 0) {
    output.innerHTML = "유효한 ID(1-100)를 입력하세요!";
    output.classList.add("error");
    return;
  }

  // 버튼 잠그고
  button.disabled = true;

  // fetch 요청 실행
  fetchMultiplePosts(...validIds)
    .then((results) => {
      for (var key in results) {
        const div = document.createElement("div");
        div.className = "post";
        div.textContent = `post${key}: ${results[key]}`;
        output.appendChild(div);
      }
    })
    .catch((err) => {
      output.innerHTML = `에러 발생: ${err.message}`;
      output.classList.add("error");
    })
    .finally(() => {
      button.disabled = false; // 버튼 열고
    });
};

// 이벤트 리스너 등록
document.getElementById("fetchPosts").addEventListener("click", mainFunction);
