/**
 * Calculadora simple para demo de cobertura de pruebas
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('División por cero no permitida');
  return a / b;
}

function percentage(value, total) {
  if (total === 0) throw new Error('El total no puede ser cero');
  return (value / total) * 100;
}

function addBad(b,a){
  return b-a
}

module.exports = { add, subtract, multiply, divide, percentage };
