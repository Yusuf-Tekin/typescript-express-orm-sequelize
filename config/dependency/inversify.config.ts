
import {Container} from 'inversify'
import { CityDal } from '../../DataAccess/Concrete/CityDal';
import { CityService } from './../../Business/Abstract/CityService';
import { CityManager } from './../../Business/Concrete/CityManager';
import { CityTypes } from './../../Types/CityDependencyTypes';
import { ICityDal } from './../../DataAccess/Abstract/ICityDal';

const container = new Container();


container.bind<CityService>(CityTypes.CityService).to(CityManager);
container.bind<ICityDal>(CityTypes.CityDal).to(CityDal);


export {container};