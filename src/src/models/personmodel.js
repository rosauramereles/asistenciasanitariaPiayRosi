import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const personModel = sequelize.define("Person", {
    // Aquí puedes agregar campos generales si los necesitas (ej: dni, telefono, etc.)
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    dni: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true,
    }
});

