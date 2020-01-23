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
class MisionesController {
    misiones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('todos las misiones');
            const misiones = yield database_1.default.query('SELECT * FROM misiones');
            res.json(misiones);
        });
    }
    mision(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const misiones = yield database_1.default.query('SELECT * FROM misiones WHERE id = ?', [id]);
            if (misiones.length > 0) {
                return res.json(misiones[0]);
            }
            res.status(404).json({ text: ' Esta mision no existe' });
        });
    }
    crearMision(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO misiones set ?', [req.body]);
            res.json({ message: 'mision guardada ' });
        });
    }
    actualizarMision(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE misiones set ?  WHERE id = ?', [req.body, id]);
            res.json({ message: 'mision actualizada' });
        });
    }
    borrarMision(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM misiones WHERE id = ?', [id]);
            res.json({ message: 'mision eliminada ' });
        });
    }
}
const misionesController = new MisionesController();
exports.default = misionesController;
