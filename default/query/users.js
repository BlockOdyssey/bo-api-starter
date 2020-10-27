const {query} = require('../config');

const TABLE_NAME = "TB_UI_USER";

const find = (obj) => {
    let sql = `
        SELECT 
            * 
        FROM 
            ${TABLE_NAME} 
        WHERE 
            user_email = '${obj.email}';
    `

    console.log(sql)

    return query(sql);
}


module.exports = {
    find
}