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
  const q = `INSERT INTO cmpsci.instructor (emplid ,email, address, firstname, lastname, phone, teaching_interest, research_interest, date_of_hire, courses_taught, offfice_location ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  console.log(req.body)
  const { emplid ,email, address, firstname, lastname, phone, teaching_interest, research_interest, date_of_hire, courses_taught, offfice_location } = req.body;

  db.query(q, [emplid ,email, address, firstname, lastname, phone, teaching_interest, research_interest, date_of_hire, courses_taught, offfice_location], (err, result)=> {
    if (err){
      console.error(err);
      res.status(500).send("Failed to add instructor");
    }else{
      res.status(200).send("instructor added successfully");
      console.log("added")
    }
  })
})


app.delete("/instructors/:id", (req,res)=>{
  const instructorId = req.params.id;
  const q = "DELETE FROM `cmpsci`.`instructor` WHERE (`emplid` = ?)"

  db.query(q,[instructorId], (err, data)=>{
    if(err) return res.json(err);
    return res.json("DELETED")
  })
})


app.listen(8800, () =>{
  console.log("connected to backend");
})