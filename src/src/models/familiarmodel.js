import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { assistantModel } from "./asistentemodel.js";

export const familiarModel = sequelize.define("Family", {
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
    // esto seria person_id pero como no tenemos una tabla de personas, lo vamos a llamar asistente_id
   relation_type: { // Ej: Padre, Madre, Hijo, Tutor, etc.
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    asistente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Assistants", // Nombre de la tabla en la base de datos
            key: "id",
        }
    }
    });
// Definimos la relación entre Asistente y Familiar
assistantModel.hasMany(familiarmodel, { foreignKey: "asistente_id", as: "familiares" });
familiarModel.belongsTo(assistantModel, { foreignKey: "asistente_id", as: "asistente" });


//sistantModel.belongsTo(PersonModel, { foreignKey: "person_id", as:"owner" });

//rsonModel.hasOne(assistantModel, { foreignKey: "person_id", as: "user