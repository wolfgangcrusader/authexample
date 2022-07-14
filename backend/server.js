const express = require('express');
const cors = require('cors');
const auth = require('./routes/auth');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());


//end-points
app.use(auth)


app.listen(4000, console.log("listening on PORT 4000"));