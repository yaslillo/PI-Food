        const { DataTypes } = require('sequelize');

        module.exports = sequelize => {
                sequelize.define('diet', {

                    id:{
                        type: DataTypes.UUID,
                        allowNull: false,
                        defaultValue: DataTypes.UUIDV4,
                        primaryKey: true,
                        },
                        name: {
                            type: DataTypes.STRING,
                            allowNull: false,
                        },
                    },
                    
                        {
                        
                        timestamps:false
                        
                        }
                    );
                }

                