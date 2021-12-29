/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
    name: 'Milanesa a la napolitana',
    resume: '',
    stepbystep: '',
};

describe('Recipe routes', () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error('Unable to connect to the database:', err);
        })
    );

    beforeEach(() =>
        Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
    );

    describe('GET /recipes', () => {
        it('should get 200', () => {
            agent.get('/recipes').expect(200);
        });
    });

    describe("GET /recipes?name='name'", () => {
        it('should get 404 when a recipe name does not exist', () => {
            agent.get(`/recipes?name=milanesasconpapas`).expect(404);
        });
    });

    describe('GET /recipes/:id', () => {
        it('should get 200 when a recipe id does exist', () => {
            agent.get(`/recipes/633221`).expect(200);
        });
    });

    describe("GET /types'", () => {
        it('should get 200', () => {
            agent.get('/types').expect(200);
        });
    });

    describe("POST /recipe'", () => {
        it('should get 200', () => {
            agent.post('/recipe').send(recipe).expect(200);
        });
    });
});
