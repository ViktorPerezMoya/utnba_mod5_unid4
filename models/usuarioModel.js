require('dotenv').config();
var pool = require('../bd');
var md5 = require('md5');

const getUser = async (user, pass) => {
    const sql = "SELECT * FROM usuarios WHERE username = ? AND  password = ?;";
    const usuario = await pool.query(sql,[user,md5(pass)]);
    console.log(usuario);
    if(usuario != undefined){
        return (JSON.parse(JSON.stringify(usuario)))[0];
    }
    return null;
}

module.exports = { getUser }