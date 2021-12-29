const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Diet model', () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error('Unable to connect to the database:', err);
        })
    );

    describe('Validators', () => {
        beforeEach(() => Recipe.sync({ force: true }));
        describe('name', () => {
            it('should throw an error if name is null', (done) => {
                Recipe.create({})
                    .then(() => done(new Error('It requires a valid name')))
                    .catch(() => done());
            });
        });
    });

    describe('id', () => {
        it('should throw an error if id is null', (done) => {
            Recipe.create({})
                .then(() => done(new Error('It requires a valid id')))
                .catch(() => done());
        });
    });
});
