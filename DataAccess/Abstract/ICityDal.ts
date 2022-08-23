import City from "../../Entity/Concrete/City";



export interface ICityDal {


    getAllCities(pagination?:number): Promise<City[]>;

    getCity(id:Number): Promise<City>;
    getCityByName(name:String): Promise<City>;

    deleteCity(id:Number):Promise<Number>;


}