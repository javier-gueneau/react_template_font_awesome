const { authenticate } = require('../config/jwt.config');
const Controller = require('../controllers/comment.controllers');

module.exports = app => {
    app.post('/api/comment/create', Controller.agregar)
    app.get('/api/comment/list', Controller.listar)
    app.get('/api/comment/:id', Controller.buscar)
    app.put('/api/comment/:id', Controller.editar)
    app.delete('/api/comment/:id', Controller.eliminar)
}