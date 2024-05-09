//exemplo 1 
//contando até 5 usando um loop while:
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

//exemplo 2 
//encontrando o menor número inteiro positivo n tal que 2^n seja maior que 1000
let n = 1;
let potencia = 2;

while (potencia <= 1000) {
    n++;
    potencia = Math.pow(2, n);
}

console.log("O menor valor de n é: " + n);

//explicação 

//while em JavaScript é como uma porta giratória que continua girando enquanto uma condição específica for verdadeira. 
//você define a condição inicial e enquanto ela for verdadeira, o loop continua executando. 
//é útil quando você precisa repetir uma ação sem saber quantas vezes precisará repeti-la.
