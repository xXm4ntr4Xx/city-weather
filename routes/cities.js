import express from "express";

const router = express.Router();

import { getCities, createCity, getCity, deleteCity, updateCity } from '../controllers/cities.js';

//get all the cities
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