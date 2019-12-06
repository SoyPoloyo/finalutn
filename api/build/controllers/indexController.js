"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'api esta en api/games' });
    }
}
exports.indexController = new IndexController();
