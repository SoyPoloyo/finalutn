import { Router} from 'express';

import  registroController  from '../controllers/registroController';

class RegistroRoutes {

   public router: Router = Router();

   constructor(){

        this.config();

   }

   config():void{

       this.router.get('/', registroController.usuarios);
       this.router.get('/:id', registroController.usuario );
       this.router.post('/', registroController.crearUsuario);
       this.router.put('/:id', registroController.actualizarUsuario);
       this.router.delete('/:id', registroController.borrarUsuario);
   }

}

const registroRoutes = new RegistroRoutes();
export default registroRoutes.router;