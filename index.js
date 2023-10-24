import{Api} from './Api.js'
import 'dotenv/config'


let servidor = new Api() //creando un objeto de la case api

//levantar servidor
servidor.levantarServidor()