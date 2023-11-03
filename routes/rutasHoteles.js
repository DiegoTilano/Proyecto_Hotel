//espacio para definir las rutas 
//o endpoinst especificos de su API

import  express  from 'express';
//importo los controladores
import { ControladorHabitacion } from '../controller/controladorHabitacion.js'
import { ControladorReservas } from '../controller/ControladorReservas.js'

let controladorHabitacion = new ControladorHabitacion()
let controladorReservas = new ControladorReservas()

export let rutasAPI = express.Router()

//Aca pones tus endpoinst
rutasAPI.post('/api/habitaciones',controladorHabitacion.registrar)//LISTO

rutasAPI.get('/api/habitaciones',controladorHabitacion.buscarTodas)//FUNCIONA

rutasAPI.get('/api/habitacion/:id', controladorHabitacion.buscarId)//FUNCIONA
  
rutasAPI.put('/api/habitaciones/:id', controladorHabitacion.modificar)//FUNCIONA

//rutasAPI.put('/api/activarHabitacion/:id', controladorHabitacion.reactivarHabitacion)

rutasAPI.delete('/api/habitaciones/:id', controladorHabitacion.eliminar)

//Reservas

rutasAPI.post('/api/reservas', controladorReservas.reservarHabitacion)

rutasAPI.get('/api/reservas', controladorReservas.obtenerReservas)

rutasAPI.get('/api/reservas/:id', controladorReservas.reservarId )
  
rutasAPI.put('/api/reservas/:id',controladorReservas.modificarReserva )

rutasAPI.delete('/api/reservas/:id',controladorReservas.eliminarReserva )


