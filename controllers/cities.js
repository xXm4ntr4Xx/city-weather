//dependencies that allow to create random id
import { v4 as uuid } from 'uuid';



//list of cities
let cities = [
    {id:uuid(), city: 'Milan', country: 'Italy', region: 'Lombardia', temperature: 4, skyCondition: 'Fog'},
    {id:uuid(),city: 'London', country: 'United Kingdom', region: 'City of London, Greater London', temperature: 14, skyCondition: 'Overcast'},
    {id:uuid(),city: 'Madrid', country: 'Spain', region: 'Madrid', temperature: 9, skyCondition: 'Clear'},
    {id:uuid(),city: 'Berlin', country: 'Germany', region: 'Berlin', temperature: 12, skyCondition: 'Light rain'},
    {id:uuid(),city: 'Moscow', country: 'Russia', region: 'Moscow City', temperature: -4, skyCondition: 'Light snow showers'},
    {id:uuid(),city: 'Paris', country: 'France', region: 'Ile-de-France', temperature: 12, skyCondition: 'Partly cloudy'},
    {id:uuid(),city: 'Vienna', country: 'Austria', region: 'Wien', temperature: 13, skyCondition: 'Partly cloudy'}

];

//get the array with all the cities
export const getCities = (req, res) => {
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