const knexfile = require('../src/knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

// knex('users').insert({
//     name: 'Test',
//     email: 'teste@test.com.br',
//     password: 'teste'
// }).then(data => console.log(data))

// knex('users').then(resultado => console.log(resultado))