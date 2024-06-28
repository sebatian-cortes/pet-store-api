import { Router } from 'express';
import { AuthController } from './controller'; // 1
import { AuthDataSourceImpl, AuthRepositoryImpl } from '../../infraestructure';


export class AuthRoutes {


    static get routes(): Router {
  
      const router = Router();

      const datasource = new AuthDataSourceImpl(); //6
      const AuthRepository = new AuthRepositoryImpl(datasource); //7
      const controller = new AuthController(AuthRepository); // 2 // 8 actulizacion
  
        /**
         * Post track
         * @openapi
         * /api/auth/login:
         *    post:
         *      tags:
         *        - users
         *      summary: "Logear usuario"
         *      description: Este endpoint permite a un usuario logearse en la aplicacion
         *      requestBody:
         *        content:
         *          application/json:
         *            
         *      responses:
         *        '200':
         *          description: Retorna un json con un mensaje de ingreso a login.
         *        '400':
         *           description: Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.
         *        '401': 
         *          description: Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.
         *        '403':
         *          description: El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.
         *        '404':
         *          description: El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.
         *        '500':
         *          description: El servidor ha encontrado una situación que no sabe cómo manejarla.
         *        '501':
         *          description: El método solicitado no está soportado por el servidor y no puede ser manejado.
         *        '502':
         *          description: Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.
         */
        router.post('/login', controller.loginUser)
        /**
         * Post track
         * @openapi
         * /api/auth/register:
         *    post:
         *      tags:
         *        - users
         *      summary: "Registrar usuario"
         *      description: Este endpoint permite registrar a un nuevo usuario en la aplicacion
         *      requestBody:
         *        content:
         *          application/json:
         *            schema:
         *              $ref: "#/components/schemas/user"
         *      responses:
         *        '200':
         *          description: Retorna un json con los datos que se ingresaron y la contraseña hasheada.
         *        '400':
         *           description: Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.
         *        '401': 
         *          description: Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.
         *        '403':
         *          description: El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.
         *        '404':
         *          description: El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.
         *        '500':
         *          description: El servidor ha encontrado una situación que no sabe cómo manejarla.
         *        '501':
         *          description: El método solicitado no está soportado por el servidor y no puede ser manejado.
         *        '502':
         *          description: Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.
         *           
         *      
         */

        router.post('/register', controller.registerUser) 
  
  
        return router;
    }
  
  }