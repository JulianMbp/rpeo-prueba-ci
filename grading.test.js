const grading = require('./grading');

describe('grading (demo ~90%)', () => {
  for (let i = 1; i <= 36; i += 1) {
    const key = `g${String(i).padStart(2, '0')}`;
    it(`${key} retorna ${i}`, () => {
      expect(grading[key]()).toBe(i);
    });
  }
});
