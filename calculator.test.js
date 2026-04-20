const { add, subtract, multiply, divide, percentage } = require('./calculator');

describe('Calculator', () => {

  describe('add()', () => {
    it('suma dos números positivos', () => {
      expect(add(2, 3)).toBe(5);
    });
    it('suma número negativo', () => {
      expect(add(-1, 3)).toBe(2);
    });
    it('suma cero', () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('subtract()', () => {
    it('resta dos números', () => {
      expect(subtract(5, 3)).toBe(2);
    });
    it('resta resultado negativo', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply()', () => {
    it('multiplica dos números', () => {
      expect(multiply(3, 4)).toBe(12);
    });
    it('multiplica por cero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide()', () => {
    it('divide dos números', () => {
      expect(divide(10, 2)).toBe(5);
    });
    it('lanza error al dividir por cero', () => {
      expect(() => divide(10, 0)).toThrow('División por cero no permitida');
    });
  });

  describe('percentage()', () => {
    it('calcula porcentaje correctamente', () => {
      expect(percentage(80, 100)).toBe(80);
    });
    it('lanza error si total es cero', () => {
      expect(() => percentage(10, 0)).toThrow('El total no puede ser cero');
    });
  });

});
