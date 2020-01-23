"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PersonajesController {
    personajes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('todos los personajes');
            const personajes = yield database_1.default.query('SELECT * FROM personajes');
            res.json(personajes);
        });
    }
    personaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personajes = yield database_1.default.query('SELECT * FROM personajes WHERE id = ?', [id]);
            if (personajes.length > 0) {
                return res.json(personajes[0]);
            }
            res.status(404).json({ text: ' Este personaje no existe' });
        });
    }
    crearPersonaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO personajes set ?', [req.body]);
            res.json({ message: 'personaje guardado ' });
        });
    }
    actualizarPersonaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE personajes set ?  WHERE id = ?', [req.body, id]);
            res.json({ message: 'personaje actualizado' });
        });
    }
    borrarPersonaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM personajes WHERE id = ?', [id]);
            res.json({ message: 'personaje eliminado ' });
        });
    }
}
const personajesController = new PersonajesController();
exports.default = personajesController;
