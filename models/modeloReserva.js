import mongoose, { Mongoose } from "mongoose";

const Schema = Mongoose.Schama

const Habitacion = new Schema({
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
        type:Date,
        required:true
    },
    fechaFinalReserva:{
        type:Date,
        required:true
    },
    numeroPersonas:{
        type:String,
        required:true
    }
})

export const modeloReserva = mongoose.model('habitacion',Habitacion)