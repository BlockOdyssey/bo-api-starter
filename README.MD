# express-boiler-plate

:smiley: Express를 위한 Boiler Plate입니다. :smiley:

## Project Installation


### 전역으로 설치
<pre><code> $ sudo npm install -g bo-api-starter </code></pre>

### 전역으로 설치된 패키지를 실행하여 프로젝트 생성
<pre><code> $ npx bo-api-starter "project-name" </code></pre>

## Project Features

-   **Server** : [Express](https://expressjs.com/, "expressjs")
-   **Database** : [MySQL](https://github.com/mysqljs/mysql#readme, "mysql")
-   **Session** : [express-session](https://github.com/expressjs/session#readme, "express-session"), [session-file-store](https://github.com/valery-barysok/session-file-store, "session-file-store")
-   **URL + Responses** : [node-fetch](https://github.com/node-fetch/node-fetch, "node-fetch")
-   **HTTP Status** : [http-status-codes](https://github.com/prettymuchbryce/http-status-codes#readme, "http-status-codes")
-   **AWS SDK** : [aws-sdk](https://github.com/aws/aws-sdk-js, "aws-sdk")
-   **Environment Variables** : [dotenv](https://github.com/motdotla/dotenv#readme, "dotenv")
-   **Only Development** : [nodemon](https://nodemon.io/, "nodemon")

## Usage and Getting Started

### Install Dependencies

 <pre><code> $ cd projectname

 $ npm install 
</code></pre>

### Project Environment Setup

-   .env.example 파일을 복사하여 .env 파일을 생성
-   config.js 파일에서 .env 파일의 경로를 수정
-   /bin/www 파일에서
    -   상용일 경우 PORT를 3000, 3001로 변경
    -   개발일 경우 PORT를 4000, 4001로 변경
-   nodemon 사용할 경우
    -   package.json에서 수정  
         <code> "scripts": { "start": "nodemon ./bin/www"}</code>

### Run

 <pre><code>$ npm start </code></pre>

## Project Flow

### 1. app.js

    session 설정, 미들웨어 추가, 라우트 추가

### 2. middleware

    앱과 웹 미들웨어 설정

### 3. routes

    앱과 웹 router(request, response) 작성

### 4. service

    Business Logic 작성

### 5. query

    SQL Query 작성

## Project Structure

```
.
├── README.MD
├── app.js
├── bin                     # 실행파일
│   └── www
├── certkey                 # SSL 인증서
│   ├── cert.crt
│   └── key.key
├── config.js               # MySQL, AWS, 환경변수 설정
├── middleware              # Middleware
│   ├── app
│   │   └── mw.js
│   └── web
│       └── mw.js
├── package-lock.json
├── package.json
├── public
│   └── stylesheets
│       └── style.css
├── query                   # SQL Query
│   └── users.js
├── routes
│   ├── app
│   │   ├── index.js
│   │   └── users.js
│   └── web
│       ├── index.js
│       └── users.js
├── service                 # Business Logic
    ├── index.js
    └── users
        └── findUser.js

```
