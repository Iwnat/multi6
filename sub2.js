function fetchMovies() {
  const KEY = "63963d0c691029be0863c9839473b6d4";
  const itemPerPage = "&itemPerPage=3";

  const loadingElement = document.createElement("h2");
  loadingElement.textContent = "영화 정보";
  document.getElementById("Info").appendChild(loadingElement);

  fetch(
    `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${KEY}&targetDt=${itemPerPage}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then((json) => {
      const movies = json.movieListResult.movieList;

      const moviesContainer = document.createElement("div");

      movies.forEach((Info) => {
        const movieElement = document.createElement("div");

        const movieTitleElement = document.createElement("h3");
        movieTitleElement.textContent = Info.movieNm;

        const movieNmElement = document.createElement("p");
        movieNmElement.textContent = `영화 제목 : ${Info.movieNm}`;

        const genreAltElement = document.createElement("p");
        genreAltElement.textContent = `영화 장르 : (${Info.genreAlt})`;

        const nationAltElement = document.createElement("p");
        nationAltElement.textContent = `제작 국가 : ${Info.nationAlt}`;

        movieElement.appendChild(movieTitleElement);
        movieElement.appendChild(movieNmElement);
        movieElement.appendChild(genreAltElement);
        movieElement.appendChild(nationAltElement);

        moviesContainer.appendChild(movieElement);
      });

      // 지우기
      const loadingElement = document.querySelector("h2");
      loadingElement.parentNode.removeChild(loadingElement);

      // 결과를 Info 요소에 추가
      document.getElementById("Info").appendChild(moviesContainer);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// fetchMovies 함수 호출
fetchMovies();
