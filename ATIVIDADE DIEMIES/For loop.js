// exemplo 1 
// Neste exemplo, o loop for percorre cada elemento do array nomes utilizando a variável i como contador. A cada iteração, o nome correspondente é impresso no console.

const nomes = ['Alice', 'Bob', 'Carol', 'David'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

//exemplo 2 
//Calculando a soma dos números de 1 a 10:

let soma = 0;

for (let i = 1; i <= 10; i++) {
    soma += i;
}

console.log("A soma dos números de 1 a 10 é: " + soma);

// explicação 
// O loop for em JS é como uma máquina de repetição. Você dá a ele um contador inicial, uma condição para continuar e uma forma de atualizar o contador a cada repetição
// Assim, ele repete um bloco de código várias vezes até que a condição não seja mais atendida. É ótimo para fazer algo várias vezes de forma rápida e organizada