// listing5.5.js
// listing5.6.js

/**
 * listing5.6.js
 * 간단한 가우팅 (p. 97)
 */

// 요청에 따른 라우트의 매핑 정의
const routeRespMap = {
    "/":"<h1>Home Page</h1><p>Welcome to my page!</P>",
    "/about":"<h1>About Page</h1><p>About ME!</P>",
    "/info":"<h1>Info Page</h1><p>Personal Info!</P>",
    "/contact":"<h1>Contact Page</h1><p>Contact Me!</P>",
};
// listing5.5.js에서 (p. 96)
const port = 3000, 
    http = require('http'),
    httpStatus = require('http-status-codes'),
    app = http.createServer();

    app.on("request", (req, res) => {
        res.writeHead(httpStatus.OK, {
            "content-Type": "text/html",
            
        });
        // 요청 라우트가 정의된 맵에 있는지 체크
        if(routeRespMap[req.url]){ // "/about"
            setTimeout(() => {
                res.end(routeRespMap[req.url]);
            }, 2000 ); // 2초

        } else{
            setTimeout(() =>{

                res.end("<h1>404</h1><p>Where are you</p>");
            }, 1000);
        }
    });
if (process.env.NODE_ENV !== 'test'){
    app.listen(port);
    console.log(`Server at: http://localhost:${port}`);
}


// listing5.7.js에서 (p. 98)
// 수동으로 응답에 지연을 걸기 위한 코드 감싸기
// setTimeout(() => res.end(routeRespMap[req.url]), 2000); 
// list5.6 res.end() 코드를 이 줄로 대체하여 서버 처리 지연을 시뮬레이트하십시오.
