const db = require('../../database/db')

module.exports ={
    Query: {
        //primeiro parametro é um objeto
        //como é um getbyid nao tem objeto
        //depois faz o destruct dos params recebidos e pega somente o id
        async getUser(_, {id}){
            return await db('users').where({id}).first()
        },
        async getUsers(){
            return await db('users')
        }
    },
    Mutation: {
        async createUsers(_, {input}) {
            const result = await db('users').insert({ ...input})

            const id = result[0]
            return await db('users').where({id}).first()
        }
    }
}