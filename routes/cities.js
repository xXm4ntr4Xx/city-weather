import express from 'express';


import {
  createCity,
  deleteCity,
  getCities,
  getCity,
  updateCity,
} from '../controllers/cities.js';

const router = express.Router();

const  cityList =[];

router.post("/cities",(req,res) => {
  cityList.push(req.body);
  console.log(cityList)
  res.sendStatus(200);
})

// get all the cities
router.get('/', getCities);
//create new city
router.post('/', createCity);
// get the city by id
router.get('/:id', getCity);
//delete a city
router.delete('/:id', deleteCity);
//update a city
router.patch('/:id', updateCity);

export default router;