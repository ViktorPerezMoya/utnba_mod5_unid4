const pool = require('../bd');
const md5 = require('md5');

const getAll = async () => {
    const sql = "SELECT * FROM mascotas";
    const mascotas = await pool.query(sql);
    console.log(mascotas);
    if(mascotas != undefined){
        return (JSON.parse(JSON.stringify(mascotas)));
    }
    return [];
}

module.exports = { getAll }