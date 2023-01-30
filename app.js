const express = require('express');
const router = require('express').Router();
const mongoose  = require('mongoose');
const bodyparser =require('body-parser');
const bodyParser = require('body-parser');


const Schema = mongoose.Schema;

const app = express();

const port = process.env.port || 8080
// const authRoute = require('routes/auth-route');

mongoose.connect('mongodb://localhost:27017/plants',(err)=>{
  if(err){
    console.log("Database iss not connected ");
  }else{
    console.log("DB is connected succesfully ");
  }
});

app.use(bodyParser.urlencoded({ extended: false  }))

app.use(bodyParser.json())

// app.use('/auth', authRoute)
 app.get('/',(req, res) =>{
     res.send("welcome to thawana lk server 0")
     const router = require('express').Router()
})

 app.listen(port, ()=>{
     console.log("node server is connected", port)
 })

 router.post('/register',(req, res)=>{
    const user = new User({
      FullName:req.body.FullName,
      UserName:req.body.UserName,
      email:req.body.email,
      Phonenumber:req.body.Phonenumber,
      Password:req.body.Password,
      ConfirmPassword:req.body.ConfirmPassword,
    })
    user.save()
    .then((_)=>{
      res.json({success:true, message:"Account hac been created"})
    })
    .catch((err)=>{
      res.json({success:false, message:"Authentication faied"})
    })
  });
  
  router.post('/login',(req, res)=>{
    res.json("login work")
  })
  
  {
    module.exports =router
  }
  const userSchema = new Schema({
    FullName:{type:String},
    UserName:{type:String},
    email:{type:String, unique: true},
    Phonenumber:{type:Number},
    Password:{type:String, required:true},
    ConfirmPassword:{type:String,required:true},
    created_at:{type:Number, default:Date.now().valueOf()},
    updated_at:{type:Number, default:Date.now().valueOf()},


})

module.exports = mongoose.model('User',userSchema);
// module.exports = User;



