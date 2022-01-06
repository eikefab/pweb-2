const db = require('./');

module.exports = {

    async index() {
        const record = await db('users').select();

        return record;
    },

    async create(email, password, name) {
        await db('users').insert({ email, password, name });
    },

    async get(email) {
        const record = await db('users').where({ email }).select();

        return record;
    },

    async update(email, password, name) {
        await db('users').where({ email }).update({ name, password });
    },

    async delete(email) {
        await db('users').where({ email }).del();
    }

}