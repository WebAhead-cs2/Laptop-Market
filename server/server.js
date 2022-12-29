const express = require("express");
const cors = require("cors");
const db = require("./Database/connection");
const bodyParser = require("body-parser");

const server = express();

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => { console.log(`listening http://localhost:${PORT}`) })

server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }))

server.get("/AddingProducts", async (req, res) => {
    try {
        let jsond = await db.query(`SELECT * FROM products`);
        res.json(jsond.rows);

    }
    catch (err) {
        res.status(500).send(`<h1>${err}</h1>`);
    }
})
server.post("/AddingProducts", async (req, res) => {
    try {
        const { name, brand, img, color, price, model } = req.body;
        let json = await db.query(`INSERT INTO products (name, brand, img, color, price, model) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, brand, img, color, price, model])
        res.json(json.rows);

    }
    catch (err) {
        res.status(500).send(`<h1>${err}</h1>`);
    }


})
server.post("/Payment", async (req, res) => {
    try {
        const {id_number, cvv, export_date, card_number} = req.body;
        let json = await db.query(`INSERT INTO payment (id_number, cvv, export_date, card_number) VALUES ($1, $2, $3, $4) RETURNING *`, [id_number, cvv, export_date, card_number])
        res.json(json.rows);
    }
    catch (err) {
        res.status(500).send(`<h1>${err}</h1>`);
    }


})
server.get("/Payment",(req,res)=>{
res.json({
        success: false
    });
})    