const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define(
        'recipe',
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            resume: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            score: {
                type: DataTypes.INTEGER,
            },
            healthylevel: {
                type: DataTypes.INTEGER,
            },
            stepbystep: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            image: {
                type: DataTypes.STRING,
            },

            createdInDb: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
        },
        { timestamps: false }
    );
};
