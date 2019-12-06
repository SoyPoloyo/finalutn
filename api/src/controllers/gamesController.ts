import {Request, Response} from 'express';

import pool from '../database';

class GamesController{

   public async listado (req :Request , res: Response) {

        const games = await pool.query('SELECT * FROM game');
        res.json(games);
    } 

    public async obtenerUno (req :Request , res: Response): Promise <any> {

        const { id } = req.params;
        const games =  await pool.query('SELECT * FROM game WHERE id = ?', [id]);
      if(games.length > 0){
          return res.json(games[0]);
      }
      res.status(404).json({ text: ' juego no existe'});
    } 

    public async create (req: Request , res:Response): Promise <void> {

      await  pool.query('INSERT INTO game set ?', [req.body]);
        res.json({ message: 'juego guardado ' });
            
    }

    public async update (req: Request , res:Response): Promise <void>{
        const {id} = req.params;
        await  pool.query('UPDATE game set ?  WHERE id = ?', [req.body, id]);
        res.json({ message: 'juego actualizado' });
    }


    public async delete (req: Request , res:Response): Promise <void>{
        const {id} = req.params;
        await  pool.query('DELETE FROM game WHERE id = ?', [id]);
        res.json({ message: 'juego eliminado ' });
    }


}

const gamesController = new GamesController();
export default gamesController;