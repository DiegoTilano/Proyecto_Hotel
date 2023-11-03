import { response } from "express"
import { ModeloReserva } from "../models/modeloReserva.js";

export class ControladorReservas{
    constructor(){}

    async obtenerReservas(req, res = response) {//FUNCIONA
        try {
          //1.hay que recibir datos
          //2.intentare conectarme a la base de datos
          //3.envio la respuesta
    
          const listaDeReservas = await ModeloReserva.find({ activo: true });
    
           res.status(200).json({
            estado: true,
            mensaje: "Exito Reservando",
            datos: listaDeReservas,
          });
        } catch (error) {
          console.log("ERR: ", error);
          res.status(400).json({
            estado: false,
            mensaje: "Fallo al obtener las reservas",
            datos: null,
          });
        }
      }

    async reservarHabitacion(req,res = response){//FUNCIONA
        try {
          //1.hay que recibir datos
          //2.intentare conectarme a la base de datos
          //3.envio la respuesta
          const reserva = new ModeloReserva(req.body);
          await reserva.save();
    
          res.status(200).json({
            estado: true,
            mensaje: "Exito Reservando",
            datos: req.body,
          });
        } catch (error) {
          console.log("ERR: ", error);
          res.status(400).json({
            estado: false,
            mensaje: "Fallo la Reserva",
            datos: null,
          });
        }
      }

    async reservarId(req, res = response) {//FUNCUIONA
        try {
          //1.Hay que recibir datos
          let id = req.params.id;
          //2.con el id que mando el cliente busco la habitancion en la base de datos
          //3.respondo al cliente
          const reserva = await ModeloHabitacion.findById(id);
          res.status(200).json({
            estado: true,
            mensaje: "Exito buscando la reserva por id",
            datos: reserva,
          });
        } catch (error) {
          res.status(400).json({
            estado: false,
            mensaje: "Fallamos buscando las habitaciones" + error,
            datos: null,
          });
        }
      }

   async modificarReserva(req,res = response){ //FUNCIONA 
        try {
          //1.ahi que recibir datos (SI)
          let id = req.params.id;
          let datosModificados = req.body;
          console.log('ID: ', id)
          console.log('datos modifiados', datosModificados)
    
          //2.modificar en la base de datos
          //3.enviar la respuesta
          const reservaActualizada = await ModeloReserva.findByIdAndUpdate(
            id,
            datosModificados,
            { new: true }
          );
    
          res.status(200).json({
            estado: true,
            mensaje: "Exito modificando la reserva",
            datos: reservaActualizada,
          });
        } catch (error) {
          res.status(400).json({
            estado: false,
            mensaje: "Fallamos modificando la habitacion" + error,
            datos: null,
          });
        }
      }

    async eliminarReserva(request,response){//FUNCIONA
        try {
          //.1Hay  que recibir datos (SI)
          let id = request.params.id;
          //2.eliminelo
          //3.responda
          await ModeloReserva.findByIdAndUpdate(id, { activo: false });
          response.status(200).json({
            estado: true,
            mensaje: "Se ha cancelado la reserva",
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

}