"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registroController_1 = __importDefault(require("../controllers/registroController"));
class RegistroRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', registroController_1.default.usuarios);
        this.router.get('/:id', registroController_1.default.usuario);
        this.router.post('/', registroController_1.default.crearUsuario);
        this.router.put('/:id', registroController_1.default.actualizarUsuario);
        this.router.delete('/:id', registroController_1.default.borrarUsuario);
    }
}
const registroRoutes = new RegistroRoutes();
exports.default = registroRoutes.router;
