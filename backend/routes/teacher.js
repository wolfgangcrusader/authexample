const express = require('express');
const router = express.Router();
const db = require('../database');

//Gets a list of teachers for the navbar
router.get('/avatar/:teacher_id', (req, res) => {
    const teacher_id = req.params.teacher_id //will eventually be user 
    console.log(teacher_id)
    db.query('SELECT profile_pic FROM teachers WHERE teacher_id = ?', [teacher_id], (err, result) => {
        res.status(200)
        res.send(result)
        console.log(result)
    
    })
})


module.exports = router;