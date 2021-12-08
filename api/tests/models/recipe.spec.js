const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid id', () => {
        Recipe.create({ id: 'Milanesa a la napolitana' });
      });

      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Milanesa a la napolitana' });
      });

      it(' should work when there is resume', () => {
        Recipe.create({ resume: 'Milanesa a la napolitana' });
      });

      it('should work when is score', () => {
        Recipe.create({ score: 'Milanesa a la napolitana' });
      });

      it('should work when is helthylevel', () => {
        Recipe.create({ healthylevel: 'Milanesa a la napolitana' });
      });
      it('should work when is stepbystep', () => {
        Recipe.create({stepbystep: 'Milanesa a la napolitana' });
      });
      it('should work when its a valid image', () => {
        Recipe.create({image: 'Milanesa a la napolitana' });
      });
      it('should work when its a valid createdInDb', () => {
        Recipe.create({createdInDb: 'Milanesa a la napolitana' });
      });
    });
  });
});
