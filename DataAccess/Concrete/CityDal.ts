import { injectable } from "inversify";
import City from "../../Entity/Concrete/City";
import { ICityDal } from "../Abstract/ICityDal";

@injectable()
export class CityDal implements ICityDal {



  async getCity(id: number): Promise<City> {
    const city = await City.findOne({
      where: {
        id: id
      }
    })

    return city;
  }


  async getCityByName(name: string): Promise<City> {
    const city = await City.findOne({
      where: {
        name: name
      }
    })

    return city;
  }



  async getAllCities(pagination?:number):Promise<City[]> {

        const cities = await City.findAll({
            limit:10,
            offset: pagination > 1 ? (pagination - 1) * 10 : 0
        });
        const city:City[] = cities;


        return city;
  }

  async deleteCity(id: number):Promise<Number> {

      const result = await City.destroy({
        where: {
          id: id
        }
      })

      return result;
  }

}
