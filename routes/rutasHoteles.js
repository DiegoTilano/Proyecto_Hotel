//espacio para definir las rutas 
//o endpoinst especificos de su API

import  express  from 'express';
//importo los controladores
import { ControladorHabitacion } from '../controller/ControladorHabitacion.js'
import { ControladorReservas } from '../controller/ControladorReservas.js'

let controladorHabitacion = new ControladorHabitacion()
let controladorReservas = new ControladorReservas()

export let rutasAPI = express.Router()

//Aca pones tus endpoinst
rutasAPI.post('/api/habitaciones',controladorHabitacion.registrar)

rutasAPI.get('/api/habitaciones',controladorHabitacion.buscarTodas)

rutasAPI.get('/api/habitacion/:id', controladorHabitacion.buscarId)
  
rutasAPI.put('/api/habitaciones/:id', controladorHabitacion.modificar)

rutasAPI.delete('/api/habitaciones/:id', controladorHabitacion.eliminar)

//Reservas

rutasAPI.post('/api/reservas', controladorReservas.reservarHabitacion)

rutasAPI.get('/api/reservas', controladorReservas.reservarId)

rutasAPI.get('/api/reservas/:id', controladorReservas.reservarId )
  
rutasAPI.put('/api/reservas/:id',controladorReservas.modificarReserva )

rutasAPI.delete('/api/reservas/:id',controladorReservas.eliminarReserva )


