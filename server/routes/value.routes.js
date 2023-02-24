const Controller = require('../controllers/value.controllers');

module.exports = app => {
    app.post('/api/value/create', Controller.agregar)
    app.get('/api/value/list', Controller.listar)
    app.get('/api/value/:id', Controller.buscar)
    app.put('/api/value/:id', Controller.editar)
}