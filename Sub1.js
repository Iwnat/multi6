
//API 예제코드. 참고용.
fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=16aabfb75dea296dfae9b01906442545&targetDt=20230901')
    .then(response => response.json())
    .then(data => {
        // 데이터를 처리하는 코드를 여기에 추가
        console.log(data); // 가져온 데이터를 콘솔에 출력
    })
    .catch(error => {
        console.error('API 호출 오류:', error);
    });

// API를 호출하여 영화 정보를 가져오는 함수
fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=16aabfb75dea296dfae9b01906442545&targetDt=20230901')
    .then(response => response.json()) // API 응답을 JSON 형식으로 변환
    .then(data => {
        // 가져온 데이터 중 일별 박스오피스 정보를 배열로 추출
        const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList.slice(0, 3); // 처음 3개의 영화 정보만 추출

        // 영화 정보를 표시할 HTML 컨테이너 요소 선택
        const boxOfficeContainer = document.querySelector('.box-office');

        // 각 영화 정보를 순회하면서 HTML에 표시
        dailyBoxOfficeList.forEach((movie, index) => {
            const boxOfficeItem = document.createElement('div'); // 영화 정보를 담을 div 요소 생성
            boxOfficeItem.classList.add('box-office-item'); // CSS 클래스 추가

            // 영화 정보를 HTML에 삽입
            boxOfficeItem.innerHTML = `
                <img src="movie${index + 1}.jpg" alt="영화 포스터" class="box-office-poster">
                <p>${movie.movieNm}</p>
                <p>개봉일: ${movie.openDt}</p>
                <p>누적관객수: ${movie.audiAcc}</p>
            `;

            // 영화 목록 컨테이너에 영화 정보 추가
            boxOfficeContainer.appendChild(boxOfficeItem);
        });
    })
    //호출 오류 시
    .catch(error => {
        console.error('API 호출 오류:', error);
    });