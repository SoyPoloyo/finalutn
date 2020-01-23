import { Router} from 'express';

import personajesController from '../controllers/personajesController';


class RegistroRoutes {

   public router: Router = Router();

   constructor(){

        this.config();

   }

   config():void{
       this.router.get('/', personajesController.personajes );
       this.router.get('/:id', personajesController.personaje );
       this.router.post('/', personajesController.crearPersonaje);
       this.router.put('/:id', personajesController.actualizarPersonaje);
       this.router.delete('/:id', personajesController.borrarPersonaje);
   }

}

const personajesRoutes = new RegistroRoutes();
export default personajesRoutes.router;