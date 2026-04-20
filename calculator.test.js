const { add } = require('./calculator');

describe('Calculator (demo fallo de umbrales)', () => {
  describe('add()', () => {
    it('solo cubre add — el resto de calculator y grading queda sin ejercitar', () => {
      expect(add(2, 3)).toBe(5);
    });
  });
});
