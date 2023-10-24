import mongoose, { Mongoose } from "mongoose";

const Schema = Mongoose.Schama

const Habitacion = new Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precioNoche:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion = mongoose.model('habitaciones',Habitacion)