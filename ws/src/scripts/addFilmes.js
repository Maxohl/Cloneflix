const database = require('../services/database');

const Filme = require('../models/filme');
const filmesJSON = require('../data/filme.json');

const addFilmes = async () => {
    try {
        for (let filme of filmesJSON) {
            console.log(`inserindo filme ${filme.title}`)
            await new Filme(filme).save();
        }
        console.log('Fim do script');
    } catch (err) {
        console.log(err.message);
    }
}

addFilmes();