const database = require('../services/database');
const Filme = require('../models/filme');
const filmeLogoMobileJSON = require('../data/filmeLogoMobile.json');

const addUsers = async () => {
  try {
    for (let filmeLogoMobile of filmeLogoMobileJSON) {
      console.log('adicionando filme');
      await Filme.findByIdAndUpdate(filmeLogoMobile.movie_id, {
        logoMobile: filmeLogoMobile.logoMobile,
      });
    }
    console.log('Final do Script');
  } catch (err) {
    console.log(err.message);
  }
};
addUsers();