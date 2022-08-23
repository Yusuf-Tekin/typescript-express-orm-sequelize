import { DataTypes, Model } from "sequelize";
import City from "../Entity/Concrete/City";
import {sequelize} from '../config/db/Connect'
City.init(
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Name",
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "CountryCode",
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "district",
    },
    population: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "Population",
    },
  },
  {
    sequelize,
    tableName: "City",
    timestamps: false,
  }
);
