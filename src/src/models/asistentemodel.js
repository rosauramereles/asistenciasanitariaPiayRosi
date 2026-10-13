import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const assistantModel = sequelize.define("Assistant", {
    name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    },
    password: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
},);

//sistantModel.belongsTo(PersonModel, { foreignKey: "person_id", as:"owner" });

//rsonModel.hasOne(assistantModel, { foreignKey: "person_id", as: "user"});