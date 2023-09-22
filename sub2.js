const key = "?key=63963d0c691029be0863c9839473b6d4";
const itemPerPage = "&itemPerPage=20";
const url =
  "http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json" +
  key +
  itemPerPage;

const title = document.getElementById("Info");

fetch(url)
  .then((response) => response.json())
  .then((msg) => {
    console.log(msg);
    for (let i = 0; i < 20; i++) {
      let div = document.createElement("div");
      let low_div = document.createElement("div");
      let title_div = document.createElement("div");

      let mp = document.createElement("p");
      mp.id = "movieNm";
      let dp = document.createElement("p");
      dp.id = "directors";
      let op = document.createElement("p");
      op.id = "openDt";

      title_div.id = "title_div";
      low_div.id = "low_div";
      div.id = "movies";

      short_url = msg.movieListResult.movieList[i];
      console.log(short_url);

      div.appendChild(title_div);
      div.appendChild(low_div);
      title.appendChild(div);

      let movieNm = document.createTextNode(short_url.movieNm);
      let directors = document.createTextNode(short_url.directors);
      let openDt = document.createTextNode(short_url.openDt);

      mp.appendChild(movieNm);
      dp.appendChild(directors);
      op.appendChild(openDt);

      title_div.appendChild(mp);
      low_div.appendChild(dp);
      low_div.appendChild(op);
    }
  });
