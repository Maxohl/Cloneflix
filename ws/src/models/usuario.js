const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    nome: {
        type: String,
        required: true
    },
    email: String,
    senha: String
});

module.exports = Usuario;