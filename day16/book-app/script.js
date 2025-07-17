// 도서 데이터를 저장할 배열
const books = [];
// 대여 상태를 관리할 배열
const rentals = [];

// 도서 추가 기능
function addBook() {
  const titleInput = document.getElementById("bookTitle");
  const priceInput = document.getElementById("bookPrice");
  const title = titleInput.value.trim();
  const price = Number(priceInput.value);

  if (title === "" || isNaN(price) || price <= 0) {
    alert("도서 제목과 유효한 가격(0 이상)을 입력하세요!");
    return;
  }

  const book = { title, price };
  books.push(book);

  // 대여 상태 클로저 객체 생성 및 저장
  const rental = createBookRental(title);
  rentals.push(rental);

  const bookList = document.getElementById("bookList");
  // 이것도 이미 다 되어 있고...오늘 도전 과제는 날로먹는군; 심심하니까 CSS하고 콘솔이나 찍고 고양이 추가해야지.
  const li = document.createElement("li");
  li.className = "book-item";
  li.innerHTML = `
        <span>${title} - ${price}원 (대여 가능)</span>
        <button onclick="removeBook(this)">삭제</button>
        <button onclick="toggleRental(this)">대여/반납</button>
    `;
  bookList.appendChild(li);

  titleInput.value = "";
  priceInput.value = "";

  console.log(`[추가] 도서 추가됨: ${title} (${price}원)`);
}

// 삭제 기능
function removeBook(button) {
  // li 요소와 제목 추출
  const li = button.parentElement;
  const text = li.querySelector("span").textContent; // 예: "책1 - 5000원 (대여 가능)"
  const title = text.split(" - ")[0]; // 제목: "책1"

  // TODO : books 배열에서 도서 제거 (findIndex, splice 사용)
  const bookIndex = books.findIndex((book) => book.title === title);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    console.log(`[삭제] 도서 제거됨: ${title}`);
  }

  // TODO(도전과제) : rentals 배열에서 대여 상태 제거 (findIndex, splice 사용)
  const rentalIndex = rentals.findIndex((rental) => rental.getStatus().title === title);
  if (rentalIndex !== -1) {
    rentals.splice(rentalIndex, 1);
    console.log(`[삭제] 대여 상태 제거됨: ${title}`);
  }

  // DOM에서 li 제거
  li.remove();
}

// 도서 데이터 처리
function processBooks() {
  // TODO : map 제목에 "Book: " 접두사 추가
  const prefixedBooks = books.map((book) => ({
    title: "book : " + book.title,
    price: book.price,
  }));

  // TODO : filter 10000원 이상 도서
  const highPriceBooks = books.filter((book) => book.price >= 10000);

  // TODO : reduce 총 가격 계산
  const totalPrice = books.reduce((sum, book) => sum + book.price, 0);

  // 결과 표시
  const resultsDiv = document.getElementById("results_process");
  let html = "<h3>상위 가격 도서:</h3><ul>";
  if (prefixedBooks.length === 0) {
    html += "<li>도서가 없습니다.</li>";
  } else {
    prefixedBooks.forEach((book) => {
      html += `<li>${book.title} - ${book.price}원</li>`;
    });
  }
  html += "</ul>";

  html += "<h3>고가 도서:</h3><ul>";
  if (highPriceBooks.length === 0) {
    html += "<li>고가 도서가 없습니다.</li>";
  } else {
    highPriceBooks.forEach((book) => {
      html += `<li>${book.title} - ${book.price}원</li>`;
    });
  }
  html += "</ul>";

  html += `<h3>총 가격:</h3><p>${totalPrice}원</p>`;
  resultsDiv.innerHTML = html;

  console.log(`[분석] 도서 총 ${books.length}권 처리됨. 고가 도서: ${highPriceBooks.length}권, 총 가격: ${totalPrice}원`);
}

// 클로저로 대여 상태 관리 >>> 이미 다 되어 있고...
const createBookRental = (bookTitle) => {
  let isBorrowed = false;
  let borrowCount = 0;
  return {
    borrow: () => {
      if (isBorrowed) {
        alert(`${bookTitle}은 이미 대여 중입니다.`);
        return false;
      }
      isBorrowed = true;
      borrowCount++;
      return true;
    },
    returnBook: () => {
      isBorrowed = false;
    },
    getStatus: () => ({
      title: bookTitle,
      isBorrowed,
      borrowCount,
    }),
  };
};

// 대여/반납 토글
function toggleRental(button) {
  const li = button.parentElement;
  const text = li.querySelector("span").textContent;
  const title = text.split(" - ")[0];

  // TODO(도전과제) : rentals에서 title과 동일한 요소 찾기
  const rental = rentals.find((r) => r.getStatus().title === title);
  if (!rental) return;

  const status = rental.getStatus();
  // TODO(도전과제) : books에서 title과 동일한 요소 찾기
  const book = books.find((b) => b.title === title);
  if (status.isBorrowed) {
    rental.returnBook();
    li.querySelector("span").textContent = `${title} - ${book.price}원 (대여 가능)`;
    console.log(`[반납] ${title} 반납 완료`);
  } else {
    if (rental.borrow()) {
      li.querySelector("span").textContent = `${title} - ${book.price}원 (대여 중)`;
      console.log(`[대여] ${title} 대여 완료 (총 ${rental.getStatus().borrowCount}회 대여됨)`);
    }
  }

  // 대여 반납 상태 갱신
  showAllRentalStatus();
}

// 모든 대여 상태 표시
function showAllRentalStatus() {
  const resultsDiv = document.getElementById("results_rentalstate");
  let html = "<h3>대여 상태:</h3><ul>";
  if (rentals.length === 0) {
    html += "<li>대여 정보가 없습니다.</li>";
  } else {
    rentals.forEach((rental) => {
      const status = rental.getStatus();
      html += `<li>${status.title}: ${status.isBorrowed ? "대여 중" : "대여 가능"}, 대여 횟수: ${status.borrowCount}</li>`;
    });
  }
  html += "</ul>";
  resultsDiv.innerHTML = html;

  console.log(`[출력] 총 ${rentals.length}권의 대여 상태 출력됨`);
}
