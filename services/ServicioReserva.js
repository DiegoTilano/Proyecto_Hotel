class ServicioHabitacion{

    constructor(){}

    async reservarHabitacion(){
        let reservas = await modeloHabitacion.find()
        return reservas
    }
    async reservarId(id){
        let reserva = await modeloHabitacion.find(id)
        return reserva
    }
    async modificarReserva(id,datos){
        return await modeloReserva.findByIdAndUpdate(id.datos)
    }
    async registrarHabitacion(datos){
        let habitacionReservas = new modeloHabitacion(datos)
        return await habitacionReservas.save()
    }
    async eliminarReserva(id){
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