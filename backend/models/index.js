import { Sequelize, DataTypes } from "sequelize";
import { User } from './user.js';
import { News } from './news.js';
import { Team } from './team.js';
import { Client } from "./client.js";
import  config  from '../config/config.json' assert {type : 'json' };

const configDb = config.development;

const sequelize = new Sequelize(configDb.database, configDb.username, configDb.password, {
   host: configDb.host,
   dialect: configDb.dialect
});


const UserModel = User(sequelize, DataTypes);
const NewsModel = News(sequelize, DataTypes);
const TeamModel = Team(sequelize, DataTypes);
const ClientModel = Client(sequelize, DataTypes);


export {
    sequelize,
    UserModel,
    NewsModel,
    TeamModel,
    ClientModel
}