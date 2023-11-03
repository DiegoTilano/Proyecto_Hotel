import {ModeloHabitacion} from "../models/modeloHabitacion.js"
export class ServicioHabitacion{
 
    constructor(){}

    async buscarTodas(){
        let habitaciones = await ModeloHabitacion.find()
        return habitaciones
    }
    async buscarId(id){
        let habitacion = await ModeloHabitacion.findById(id)
        return habitacion
    }
    async modificar(id,datos){
        return await ModeloHabitacion.findByIdAndUpdate(id.datos)
    }
    async registrar(datos){
        let habitacionNueva = new ModeloHabitacion(datos)
        return await habitacionNueva.save()
    }
    async eliminar(id){
        const cancelarReserva = await ModeloHabitacion.findByIdAndUpdate(
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