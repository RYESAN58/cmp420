import express from 'express'
import mysql from "mysql"
import cors from 'cors'


const app = express();
app.use(cors())
const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:'root',
  database:'cmpsci'
})


app.get("/", (req, res)=> {
  res.json("hello this is the backend")
})


app.get("/students", (req , res)=>{
  const q = "SELECT * FROM student"
  db.query(q,(err, data)=> {
    if (err) return res.json(err)
    return res.json(data)
  })
})


app.post('/add', (req, res) => {
  const q  = "insert into student";
})


app.listen(8800, () =>{
  console.log("connected to backend");
})