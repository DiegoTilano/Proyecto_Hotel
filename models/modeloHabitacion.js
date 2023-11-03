import mongoose from "mongoose";
const Schema=mongoose.Schema;
const Habitacion=new Schema({
    activo: {
        type:Boolean,
        required: true
    },
    nombre:{
        type: String,
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

export const ModeloHabitacion=mongoose.model('Habitaciones',Habitacion)