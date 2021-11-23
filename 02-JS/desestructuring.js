const deadpool = {
  name: "Wade",
  secondName: "Windston",
  power: "Regeneration",
  age: 50,
  getName() {
    return `${this.name} ${this.secondName} ${this.power}`;
  },
};

// console.log(deadpool.getName());

//extraer constantes tradicional
// const name = deadpool.name;
// const secondName = deadpool.secondName;
// const power = deadpool.power;

//Desestructuring
// const { name, secondName, power, age = 0 } = deadpool;

// console.log(name, secondName, power, age);

function printHeroe({ name, secondName, power, age = 0 }) {
  name = "Lorena";
  console.log(name, secondName, power, age);
}

// printHeroe(deadpool);

const heroes = ["Deadpool", "Superman", "Batman"];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [, , h3] = heroes;
console.log(h3);
