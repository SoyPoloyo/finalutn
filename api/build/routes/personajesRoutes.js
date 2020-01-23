"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personajesController_1 = __importDefault(require("../controllers/personajesController"));
class RegistroRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', personajesController_1.default.personajes);
        this.router.get('/:id', personajesController_1.default.personaje);
        this.router.post('/', personajesController_1.default.crearPersonaje);
        this.router.put('/:id', personajesController_1.default.actualizarPersonaje);
        this.router.delete('/:id', personajesController_1.default.borrarPersonaje);
    }
}
const personajesRoutes = new RegistroRoutes();
exports.default = personajesRoutes.router;
