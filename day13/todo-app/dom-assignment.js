// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");
// 개수용 변수 선언
let taskCount;
// 우선순위 셀렉트 변수 선언
let prioritySelect;

// 스타트 함수
function initTaskUI() {
  // 추가 버튼 클릭 이벤트 적용
  addButton.addEventListener("click", addTask);

  // 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // 전체 삭제 버튼 클릭 이벤트 적용
  clearButton.addEventListener("click", clearAllTasks);
  makeSelect();
  makeDiv();
}

// 우선순위 셀렉트 만들기 함수
function makeSelect() {
  prioritySelect = document.createElement("select");
  prioritySelect.id = "priority";

  const optionLow = document.createElement("option");
  optionLow.value = "low";
  optionLow.textContent = "낮음";

  const optionHigh = document.createElement("option");
  optionHigh.value = "high";
  optionHigh.textContent = "높음";

  prioritySelect.appendChild(optionLow);
  prioritySelect.appendChild(optionHigh);

  taskInput.parentNode.insertBefore(prioritySelect, addButton);
}

// 현재 할 일 div 만들기 함수
function makeDiv() {
  const countDiv = document.createElement("div");
  countDiv.id = "taskCount";
  countDiv.textContent = "현재 할 일 : 0개";

  taskInput.parentNode.insertBefore(countDiv, taskInput); // #taskInput 위쪽에다가 넣고

  taskCount = document.getElementById("taskCount");
}

// 할 일 개수 업데이트 함수
function updateTaskCount() {
  const count = taskList.children.length;
  taskCount.textContent = `현재 할 일 : ${count} 개`;
}

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  // 트림
  const taskText = taskInput.value.trim();

  // 입력값이 비어있는지 확인
  if (taskText === "") {
    // console.log("내용 없음");
    alert("내용을 입력하세요!");
    return;
  } else {
    // console.log("내용 있음");
  }

  // 새로운 리스트 아이템 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // 할 일 텍스트 추가
  const span = document.createElement("span");
  span.textContent = taskText;

  // 우선순위 반영: 높은 우선순위는 빨간색
  const priority = prioritySelect?.value || "low";
  if (priority === "high") {
    span.style.color = "red";
  }

  // 삭제 버튼 생성
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.className = "delete-button";

  // // 삭제 버튼 이벤트 리스너 >>> 전체 일괄 이벤트 리스너 적용시 필요 없다~~~
  // deleteBtn.addEventListener("click", () => {
  //   taskList.removeChild(li);
  //   updateTaskCount();
  // });

  // 완료 상태 토글 이벤트 리스너
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // 요소 조립
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // 삭제 리스너 일괄 적용
  applyDeleteListeners();

  // 개수 갱신
  updateTaskCount();

  // 입력창 초기화
  taskInput.value = "";
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
  taskList.innerHTML = "";
  updateTaskCount();
}

// 삭제 버튼 일괄 이벤트 리스너 추가 함수
function applyDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((btn) => {
    if (!btn.dataset.listenerAttached) {
      btn.addEventListener("click", () => {
        const li = btn.closest("li");
        if (li) {
          li.remove();
          updateTaskCount();
        }
      });
      btn.dataset.listenerAttached = "true"; // 중복 방지
    }
  });
}

// 스타트 함수 실행
initTaskUI();
