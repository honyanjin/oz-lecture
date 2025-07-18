// detail.js (포스트 상세 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 상세 정보 표시
async function displayPostDetail() {
  const postDetailContainer = document.getElementById("post-detail");
  postDetailContainer.innerHTML = "<p>Loading post...</p>";

  try {
    // URL에서 postId 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");
    if (!postId) throw new Error("No post ID provided");

    // localStorage에서 캐시 확인
    const cacheKey = `post_${postId}`;
    const cachedData = localStorage.getItem(cacheKey);
    const cacheDuration = 5 * 60 * 1000; // 5분 (밀리초 단위)

    if (cachedData) {
      const { post, timestamp } = JSON.parse(cachedData);
      // 캐시가 유효하면 캐시된 데이터를 사용
      if (Date.now() - timestamp < cacheDuration) {
        console.log("Post loaded from localStorage");
        renderPost(post);
        return;
      }
    }

    // 캐시가 없거나 만료되었으면 API를 통해 데이터 fetch
    console.log("Post fetched from API");
    const response = await fetch(`${apiUrl}/posts/${postId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post. Status: ${response.status}`);
    }
    const post = await response.json();

    // 새로운 데이터를 타임스탬프와 함께 캐시에 저장
    const dataToCache = { post, timestamp: Date.now() };
    localStorage.setItem(cacheKey, JSON.stringify(dataToCache));

    renderPost(post);
  } catch (error) {
    console.error("Error:", error.message);
    postDetailContainer.innerHTML = "<p>Error loading post details. Please try again later.</p>";
  }
}

// 포스트 렌더링 함수
function renderPost(post) {
  const postDetail = document.getElementById("post-detail");
  postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
