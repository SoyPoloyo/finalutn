import {Request, Response} from 'express';

import pool from '../database';

class PersonajesController{

   public async personajes (req :Request , res: Response) {
        console.log('todos los personajes');
        const personajes = await pool.query('SELECT * FROM personajes');
        res.json(personajes);
        
    } 

    public async personaje (req :Request , res: Response): Promise <any> {

        const { id } = req.params;
        const personajes =  await pool.query('SELECT * FROM personajes WHERE id = ?', [id]);
      if(personajes.length > 0){
          return res.json(personajes[0]);
      }
      res.status(404).json({ text: ' Este personaje no existe'});
    } 

    public async crearPersonaje (req: Request , res:Response): Promise <void> {

      await  pool.query('INSERT INTO personajes set ?', [req.body]);
        res.json({ message: 'personaje guardado ' });
            
    }

    public async actualizarPersonaje (req: Request , res:Response): Promise <void>{
        const {id} = req.params;
        await  pool.query('UPDATE personajes set ?  WHERE id = ?', [req.body, id]);
        res.json({ message: 'personaje actualizado' });
    }


    public async borrarPersonaje (req: Request , res:Response): Promise <void>{
        const {id} = req.params;
        await  pool.query('DELETE FROM personajes WHERE id = ?', [id]);
        res.json({ message: 'personaje eliminado ' });
    }


}

const personajesController = new PersonajesController();
export default personajesController;