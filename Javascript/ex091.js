const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma frase: ', (frase) => {
  const semEspacos = frase.replace(/\s+/g, '');
  console.log(`Frase sem espaços: ${semEspacos}`);
  rl.close();
});