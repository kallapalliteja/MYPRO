const express =require('express');
const Router = express.Router();
const Eventform1Controller =require("../controllers/Eventform1Controller")
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
const upload = multer({ storage: storage })

Router.post('/eventform1',upload.single("myfile"),Eventform1Controller.Addeventdata1)
Router.get('/getevent',upload.single("myfile"),Eventform1Controller.Geteventdata1)
Router.delete('/deleteevent/:id',Eventform1Controller.Deleteeventformdata1)
Router.get('/geteventbyid/:id',upload.single("myfile"),Eventform1Controller.Geteventdata2)
Router.put('/updateevent/:id',upload.single("myfile"),Eventform1Controller.Updateeventformdata1)
module.exports= Router;