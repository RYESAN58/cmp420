import express from 'express'
import mysql from "mysql"
import cors from 'cors'


const app = express();
app.use(express.json());
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


app.get("/instructors", (req , res)=>{
  const q = "SELECT * FROM instructor"
  db.query(q,(err, data)=> {
    if (err) return res.json(err)
    return res.json(data)
  })
})


app.post('/add', (req, res) => {
  const q = `INSERT INTO cmpsci.instructor (emplid, address, major, DOB, email, phone, name, firstname, lastname, mintial, employment_recordsid ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const { emplid, address, major, DOB, email, phone, name, firstname, lastname, mintial } = req.body;
  const employment_recordsid = 333333

  db.query(q, [emplid, address, major, DOB, email, phone, name, firstname, lastname, mintial, employment_recordsid], (err, result)=> {
    if (err){
      console.error(err);
      res.status(500).send("Failed to add instructor");
    }else{
      res.status(200).send("instructor added successfully");
      console.log("added")
    }
  })
})


app.listen(8800, () =>{
  console.log("connected to backend");
})