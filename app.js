import express from "express";
import { startDB, sequelize } from "./src/config/database.js";
import { assistantModel} from "./src/src/models/asistentemodel.js";
import { familiarmodel } from "./src/models/familiarmodel.js";
import { personModel } from "./src/src/models/personmodel.js";

const app = express();
const PORT = 3000;

//para que entienda el formato json
app.use(express.json());

//configuración de las rutas

app.listen(PORT, async () => {
    try {
        await startDB();
        
        // Sincronizamos los modelos aquí adentro para que se ejecute al encender
        await sequelize.sync({ alter: true });
        console.log("¡Tablas sincronizadas correctamente con XAMPP!");
        
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    } catch (error) {
        console.error("Error al iniciar el servidor o sincronizar la BD:", error);
    }
});