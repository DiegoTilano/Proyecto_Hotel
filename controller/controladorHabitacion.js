import { response } from "express"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
import { ModeloHabitacion } from "../models/modeloHabitacion.js"

export class ControladorHabitacion {
    constructor() { }

    async buscarTodas(req, res = response) {//FUNCIONA
        try {
            //1.hay que recibir datos
            //2.intentare conectarme a la base de datos
            //3.envio la respuesta
            const listaDeHabitaciones = await ModeloHabitacion.find();
    
           res.status(200).json({
            estado: true,
            mensaje: "Exito buscando todas las habitaciones",
            datos: listaDeHabitaciones,
          });
        } catch (error) {
            console.log("ERR: ", error);
          res.status(400).json({
            estado: false,
            mensaje: "Fallo al buscar todas las habitaciones",
            datos: null,
          });
        }
    }

    async buscarId(req, res = response) {//FUNCIONA
        try {
            let id = req.params.id;
            console.log('ID: ', id)
            //2.con el id que mando el cliente busco la habitancion en la base de datos
            //3.respondo al cliente
            const Habitacionid = await ModeloHabitacion.findById(id);
            res.status(200).json({
              estado: true,
              mensaje: "Exito buscando la reserva por id",
              datos: Habitacionid,
            });
          } catch (error) {
            console.log("ERR: ", error)
            res.status(400).json({
              estado: false,
              mensaje: "Fallamos buscando la habitaciones por id " + error,
              datos: null,
            });
          }
    }

    async modificar(req,res = response) {//FUNCIONA
        try {
            let id = req.params.id;
          let datosModificados = req.body;
          console.log('ID: ', id)
          console.log('datos modifiados', datosModificados)
    
          //2.modificar en la base de datos
          //3.enviar la respuesta
          const habitacionActualizada = await ModeloHabitacion.findByIdAndUpdate(
            id,
            datosModificados,
            { new: true }
          );
    
          res.status(200).json({
            estado: true,
            mensaje: "Exito modificando la habitacion",
            datos: habitacionActualizada,
          });
        } catch (error) {
          res.status(400).json({
            estado: false,
            mensaje: "Fallamos modificando la habitacion" + error,
            datos: null,
          });
        }
    }

    async registrar(req, res = response) {//FUNCIONA
        try {
            //1.hay que recibir datos (SI)
            let datosRegistrado = req.body
            //2.guardelos en la base de datos
            //3.responda
            const Habitacion = new ModeloHabitacion(datosRegistrado);
            await Habitacion.save();
            res.status(200).json({
                estado: true,
                mensaje: "Exito Registrando",
                datos: datosRegistrado,
            });
        } catch (error) {
            console.log("ERR: ", error);
            res.status(400).json({
                estado: false,
                mensaje: "Fallo la Registrada",
                datos: null,
            });
        }
    }

    async eliminar(request,response) {
        try {
            //.1Hay  que recibir datos (SI)
            let id = request.params.id;
            //2.eliminelo
            //3.responda
            await ModeloHabitacion.findByIdAndUpdate(id, { activo: false });
            response.status(200).json({
              estado: true,
              mensaje: "Se ha cancelado la habitacion",
              datos: null,
            });
          } catch (error) {
            response.status(400).json({
              estado: false,
              mensaje: "Fallamos eliminando la habitacion" + error,
              datos: null,
            });
          }

    }
    async reactivarHabitacion(request,response) {
        try {
            //.1Hay  que recibir datos (SI)
            let id = request.params.id;
            //2.eliminelo
            //3.responda
            await ModeloHabitacion.findByIdAndUpdate(id, { activo: true });
            response.status(200).json({
              estado: true,
              mensaje: "Se ha recuperado la habitacion",
              datos: null,
            });
          } catch (error) {
            response.status(400).json({
              estado: false,
              mensaje: "Fallamos recuperando la habitacion" + error,
              datos: null,
            });
          }

    }
}






