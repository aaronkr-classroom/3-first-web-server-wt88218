// listing6.4.js

/**
 * listing6.4.js
 * 프로젝트 내 main.js에서 각 파일별 특정 라우티를 가지는 웹 서거 구현
 */

const sendErrorResp = () => {
  // 에러 핸들링 함수 생성
};

http
  .createServer(() => {
    let url = req.url; // url 변수에 요청 URL 저장

    // URL에 파일 확장자가 있는지 확인
    if (url.indexOf(".html") !== -1) { //
      // 요청 콘텐츠 유형의 지정
      // 파일을 읽어들이기 위한 readFile의 호출
    } else if (url.indexOf(".js") !== -1) {
    } else if (url.indexOf(".css") !== -1) {
    } else if (url.indexOf(".png") !== -1) {
    } else {
      sendErrorResp(res);
    }
  })
  .listen();

console.log();

// 이름으로 요청된 파일 찾기
const customReadFile = (file_path, res) => {
  // 파일이 존재하는지 확인
};

/**
 * 이제 여러분의 애플리케이션은 존재하지 않는 파일에 대한 대응을 할 수 있게 됐다.
 */
