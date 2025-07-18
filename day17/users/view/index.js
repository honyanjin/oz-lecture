async function fetchUserData(userId) {
  try {
    const [user, posts] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      }),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      }),
    ]);
    return { user, posts };
  } catch (error) {
    console.error("Error:", error.message);
    throw error; // 에러를 다시 던져서 main 함수에서 처리하도록 함
  }
}

// 사용자 정보와 포스트 목록을 화면에 렌더링하는 함수
function renderUserData({ user, posts }) {
  const output = document.querySelector("#output");
  output.innerHTML = `<h2>${user.name}'s Posts</h2>`;

  const ul = document.createElement("ul");
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    ul.appendChild(li);
  });
  output.appendChild(ul);
}

function showError(message) {
  document.querySelector("#output").innerHTML = `<h2>${message}</h2>`;
}

function main() {
  const output = document.querySelector("#output");
  output.innerHTML = "<h2>Loading...</h2>";

  (async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("userId");
      if (!userId) throw new Error("No User ID provided.");

      const cacheKey = `view-${userId}`;
      const cachedData = sessionStorage.getItem(cacheKey);

      if (cachedData) {
        console.log("Data loaded from sessionStorage");
        renderUserData(JSON.parse(cachedData));
      } else {
        console.log("Data fetched from API");
        const data = await fetchUserData(userId);
        renderUserData(data);
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error:", error.message);
      showError(error.message);
    }
  })();
}

main();
