

import { ICity } from "../Abstract/ICity";
import {DataType, Table,Model,Column,PrimaryKey,AutoIncrement,NotNull} from 'sequelize-typescript'
import { Optional } from "sequelize";
import { CityType } from "../../Types/CityType";


interface CityCreationAttr extends Optional<CityType, 'id'> {}



@Table({
	timestamps:false,
	tableName:'city',
})
class City extends Model<CityType,CityCreationAttr> implements ICity {



	@PrimaryKey
	@AutoIncrement
	@Column(DataType.NUMBER)
    id:number;

	@Column(DataType.STRING)
    name:string;

	@Column(DataType.STRING)
    countryCode:string;


	@Column(DataType.STRING)
	district:string;


	@Column(DataType.NUMBER)
	population:number;

	get getId():Number {
		return this.getDataValue("id");
	}

	set setId(id:number) {
		this.setDataValue("id",id);
	}

	get getName():String {
		return this.getDataValue("name");
	}

	set setName(name:string) {
		this.setDataValue("name",name);
	}

	get getCountryCode():String {
		return this.getDataValue("countryCode");
	}

	set setCountryCode(countryCode:string) {
		this.setDataValue("countryCode",countryCode);
	}

	get getDistrict():String {
		return this.getDataValue("district");
	}

	set setDistrict(district:string) {
		this.setDataValue("district",district);
	}

	get getPopulation():Number {
		return this.getDataValue("population");
	}

	set setPopulation(population:number) {
		this.setDataValue("population",population);
	}

}

export default City;