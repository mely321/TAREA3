//Importando el uuid para generar codigos unicos
const{v4:uudiv4}=require('uuid');

class Tarea{
    id='';
    desc='';
    CompletadoEn=null;
    constructor(desc){
        this.id=uudiv4();
        this.desc=desc;
    }

}

module.exports=Tarea;