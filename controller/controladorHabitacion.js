export class ControladorHabitacion{
    constructor(){}

    buscarTodas(request,response){
        try{
            //1.hay que recibir datos
            //2.intentare conectarme a la base de datos
            //3.envio la respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las habitaciones",
                "datos":"ACA VAN LOS DATOS DE CONSULTADOS EN LA BASE DE DATOS"
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando las habitaciones",
                "datos":null
            })
        }
    }

    buscarId(request,response){
        try{
            //1.Hay que recibir datos
            let id=request.params.id
            //2.con el id que mando el cliente busco la habitancion en la base de datos
            //3.respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la habitacion",
                "datos":"ACA VAN LOS DATOS DE CONSULTADOS EN LA BASE DE DATOS"
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando las habitaciones"+error,
                "datos":null
            })
        }
    }

    modificar(request,response){
        try{
            //1.ahi que recibir datos (SI)
            let id=request.params.id
            let datosModificar=request.body
            //2.modificar en la base de datos
            //3.enviar la respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la habitacion",
                "datos":null
            })
            
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos modificando la habitacion"+error,
                "datos":null
            })
        }
    }

    registrar(request,response){
        try{
            //1.hay que recibir datos (SI)
            let datosRegistrado=request.body
            //2.guardelos en la base de datos
            //3.responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito regitrando la habitacion",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos guardando la habitacion"+error,
                "datos":null
            })
        }
    }

    eliminar(request,response){
        try{
            //.1Hay  que recibir datos (SI)
            let id=request.params.id
            //2.eliminelo
            //3.responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito borrando la habitacion",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos eliminando la habitacion"+error,
                "datos":null
            })
        }
    }

}