//antiguo var; const son más ligeras - su valor no va a cambiar; puedo crear otra const con el mismo nombre si es otro scope.
const name = "Wolverine";

if (true) {
  const name = "Magento";
  //   console.log(name);
}

console.log(name);
