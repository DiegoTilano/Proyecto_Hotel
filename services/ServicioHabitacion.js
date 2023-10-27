import {modeloHabitacion} from "../models/modeloHabitacion.js"
export class ServicioHabitacion{
 
    constructor(){}

    async buscarTodas(){
        let habitaciones = await modeloHabitacion.find()
        return habitaciones
    }
    async buscarId(id){
        let habitacion = await modeloHabitacion.findById(id)
        return habitacion
    }
    async modificar(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id.datos)
    }
    async registrar(datos){
        let habitacionNueva = new modeloHabitacion(datos)
        return await habitacionNueva.save()
    }
    async eliminar(id){
        const cancelarReserva = await modeloHabitacion.findByIdAndUpdate(
            {_id: id}, //busca el objeto por el ID
            {$set: { activo: false } }, //actualiza la reserva del estado activo a falso
            (err, resultado) => { //resultado muestra informacion del objeto antes de actualizar
                if(err) {   //controlar algun error al actualizar el estado
                    console.log('Error al intentar eliminar la reserva:', err)
                    client.close()
                    return;
                }
                client.close()
                return 'se ha eliminado exitosamente'

            }
        )
    }

}