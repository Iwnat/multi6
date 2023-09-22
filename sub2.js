function fetchMovies() {
  const KEY = "63963d0c691029be0863c9839473b6d4";
  const itemPerPage = "&itemPerPage=5";

  const loadingElement = document.createElement("h2");
  loadingElement.textContent = "영화 정보";
  document.getElementById("Info").appendChild(loadingElement);

  fetch(
    `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${KEY}&targetDt=${itemPerPage}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
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

        const directorsElement = document.createElement("p");
        directorsElement.textContent = `영화 감독 : (${Info.directors})`;

        movieElement.appendChild(movieTitleElement);
        movieElement.appendChild(movieNmElement);
        movieElement.appendChild(directorsElement);

        moviesContainer.appendChild(movieElement);
      });

      // 지우기
      const loadingElement = document.querySelector("h2");
      loadingElement.parentNode.removeChild(loadingElement);

      // 결과를 Info 요소에 추가
      document.getElementById("Info").appendChild(moviesContainer);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// fetchMovies 함수 호출
fetchMovies();
