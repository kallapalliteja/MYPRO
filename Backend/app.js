const express = require('express'); 
const mongoose = require('mongoose') 
const UserRouter = require('./src/routes/userRoutes');
const EventRouter = require('./src/routes/eventRoutes');
const EventformRouter = require('./src/routes/eventformRoutes');
const Eventform1Router = require('./src/routes/eventform1Routes');
const app=express(); 
const cors = require("cors");
const bodyParser = require("body-parser"); 
app.use(cors());
app.use(bodyParser.json()); 
//Routes 
app.use('/',UserRouter); 
app.use('/',EventRouter);
app.use('/',EventformRouter);
app.use('/',Eventform1Router);
app.use('/images',express.static('public/images'))
mongoose.connect('mongodb+srv://lakshmipavani9248:77VJpdPqVwc4dzIt@cluster0.etcdx9i.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
.then(() => app.listen(5000)) 
.then(() => 
console.log("Connected to Database & Listening to localhost 5000") 
) 
.catch((err) => console.log(err));