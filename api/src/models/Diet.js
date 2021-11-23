const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports =  (sequelize) => {
    // defino el modelo
                return sequelize.define('diet', {
                    id: {
                        type: DataTypes.UUID,
                        defaultValue: DataTypes.UUIDV4,
                        primaryKey: true,
                    },

                    name: {
                        type: DataTypes.STRING,
                        allowNull: true,
                    },

                }
                
            );
                
        };