import express from "express";
import { startDB, sequelize } from "./src/config/database.js";
import { assistantModel } from "./src/models/asistentemodel.js";
import { familiarmodel } from "./src/models/familiarmodel.js";

const app = express();
const PORT = 3000;

//para que entienda el formato json
app.use(express.json());

//configuración de las rutas

app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo en el puerto ${PORT}`)});
