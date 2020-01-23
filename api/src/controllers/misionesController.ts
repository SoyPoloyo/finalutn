import {Request, Response} from 'express';

import pool from '../database';

class MisionesController{

   public async misiones (req :Request , res: Response) {
        console.log('todos las misiones');
        const misiones = await pool.query('SELECT * FROM misiones');
        res.json(misiones);
        
    } 

    public async mision (req :Request , res: Response): Promise <any> {

        const { id } = req.params;
        const misiones =  await pool.query('SELECT * FROM misiones WHERE id = ?', [id]);
      if(misiones.length > 0){
          return res.json(misiones[0]);
      }
      res.status(404).json({ text: ' Esta mision no existe'});
    } 

    public async crearMision (req: Request , res:Response): Promise <void> {

      await  pool.query('INSERT INTO misiones set ?', [req.body]);
        res.json({ message: 'mision guardada ' });
            
    }

    public async actualizarMision (req: Request , res:Response): Promise <void>{
        const {id} = req.params;
        await  pool.query('UPDATE misiones set ?  WHERE id = ?', [req.body, id]);
        res.json({ message: 'mision actualizada' });
    }


    public async borrarMision (req: Request , res:Response): Promise <void>{
        const {id} = req.params;
        await  pool.query('DELETE FROM misiones WHERE id = ?', [id]);
        res.json({ message: 'mision eliminada ' });
    }


}

const misionesController = new MisionesController();
export default misionesController;