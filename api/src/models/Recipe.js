const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
                return  sequelize.define('recipe', {
                          id: {
                            type: DataTypes.UUID,//genera numero random de letras y nums
                            defaultValue: DataTypes.UUIDV4(),//es un datatype  de sequelize
                            allowNull: false,
                            primaryKey: true,
                            
                          },

                          name: {
                            type: DataTypes.STRING,
                            allowNull: false,
                            unique: true
                          },

                          summary: {
                            type: DataTypes.STRING,
                            allowNull: false
                          },

                          spoonacularScore: {
                            type: DataTypes.INTEGER,
                            allowNull: false
                          },

                          healthScore: {
                            type: DataTypes.INTEGER,
                            allowNull: false
                          },

                          analyzedInstructions: {
                            type: DataTypes.STRING,
                            allowNull: false
                          },

                          image: {
                            type: DataTypes.STRING,
                            allowNull: false
                          },
                          
                          createdInDb: {
                            type: DataTypes.BOOLEAN,
                            allowNull: false,
                            defaultValue: true,
                        }
                  }
            );
        };