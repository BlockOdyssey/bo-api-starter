# bo-api-starter

:smiley: 블록오디세이에 맞춘 Express Api Starter입니다. :smiley:  
:bangbang: [프로젝트 설치 방법](https://github.com/BlockOdyssey/bo-api-starter#project-installation, "project-installation") & [사용 설명서](https://github.com/BlockOdyssey/bo-api-starter#usage-and-getting-started, "usage") :bangbang:

## Project Features

-   **Server** : [Express](https://expressjs.com/, "expressjs")
-   **Database** : [MySQL](https://github.com/mysqljs/mysql#readme, "mysql")
-   **Session** : [express-session](https://github.com/expressjs/session#readme, "express-session"), [session-file-store](https://github.com/valery-barysok/session-file-store, "session-file-store")
-   **URL + Responses** : [node-fetch](https://github.com/node-fetch/node-fetch, "node-fetch")
-   **HTTP Status** : [http-status-codes](https://github.com/prettymuchbryce/http-status-codes#readme, "http-status-codes")
-   **AWS SDK** : [aws-sdk](https://github.com/aws/aws-sdk-js, "aws-sdk")
-   **Environment Variables** : [dotenv](https://github.com/motdotla/dotenv#readme, "dotenv")
-   **Only Development** : [nodemon](https://nodemon.io/, "nodemon")

## Project Installation

<pre><code> $ npx bo-api-starter projectname </code></pre>

:fire: `npm i bo-api-starter` 명령어를 사용하면 프로젝트가 정상적으로 설치되지 않습니다. :fire:

## Usage and Getting Started

### Install Dependencies

 <pre><code> $ cd projectname

 $ npm install 
</code></pre>

### Project Environment Setup

1. .env.example 파일을 복사하여 .env 파일을 생성

<pre><code>// example을 실제 값으로 변경 
MYSQL_USER=example   
MYSQL_DATABASE=example
S3_BUCKET=example
S3_ACCESSKEYID=EXAMPLE
</code></pre>

2. config.js 파일에서 .env 파일의 경로를 수정

<pre><code>require("dotenv").config({
    path: (function () {
        // return `../.env`; 서버 경로
        return `./.env`; // 로컬 경로
    })()
});
</code></pre>

3. /bin/www 파일에서

    - 상용일 경우 PORT를 3000, 3001로 변경
    - 개발일 경우 PORT를 4000, 4001로 변경

4. nodemon 사용할 경우

    - package.json에서 수정

    <pre><code>"scripts": {
        "start": "nodemon ./bin/www"
    }</code></pre>

### Project Run

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
