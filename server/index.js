const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


app.use(cors({
  origin: ["http://localhost:3000", "https://driving-analysis.vercel.app"],
  credentials: true,
}));
app.use(express.json());
require('dotenv').config();


const source = process.env.ATLAS_CONNECTION;
const PORT = process.env.PORT || 4000

mongoose.connect(source, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//This is a listener that simply listens to the above connect function
const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
});

const dataRoutes = require('./controllers/data.controller')
app.use('/api/send', dataRoutes);

app.get("/", cors(), (req, res) => {
    res.send("hello world")
});


app.set('view engine', 'ejs');

app.listen(PORT, () =>{
    console.log(`Successfully served on port: ${PORT}.`);
});