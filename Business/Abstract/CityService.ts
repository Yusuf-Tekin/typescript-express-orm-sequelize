
import City from './../../Entity/Concrete/City';

export interface CityService {


        getAllCities(pagination:number):Promise<City[]>;
        getCity(id:Number):Promise<City>;
        getCityByName(name:string):Promise<City>;
        deleteCity(id:Number):Promise<Number>;

}