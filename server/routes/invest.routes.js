const { authenticate } = require('../config/jwt.config');
const PurchaseController = require('../controllers/invest.controllers');

module.exports = app => {
    app.post('/api/invest/create', PurchaseController.agregar)
    app.get('/api/invest/list', PurchaseController.listar)
    app.get('/api/invest/:id', PurchaseController.buscar)
    app.put('/api/invest/:id', PurchaseController.editar)
    app.delete('/api/invest/:id', PurchaseController.eliminar)
}