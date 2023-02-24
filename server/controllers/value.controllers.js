const Value = require('../models/value.models');

module.exports.agregar = (req, res) => {
    const {name,value}=req.body
    Value.create({
        name,
        value,
    })
    .then((purchases) =>res.json(purchases))
    .catch(err=>res.json(err))
}

module.exports.listar = (req, res) => {
    Value.find({})
        .then((purchases) =>res.json(purchases))
        .catch(err=>res.json(err))
    }
    
//editar
module.exports.editar = (req, res) => {
    Value.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then((autores) =>res.json(autores))
    .catch(err=>res.json(err))
}

//look up
module.exports.buscar = (req, res) => {
    Value.findById(req.params.id)
    .then(data =>res.json({data:data}))
    .catch(err=>res.json(err))
}