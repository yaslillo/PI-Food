const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
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

    describe('resume', () => {
        it('should throw an error if resume is null', (done) => {
            Recipe.create({})
                .then(() => done(new Error('It requires a valid resume')))
                .catch(() => done());
        });
    });

    describe('score', () => {
        it('should throw an error if score is null', (done) => {
            Recipe.create({})
                .then(() => done(new Error('It requires a valid score')))
                .catch(() => done());
        });
    });

    describe('healthylevel', () => {
        it('should throw an error if healthylevel is null', (done) => {
            Recipe.create({})
                .then(() => done(new Error('It requires a valid healthylevel')))
                .catch(() => done());
        });
    });

    describe('stepbystep', () => {
        it('should throw an error if stepbystep is null', (done) => {
            Recipe.create({})
                .then(() => done(new Error('It requires a valid stepbystep')))
                .catch(() => done());
        });
    });

    describe('image', () => {
        it('should throw an error if image is null', (done) => {
            Recipe.create({})
                .then(() => done(new Error('It requires a valid image')))
                .catch(() => done());
        });
    });

    describe('createdInDb', () => {
        it('should throw an error if createdInDb is null', (done) => {
            Recipe.create({})
                .then(() => done(new Error('It requires a valid createdInDb')))
                .catch(() => done());
        });
    });
});
