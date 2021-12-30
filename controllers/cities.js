//dependencies that allow to create random id
import { v4 as uuid } from 'uuid';

let cities = [{city: 'Milan', country: 'Italy', region: 'Lombardia', temperature: 4, skyCondition: 'Fog'}];

//get the array with all the cities
export const getCities = (req, res) => {
    console.log(`Cities in the database: ${cities}`);

    res.send(cities);
}
//create a new city and push the random id dependencies inside every new city
export const createCity = (req, res) => {   
    const city = req.body;

    cities.push({ id: uuid(),...city});
    
    res.send(city);
};
// get city by id
export const getCity = (req, res) => {
    let cityID = req.params.id;
    let city = cities.find((city)=>city.id === cityID)
    res.send(city)
};

export const deleteCity = (req, res) => { 
    //filter method to keep the city if id is equal
    cities = cities.filter((city) => city.id !== req.params.id);
    res.send(`city  have been succesfully deleted`);
};

export const updateCity =  (req,res) => {
    //select the object with the right id
    const city = cities.find((city) => city.id === req.params.id);
    //list of object parameter
    city.city = req.body.city;
    city.country = req.body.country;
    city.region = req.body.region;
    city.temperature = req.body.temperature;
    city.skyCondition = req.body.skyCondition;

    res.send(city);
};