
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

            // 영화 포스터 이미지를 생성하고 소스 링크를 지정
            const posterImage = new Image();
            posterImage.src = getPosterImageUrl(index); // 포스터 이미지의 URL을 얻어옴

            // 포스터 이미지 크기 조절
            posterImage.width = 400;
            posterImage.height = 450;

            // 영화 정보를 HTML에 삽입
            boxOfficeItem.appendChild(posterImage); // 포스터 이미지를 div에 추가
            boxOfficeItem.innerHTML += `
                <p>${movie.movieNm}</p>
                <p>개봉일: ${movie.openDt}</p>
                <p>누적관객수: ${movie.audiAcc}</p>
            `;

            // 영화 목록 컨테이너에 영화 정보 추가
            boxOfficeContainer.appendChild(boxOfficeItem);
        });
    })
    // 호출 오류 시
    .catch(error => {
        console.error('API 호출 오류:', error);
    });
    //포스터 이미지 url을 반환
    function getPosterImageUrl(index) {
        if (index === 0) return 'https://i.namu.wiki/i/AYscuugbnggk_YEJNoUmUhA54XpjqN-15pofG4iPMgZ7TshHLwIYAjLHU_FJno3Vl--Hm10DhSP4G-Wi62nSnTHw9le1llD2dV8gaMWsrcSPbwOm_PjPy3pRcsUBNUS3x7Z9gggoC4mVg6I3ajp5jw.webp';
        else if (index === 1) return 'https://i.namu.wiki/i/yNFrYYz1-t0euokuORmcMoCfcJUVhBFM6vAkSaclEhGgyE6uW05tgQx0J-jTpefStSGV8lS9p6GM8YsCoQuPvQDkwsuQ7JEuUI-wYV5zAVcqUeixQcEEMczOU3fSG7raWz6xONVYT9Gb-XSVAKQ1Qg.webp';
        else if (index === 2) return 'https://i.namu.wiki/i/C04tZwepetwhxJAHEH79D1Lig6TOsQQqc-d_yiQtBQwqnMUMRGRWPVJDdJDgjzV2Ai_zZT__t2g6CUMvVjh9sQ7HFY66vs9p59GSiBtXSlJqpj3V3L5H70KI1LHJQEXe6AbJO0pqmkefKmGr78hFOw.webp';
    }
