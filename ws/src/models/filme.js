const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    title: {
        type: String,
        required: true
    },
    tyoe: String,
    cover: String,
    logo: String,
    thumb: String,
    description: String,
    genres: Array,
    cast: Array,
    scenes_moments: Array,
    logoMobile: String

});

module.exports = Filme;