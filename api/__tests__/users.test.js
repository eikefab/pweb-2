const request = require("supertest");
const app = require("../src/app");

describe("Testing the user path", () => {

    test("Checking the connection", async () => {
        const { body } = await request(app).get("/");

        expect(body.length).toBeGreaterThanOrEqual(0);
    });

    test("Register", async () => {
        const body = {
            email: 'eike@email.com',
            name: 'Eike Fabricio',
            password: '12345678'
        }

        const { statusCode } = await request(app).post('/').send(body);

        expect(statusCode).toBe(200);
    });

    test("Delete", async () => {
        const body = {
            email: 'eike@email.com',
        }

        const { statusCode } = await request(app).delete('/').send(body);

        expect(statusCode).toBe(200);
    });

});