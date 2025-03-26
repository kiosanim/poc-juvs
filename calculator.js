// calculator
//
// 1. Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

// Exemplo de uso
const calc = new Calculator();
console.log(calc.add(5, 3)); // Saída: 8
console.log(calc.subtract(5, 3)); // Saída: 2
console.log(calc.multiply(5, 3)); // Saída: 15
console.log(calc.divide(5, 3)); // Saída: 1.6666666666666667
