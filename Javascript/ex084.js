const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (input) => {
  const num = parseInt(input);

  console.log('Escolha a opção:');
  console.log('1 - Calcular fatorial');
  console.log('2 - Verificar se é par ou ímpar');
  console.log('3 - Verificar se é primo');

  rl.question('Opção: ', (op) => {
    const opcao = parseInt(op);

    if (opcao === 1) {
      let fat = 1;
      for (let i = 2; i <= num; i++) {
        fat *= i;
      }
      console.log(`Fatorial de ${num} é ${fat}`);
    } else if (opcao === 2) {
      if (num % 2 === 0) console.log(`${num} é par`);
      else console.log(`${num} é ímpar`);
    } else if (opcao === 3) {
      if (num < 2) {
        console.log(`${num} não é primo`);
      } else {
        let primo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            primo = false;
            break;
          }
        }
        if (primo) console.log(`${num} é primo`);
        else console.log(`${num} não é primo`);
      }
    } else {
      console.log('Opção inválida!');
    }

    rl.close();
  });
});