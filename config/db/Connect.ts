


import {Sequelize} from 'sequelize-typescript'
import City from '../../Entity/Concrete/City';


const sequelize = new Sequelize({
    username:'root',
    password:"123456",
    host:'localhost',
    database:'world',
    dialectOptions: {

    },
    dialect:'mysql',
    storage:':memory:',
    models: [City],
    query: {
        raw:true
    }
});


export default sequelize;

