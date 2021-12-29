import express from 'express';
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main Page' });
});

router.get("/cities",(req, res,)=>{
  res.json({ 
    succes:true,
    message:"all cities",
    payload: citiesArray
  })
})

export default router;
