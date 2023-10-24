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

    }

}