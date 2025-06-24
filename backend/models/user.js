'use strict'
module.exports = ( sequelize, DataTypes ) => {
    const User = sequelize.define('Users', {
        id : DataTypes.INT,
        nombre : DataTypes.STRING,
        email : DataTypes.STRING,
        contrasenia : DataTypes.STRING,
        role : DataTypes.STRING
    }, {
        tableName : 'usuarios',
        timestamp : false
    });
    return User;
}