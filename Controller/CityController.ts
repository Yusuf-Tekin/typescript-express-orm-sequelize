import { NextFunction, Response } from "express";
import { inject } from "inversify";
import {
  controller,
  httpGet,
  queryParam,
  httpPost,
  requestBody,
  requestParam,
  httpDelete,
  next,
  response,
} from "inversify-express-utils";
import { CityService } from "../Business/Abstract/CityService";
import { CityTypes } from "./../Types/CityDependencyTypes";
import { CustomError } from "../Core/Error/CustomError";
import { NotFoundCityError } from "../Core/Error/NotFoundCityError";

@controller("/api/city")
export class CityController {
  private cityService: CityService;

  constructor(@inject(CityTypes.CityService) cityService: CityService) {
    this.cityService = cityService;
  }

  // @request() req:Request<{},{},{},RequestAllCitiesQueryTypes>,@response() res:Response,@next() next:NextFunction
  @httpGet("/allCities")
  public async getAllCities(@queryParam("pagination") pagination: number) {
    const cities = await this.cityService.getAllCities(pagination);

    return {
      pagination: pagination ? Number(pagination) : null,
      data: cities,
    };
  }

  @httpGet("/get/:id")
  public async getCity(@requestParam("id") id: Number, @next() next) {
    const city = await this.cityService.getCity(id);

    if (!city) {
      return next(new NotFoundCityError());
    }

    return city;
  }

  @httpGet("/get")
  public async getCityByName(@queryParam("name") name:string,@next() next) {
    const city = await this.cityService.getCityByName(name);
    if(!city) {
        return next(new NotFoundCityError());
    }
    return city;
  }

  @httpDelete("/delete") // TODO: ERR_HTTP_HEADERS_SENT Error
  public deleteCity(@queryParam("id") id: Number, @next() next:NextFunction) {
    this.cityService.deleteCity(id).then(result => {
        if (result === 0) {
            throw new NotFoundCityError();
        }
        else {
            return {
                message: "Şehir başarılı bir şekilde silindi",
                success: true,
            };
        }
    }).catch(next);
   }
}
