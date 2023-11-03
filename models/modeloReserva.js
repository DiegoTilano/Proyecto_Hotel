import {Schema, model} from "mongoose";


const Habitacion =  Schema({
    activo: {
        type:Boolean,
        required: true
    },
    nombreCliente:{
        type:String,
        required:true
    },
    apellidoCliente:{
        type:String,
        required:true
    },
    telefonoCliente:{
        type:Number,
        required:true
    },
    fechaInicioReserva:{
        type:String,
        required:true
    },
    fechaFinalReserva:{
        type:String,
        required:true
    },
    numeroPersonas:{
        type:String,
        required:true
    }
})
export const ModeloReserva = model('Habitacion',Habitacion)