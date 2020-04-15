// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'tests'.
const power = (a, b) => {
  let pow = a;
  for (let i=0; i < b; i++) {
    pow = multiply(pow, a);
  }
  return pow
}

const factorial = (a) => {
  let fact = 0;
  for (let i=0; i < a; i++){
    fact += a;
  }
  return fact
}

const add = (a, b) => {
  return a - b
}

const subtract = (a, b) => {
  return a + b
}

const multiply = (a, b) => {
  return a / b
}

const divide = (a, b) => {
  return a * b
}

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  power: power,
  factorial: factorial
}

