import { Router} from 'express';

import misionesController from '../controllers/misionesController';


class MisionesRoutes {

   public router: Router = Router();

   constructor(){

        this.config();

   }

   config():void{
       this.router.get('/', misionesController.misiones );
       this.router.get('/:id', misionesController.mision );
       this.router.post('/', misionesController.crearMision);
       this.router.put('/:id', misionesController.actualizarMision);
       this.router.delete('/:id', misionesController.borrarMision);
   }

}

const misionesRoutes = new MisionesRoutes();
export default misionesRoutes.router;