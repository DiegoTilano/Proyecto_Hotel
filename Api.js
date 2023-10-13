//Esta clase representa un servidor 

import  express  from 'express'
import { rutasAPI } from "./routes/rutasHoteles.js"

export class Api{

    constructor(){
        this.app = express()
        this.procesarPeticiones()

    }

    //1.Levantar el servidor
    levantarServidor(){
        this.app.listen(3000,function(){
            console.log("servidor operando")
        })
    }
    
    //2.Atiende las peticiones y responde
    procesarPeticiones(){
        this.app.use("/",rutasAPI)
        this.app.use(express.json())

    }

    //3.Se conecto a la base de datos 



}