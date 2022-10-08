var express = require('express');
var userLogin = require('../uservalidation/login')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
let user = req.session.user



  let products=[
    {
      name : "Sony",
      category : "SPEAKER",
      price :20000,
      Image:"https://images.pexels.com/photos/12021852/pexels-photo-12021852.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      name : "T&G",
      category : "SPEAKER",
      price:50000,
      Image:"https://images.pexels.com/photos/4171746/pexels-photo-4171746.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      name : "T&j",
      category : "SPEAKER",
      price:4000,
      Image:"https://images.pexels.com/photos/4171748/pexels-photo-4171748.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      name : "MARSHALL",
      category : "SPEAKER",
      price:35000,
      Image:"https://images.pexels.com/photos/4468812/pexels-photo-4468812.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      name : "MARSHALL",
      category : "SPEAKER",
      price:35000,
      Image:"https://images.unsplash.com/photo-1639385054611-53f34c9297d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fG1hcnNoYWxsJTIwc3BlYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name : "MARSHALL",
      category : "SPEAKER",
      price:35000,
      Image:"https://images.unsplash.com/photo-1466232373731-46205f0b668e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyc2hhbGwlMjBzcGVha2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    
  ]
  res.render('index',{products,login:user});
});

router.get('/login',(req,res)=>{
  if(req.session.loggedIn){
    res.redirect('/')
  }else{
  res.render('user/login',{loginErr:req.session.loginErr})
  req.session.loginErr=false;
  }
})

router.post('/login',(req,res)=>{
userLogin.doLogin(req.body).then((response)=>{
  if(response.status){
    req.session.loggedIn=true;
    req.session.user = response.user;
   
    res.redirect('/');
  }else{
    req.session.loginErr = true;
    res.redirect('/login');
  }
})
})



router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect("/login");
})


 
module.exports = router;



