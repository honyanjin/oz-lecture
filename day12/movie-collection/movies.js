// 3개 이상의 영화정보 하드코딩한걸 객체로 생성
const Superman = { title: "Superman", director: "James Gunn", year: 2025, genre: "SuperHero" };
const TheDarkKnight = { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, genre: "SuperHero" };
const Inception = { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Science Fiction" };
const Leon = { title: "Leon ", director: "Luc Besson", year: 1994, genre: "Noir" };
const Movie = {}; // 빈 거~~

// 나중에 추가할거 하드코딩
const Parasite = { title: "Parasite", director: "Bong Joon-ho", year: 2019, genre: "Thriller" };
const Gladiator = { title: "Gladiator", director: "Ridley Scott", year: 2000, genre: "Historical Drama" };
const SpiderMan = { title: "Spider-Man: No Way Home", director: "Jon Watts", year: 2021, genre: "SuperHero" };

// 배열에 저장
const ArrayMovies = [];
ArrayMovies.push(Superman, TheDarkKnight, Inception, Leon, Movie);

// 빈값 기본값 설정 함수
function SetDefaultValue(i, movies) {
  if (!movies[i].title || movies[i].title.trim() === "") movies[i].title = "Unknown Title";
  if (!movies[i].director || movies[i].director.trim() === "") movies[i].director = "Unknown Director";
  if (!movies[i].year || isNaN(movies[i].year)) movies[i].year = "Unknown Year";
  if (!movies[i].genre || movies[i].genre.trim() === "") movies[i].genre = "Unknown Genre";
}

// 빈값 기본값 설정 반복 반복함수
function SetDefaultValueRepeat(movies) {
  for (let i = 0; i < movies.length; i++) {
    SetDefaultValue(i, movies);
  }
}

// 출력함수
function ConsoleMovieInfo(i, movies) {
  console.log(
    `movie Collection : \n ${i + 1}. Title : ${movies[i].title}, Director : ${movies[i].director}, Year : ${movies[i].year}, Genre : ${
      movies[i].genre
    } `
  );
}

// 출력반복함수
function ConsoleMovieInfoRepeat(movies) {
  for (let i = 0; i < movies.length; i++) {
    ConsoleMovieInfo(i, movies);
  }
}

// 장르별 영화 검색 함수
function searchByGenre(movies, genre) {
  const foundMovies = []; // 일단 여기다 추린거 넣자.
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (!movie) continue;
    // 반복문으로 속성 순회하며 장르 확인
    for (const key in movie) {
      if (key === "genre" && movie[key].toLowerCase() === genre.toLowerCase()) {
        foundMovies.push(movie);
        break;
      }
    }
  }
  return foundMovies; // 리턴해
}

// 장르검색기능
function Search_Genre(genre) {
  let foundMovies = searchByGenre(ArrayMovies, genre);
  if (foundMovies.length === 0) {
    console.log(`No movies found for genre: ${genre}.`);
  } else {
    console.log(`${genre} Movies:`);
    for (let i = 0; i < foundMovies.length; i++) {
      const m = foundMovies[i];
      console.log(`${i + 1}. Title: ${m.title}, Director: ${m.director}, Year: ${m.year}, Genre: ${m.genre}`);
    }
  }
}

// 평균 출판 년도 계산 함수
const calculateAverageYear = function (movies) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < movies.length; i++) {
    const year = movies[i].year;
    if (typeof year === "number" && !isNaN(year)) {
      sum += year;
      count++;
    }
  }
  if (count === 0) return "No valid years found.";
  const avgYear = sum / count;
  console.log(`Average Year: ${avgYear}`);
};

// 가장 최신영화 찾기
const findNewestMovie = (movies) => {
  let newestMovie = null;
  let newestYear = -Infinity;

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie && typeof movie.year === "number" && !isNaN(movie.year)) {
      if (movie.year > newestYear) {
        newestYear = movie.year;
        newestMovie = movie;
      }
    }
  }

  if (!newestMovie) {
    console.log("No valid movies found.");
    return null;
  }

  console.log(`Newest Movie: ${newestMovie.title} (${newestMovie.year})`);
  return newestMovie;
};

// 여러 영화 객체를 ...rest로 받아서 한번에 배열에 추가
function addMovies(...newMovies) {
  ArrayMovies.push(...newMovies);
}

// 프로그램 실행
SetDefaultValueRepeat(ArrayMovies); // 기본값 세팅
console.log("===== 전체 영화 정보 =====");
ConsoleMovieInfoRepeat(ArrayMovies); // 전체 영화 정보 출력
console.log("===== SuperHero 장르 검색 =====");
Search_Genre("SuperHero"); // 슈퍼히어로 장르 검색 >>> 2개 나오면 되고
console.log("===== Horror 장르 검색 =====");
Search_Genre("Horror"); // 공포 장르 검색 >>> 없는거 테스트용
console.log("===== 평균 출판년도 =====");
calculateAverageYear(ArrayMovies); // 평균 출판년도
console.log("===== 가장 최신영화 =====");
findNewestMovie(ArrayMovies); // 최신영화

// 츠가 테스트
addMovies(Parasite, Gladiator, SpiderMan);

console.log("===== 추가후 전체 영화 정보 =====");
ConsoleMovieInfoRepeat(ArrayMovies); // 전체 영화 정보 출력
