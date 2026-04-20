const grading = require('./grading');

describe('grading (demo cobertura)', () => {
  for (let i = 1; i <= 40; i += 1) {
    const key = `g${String(i).padStart(2, '0')}`;
    it(`${key} retorna ${i}`, () => {
      expect(grading[key]()).toBe(i);
    });
  }
});
