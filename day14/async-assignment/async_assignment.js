/* ===== 선언 ===== */
const MAX_TIME = 10; // 최대값
var timerMessage = ""; // 출력 메시지

/* ===== 함수 ===== */
// 타이머 시작 함수
function startTimer(seconds = 10) {
  let timerCount = seconds; // 카운트다운용 변수

  const timerDisplay = document.getElementById("timerDisplay");
  const startButton = document.getElementById("startTimer");

  timerDisplay.classList.remove("error");
  timerDisplay.textContent = `타이머: ${timerCount}초`;

  startButton.disabled = true;

  const intervalId = setInterval(() => {
    timerCount--;
    if (timerCount > 0) {
      timerDisplay.textContent = `타이머: ${timerCount}초`;
    } else {
      clearInterval(intervalId);
      timerMessage = "타이머 종료!";
      timerDisplay.textContent = timerMessage;
      startButton.disabled = false;
    }
  }, 1000);
}

// 스타트 버튼에 클릭 이벤트 리스너 등록
function setupEventListener() {
  const startButton = document.getElementById("startTimer");
  startButton.addEventListener("click", handleStartClick);
}

// 시작 버튼 클릭시 실행될 함수
function handleStartClick() {
  const inputValue = document.getElementById("timerInput").value;
  const timerDisplay = document.getElementById("timerDisplay");
  const seconds = Number(inputValue);

  // 유효성 검사
  if (isNaN(seconds) || seconds < 1 || seconds > MAX_TIME) {
    timerDisplay.textContent = "유효한 숫자(1-10)를 입력하세요!";
    timerDisplay.classList.add("error");
    return;
  }

  // 타이머 시작
  startTimer(seconds);
}

/* ===== 실행 ===== */
setupEventListener();
