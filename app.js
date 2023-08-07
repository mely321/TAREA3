require ('colors');
console.clear();

const { guardarBD } = require('./helpers/guardarArchivo');
//importacion de nuestros paquetes
//const{mostrarMenu, pausa}=require('./helpers/mensajes');
const{inquirerMenu,
    pausa,
    leerInput}=require('./helpers/inquirer');
//Vamos a llamar a tarea y tareas
//const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


//async funcion asicrona

const main = async()=>{
    let opt = "";
    const tareas = new Tareas();//Instantacion
    //const tareasDB = leerDB();
    /*
    if(tareaDB)
        //Establecer las tareas
    */
    await pausa();
    do{
        //await = esperamos que nos mande algo
        opt=await inquirerMenu();
        switch (opt) {
            case '1':
                //Crear opcion
                const desc=await leerInput('Descripcion: ');
                tareas.crearTarea(desc);//Esto nos permitira adicionar tareas 
            break;
            case '2':
                console.log(tareas.listadoArr);
            break;
            case '3':
                
            break;
        }
        await pausa();
        guardarBD(tareas.listadoArr);//Para guardar la base de datos en todo momento
    }while(opt!=='0');
    //pausa();
}

main();