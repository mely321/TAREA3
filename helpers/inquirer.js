const inquirer = require('inquirer');
require ('colors');

//Envio de la informacion automatica
const preguntas=[
    {
        type:'list',
        name:'opcion',
        message:'¿Que desea hacer: ?',
        choices:[
            //'opt1', 'opt2','opt3'
            {
                value:'1',
                name:`${'1'.green} Crear tarea`
            },
            {
                value:'2',
                name:`${'2'.green} Listar tarea`
            },
            {
                value:'3',
                name:`${'3'.green} Listar tareas completadas`
            },
            {
                value:'4',
                name:`${'4'.green} Listar tareas pendientes`
            },
            {
                value:'5',
                name:`${'5'.green} Completar tarea(s)`
            },
            {
                value:'6',
                name:`${'6'.green} Borrar tareas`
            },
            {
                value:'0',
                name:`${'0'.green} Salir`
            }
        ]
    }
];


const inquirerMenu=async()=>{
        console.clear();
        console.log("=============".green);
        console.log("Seleccione una opcion: ".white);
        console.log("=============".green);
        const {opcion} = await inquirer.prompt(preguntas);
        return opcion;

}
const pausa=async()=>{
    const question=[
        {
            type:'input',
            name:'enter',
            message:`Presione ${'enter'.green}para continuar`
        }
    ];
    console.log("\n");
    await inquirer.prompt(question);
    
}

const leerInput = async(message)=>{
    const question=[
        {
            type:'input',//Valor de entrada
            name:'desc',
            message,//mensaje
            validate(value){
                if(value.length==0)
                    return "Por favor ingrese un valor: "
                    return true;
            }
        }
    ];
    //Aplicamos la desestructuracion
    const {desc}=await inquirer.prompt(question);
    return desc;
}
module.exports={
    inquirerMenu,
    pausa,
    leerInput
}