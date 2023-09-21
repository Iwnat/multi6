

//API 예제코드. 참고용.
fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c9776e6d5501b10d93aacdd59ef42f55
')
    .then(response => response.json())
    .then(data => {
        // 데이터를 처리하는 코드를 여기에 추가합니다.
        console.log(data); // 가져온 데이터를 콘솔에 출력
    })
    .catch(error => {
        console.error('API 호출 오류:', error);
    });