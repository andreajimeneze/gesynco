'use strict'
export const Client = (sequelize, DataTypes) => {
    const Client = sequelize.define('Clients', {
        nombre: DataTypes.STRING,
        actividad_economica: DataTypes.STRING,
        direccion: DataTypes.STRING,
        locality: DataTypes.STRING,
        telefono: DataTypes.STRING,
        email: DataTypes.STRING,
        logo: DataTypes.STRING
    }, {
        tableName: 'clientes',
        timestamps: false
    })
    return Client;
}