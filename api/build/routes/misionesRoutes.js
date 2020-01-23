"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const misionesController_1 = __importDefault(require("../controllers/misionesController"));
class MisionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', misionesController_1.default.misiones);
        this.router.get('/:id', misionesController_1.default.mision);
        this.router.post('/', misionesController_1.default.crearMision);
        this.router.put('/:id', misionesController_1.default.actualizarMision);
        this.router.delete('/:id', misionesController_1.default.borrarMision);
    }
}
const misionesRoutes = new MisionesRoutes();
exports.default = misionesRoutes.router;
