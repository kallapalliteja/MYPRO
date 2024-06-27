const Eventdata =require('../models/eventform1');

//add product 
const Addeventdata1 = async(req, res, next)=>{
  const eventpic=(req.file)? req.file.filename:null
  console.log(req.file)
  const {eventname,Startdate,Noofdays,Month,Year,Noofparticipants} =req.body
  const even = new Eventdata({
    eventname,
    Startdate,
    Noofdays,
    Month,
    Year,
    Noofparticipants,
    eventpic     
    })
  try{
      let eventsdata = even.save()//for saving the data into the database
      return res.status(200).json({ message: 'event successfully',eventsdata });
  }catch(err){
         return res.status(200).json({message:"not uploaded"})
  }      
}
const Geteventdata1 = async(req,res,next)=>{
  console.log("getting data")
  let eventsdata; 
try{
    eventsdata=await Eventdata.find({});
    console.log("events" + " " + eventsdata);
    if(!eventsdata){
      return res.status(204).json({message:"no data found."})
  }
  return res.status(200).json(eventsdata)
}catch(err){
    console.log(err);
}
}
//To Delete the data
const Deleteeventformdata1 = async (req, res, next) => {
  //const eventId = req.params.id;
  console.log(req.params.id)
  Eventdata.findByIdAndDelete(req.params.id)
  .then(res => {
      res.send("deleted")
  })
  .catch(err => { 
      res.send("not deleted")
  })
}
//     //edit
const Geteventdata2 = async (req, res, next)=>{
      const _id = req.params.id
      let eventdata;
      try{
          eventdata= await Eventdata.findById({_id});
          console.log(eventdata)
      }catch(err){
          return console.log(err)
      }
      if(!eventdata){
          return res.status(400).json({message:"No event Found."})
      }
      return res.status(201).json({eventdata})
   }

//      // update form by id
   const Updateeventformdata1 = async (req, res, next)=>{
      const _id = req.params.id
      const {eventname,Startdata,Noofdays,Month,Year,Noofparticipants} = req.body.formdata;
      let studdata;
      try{
          studdata = await Eventdata.findByIdAndUpdate(_id,{
             eventname,
             Startdata,
             Noofdays,
             Month,
             Year,
             Noofparticipants
          });
      }catch(err){
          return console.log(err)
      }
      if(!studdata){
          return res.status(400).json({message:"Unable to update the users."})
      }
      return res.status(200).json({studdata})
   }





exports.Addeventdata1 = Addeventdata1;
exports.Geteventdata1=Geteventdata1;
exports.Deleteeventformdata1=Deleteeventformdata1;
exports.Geteventdata2=Geteventdata2;
exports.Updateeventformdata1=Updateeventformdata1;