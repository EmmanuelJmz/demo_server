const db = require('./db/connection');
const axios = require('axios');

const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const name = ["Max", "Lucy", "Luna", "Estrella", "Milanesa", "Pastor", "Canela", "Mora", "Kitty", "Bob"]
const type = ["Dog", "Cat", "Ant", "Shark", "Elephant", "Tiger", "Lion", "Tortuge", "Fish", "Dolphin"]
const breed = ["Idk", "Je", "Ja", "Cost", "Bby", "Bae", "XD", "Alfa", "Bad", "Bunny"]
const owner_id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const createClient = () => {
//     axios.get('https://randomuser.me/api/')
//         .then((response) => {
//             const { name } = response.data.results[0];
//             const sql = `INSERT INTO clients (name,last_name, created_at) VALUES ('${name.first}','${name.last}', '2024-02-01 19:07:41')`;
//             db.query(sql, (err, result) => {
//                 if (err) throw err;
//                 console.log('Cliente creado!');
//                 /*const sql = `INSERT INTO logs (description, time_stamp) VALUES ('Cliente creado', NOW())`;
//                 db.query(sql, (err, result) => {
//                     if (err) throw err;
//                     console.log('Log creado!');
//                 });*/
//             });
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

const createPet = () => {
    const sql = `INSERT INTO pets (name,type, breed, owner_id, created_at) VALUES ('${name[(Math.floor(Math.random() * id.length))]}', '${type[(Math.floor(Math.random() * id.length))]}','${breed[(Math.floor(Math.random() * id.length))]}', '${owner_id[(Math.floor(Math.random() * id.length))]}', '2024-02-01 19:07:41')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Mascota creada!');
        /*const sql = `INSERT INTO logs (description, time_stamp) VALUES ('Cliente creado', NOW())`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('Log creado!');
        });*/
    });
}

setInterval(createPet,5000);