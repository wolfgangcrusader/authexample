const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const database = require("../database.js");

router.post("/teachersignup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const saltedpass = bcryptjs.genSalt(10, password);
  const hashedpass = bcryptjs.hashSync(saltedpass, 10);
  let databasequery = `INSERT INTO teachers (email, password) VALUES (?, ?)`;
  database.query(databasequery, [email, hashedpass], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(result);
      res.sendStatus(200);
    }
  });
});

router.post("/studentsignup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const saltedpass = bcryptjs.genSalt(10, password);
  const hashedpass = bcryptjs.hashSync(saltedpass, 10);
  let databasequery = `INSERT INTO students (email, password) VALUES (?, ?)`;
  database.query(databasequery, [email, hashedpass], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(result);
      res.sendStatus(200);
    }
  });
});

//DETERMINING ROLE IN SINGLE ENDPOINT//


router.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const saltedpass = bcryptjs.genSalt(10, password);
    const hashedpass = bcryptjs.hashSync(saltedpass, 10);

    if (role === 'teacher'){
        let databasequery = `INSERT INTO teachers (email, password) VALUES (?, ?)`;
        database.query(databasequery, [email, hashedpass], (err, result) => {
            if (err) {
              console.log(err);
              res.sendStatus(500);
            } else {
              console.log(result);
              res.sendStatus(200);
            }
      
        });
    } else if (role === 'student'){
        let databasequery = `INSERT INTO students (email, password) VALUES (?, ?)`;
        database.query(databasequery, [email, hashedpass], (err, result) => {
            if (err) {
              console.log(err);
              res.sendStatus(500);
            } else {
              console.log(result);
              res.sendStatus(200);
            }
          });
        } else {
            console.log('unknown role')
        }
    })
   
    
//LOGIN QUERY//

router.post("/login", (req, res) => {
  const email = req.body.email;
  const plainTextPassword = req.body.password;

  database.query(
    "SELECT * FROM teachers WHERE email = ?",
    [email],
    (err, result) => {
      if (result.length === 0){
      res.send(404);
      console.log(email);}
      const isPasswordCorrect = bcryptjs.compareSync(
        plainTextPassword,
        result[0].password
      );

      if (isPasswordCorrect) {
        res.status(200).send(result);
        console.log(result);
      } else if (err) {
        res.send(err);
      }
    }
  );
});

module.exports = router;