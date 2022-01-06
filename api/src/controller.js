const service = require('./connection/service');

module.exports = {

    async index(req, res) {
        const record = await service.index();

        return res.status(200).json(record);
    },

    async create(req, res) {
        const { email, password, name } = req.body;

        try {
            await service.create(email, password, name);
        } catch (error) {
            console.error(error);

            return res.status(500).send('E-mail already exists.');
        }

        return res.status(200).send('Done.');
    },

    async update(req, res) {
        const { email, password, name } = req.body;

        await service.update(email, password, name);

        return res.status(200).send("Done.");
    },

    async delete(req, res) {
        const { email } = req.body;

        await service.delete(email);

        return res.status(200).send("Done.");
    }

}