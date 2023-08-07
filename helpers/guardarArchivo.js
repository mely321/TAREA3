const fs = require('fs');

const guardarBD = (data) => {

    const archivo ="./db/data.json";
    fs.writeFileSync(archivo, JSON.stringify(data));
}
 
const leerDB = () => {
    //Verificamos si existe el archivo
    if(!fs.existsSync(archivo)){
        return null;
    } 
    const info =fs.readFileSync(archivo, {encoding:'utf-8'});
    console.log(info);
    return null;
}

//No olvidarse de la exportacion
module.exports={
    guardarBD,
    leerDB
}