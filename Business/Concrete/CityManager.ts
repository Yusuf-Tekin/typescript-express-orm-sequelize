import { inject, injectable } from 'inversify';
import { CityDal } from '../../DataAccess/Concrete/CityDal';
import City from '../../Entity/Concrete/City';
import { CityTypes } from '../../Types/CityDependencyTypes';
import { CityService } from './../Abstract/CityService';


@injectable()
export class CityManager implements CityService {

    private cityDal:CityDal;

    constructor(@inject(CityTypes.CityDal) cityDal:CityDal) {
        this.cityDal = cityDal;
    }

    getCity(id: number): Promise<City> {
        return this.cityDal.getCity(id);
    }

    getCityByName(name: string): Promise<City> {
        return this.cityDal.getCityByName(name);
    }


    getAllCities(pagination:number): Promise<City[]> {
        return this.cityDal.getAllCities(pagination);
    }

    deleteCity(id: number): Promise<Number> {
        return this.cityDal.deleteCity(id);
    }

}