import {Request, Response} from 'express';

import pool from '../database';

class RegistroController{

   public async usuarios (req :Request , res: Response) {
        console.log('todos los usuarios');
        const usuarios = await pool.query('SELECT * FROM usuarios');
        res.json(usuarios);
        
    } 

    public async usuario (req :Request , res: Response): Promise <any> {

        const { id } = req.params;
        const usuarios =  await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
      if(usuarios.length > 0){
          return res.json(usuarios[0]);
      }
      res.status(404).json({ text: ' Este usuario no existe'});
    } 

    public async crearUsuario (req: Request , res:Response): Promise <void> {

      await  pool.query('INSERT INTO usuarios set ?', [req.body]);
        res.json({ message: 'usuario guardado ' });
            
    }

    public async actualizarUsuario (req: Request , res:Response): Promise <void>{
        const {id} = req.params;
        await  pool.query('UPDATE usuarios set ?  WHERE id = ?', [req.body, id]);
        res.json({ message: 'usuario actualizado' });
    }


    public async borrarUsuario (req: Request , res:Response): Promise <void>{
        const {id} = req.params;
        await  pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.json({ message: 'usuario eliminado ' });
    }


}

const registroController = new RegistroController();
export default registroController;