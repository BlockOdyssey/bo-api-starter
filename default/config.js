require("dotenv").config({
    path: (function () {
        // return `../.env`; 서버 경로
        return `./.env`; // 로컬경로
    })()
});

let {NODE_ENV,PORT,TLSPORT,ORIGIN,S3_HOST,S3_BUCKET,S3_ACCESSKEYID,S3_SECRETACCESSKEY,MYSQL_HOST,MYSQL_USER,MYSQL_PASSPORT,MYSQL_PORT,MYSQL_DATABASE} = process.env
//환경
const isDev = NODE_ENV == 'development'
const isProd = NODE_ENV == 'production'
const port = PORT
const tlsPort = TLSPORT
const origin = ORIGIN

//aws
const s3_host = S3_HOST
const aws = require('aws-sdk')
const s3_bucket = S3_BUCKET
aws.config.update({
    accessKeyId: S3_ACCESSKEYID,
    secretAccessKey: S3_SECRETACCESSKEY
});
const s3 = new aws.S3()

//mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSPORT,
    port: MYSQL_PORT,
    database: MYSQL_DATABASE
});

connection.connect();

const query = (sql,values) => new Promise((resolve, reject) => {
    console.log(sql)
    connection.query(sql,values,(err,rows) => {
        err ? reject(err) : resolve(rows)
    })
})

module.exports = {
    s3,
    s3_bucket,
    s3_host,
    port,
    tlsPort,
    isDev,
    isProd,
    connection,
    query,
    origin
}