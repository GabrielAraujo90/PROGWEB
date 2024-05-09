//exemplo 1 

// Definindo uma função para verificar a faixa etária
function verificarFaixaEtaria(idade) {
    if (idade < 18) {
        console.log("Você é menor de idade.");
    } else if (idade >= 18 && idade < 65) {
        console.log("Você é um adulto.");
    } else {
        console.log("Você é um idoso.");
    }
}

// Exemplos da função com diferentes idades
verificarFaixaEtaria(15); //  Você é menor de idade.
verificarFaixaEtaria(25); //  Você é um adulto.
verificarFaixaEtaria(70); //  Você é um idoso.


//exemplo 2 

// Função para verificar o sinal de um número
function verificarSinal(numero) {
    if (numero > 0) {
        console.log("O número é positivo.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero.");
    }
}

// Exemplos de chamadas da função com diferentes números
verificarSinal(5);   // Saída: O número é positivo.
verificarSinal(-3);  // Saída: O número é negativo.
verificarSinal(0);   // Saída: O número é zero.

// explicação 

//if: É usado para fazer algo se uma condição for verdadeira.
//else if: É usado para fazer algo diferente se uma condição for verdadeira, mas apenas se a condição do if for falsa.
//else: É usado para fazer algo se nenhuma das condições anteriores for verdadeira.
//Basicamente, if é "se", else if é "se não, mas se", e else é "caso contrário". Essas instruções nos ajudam a decidir o que o programa deve fazer com base em diferentes situações.