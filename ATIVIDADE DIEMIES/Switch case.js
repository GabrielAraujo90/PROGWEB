//exemplo 1 
// ver um dia da semana 

function verificarDiaSemana(numero) {
    let dia;

    switch (numero) {
        case 1:
            dia = "Domingo";
            break;
        case 2:
            dia = "Segunda-feira";
            break;
        case 3:
            dia = "Terça-feira";
            break;
        case 4:
            dia = "Quarta-feira";
            break;
        case 5:
            dia = "Quinta-feira";
            break;
        case 6:
            dia = "Sexta-feira";
            break;
        case 7:
            dia = "Sábado";
            break;
        default:
            dia = "Número inválido";
    }

    console.log("O dia da semana é: " + dia);
}

// chamadas de exemplo da função
verificarDiaSemana(2);  //  o dia da semana é: Segunda-feira
verificarDiaSemana(5);  //  o dia da semana é: Quinta-feira
verificarDiaSemana(9);  //  o dia da semana é: Número inválido


//exemplo 2 
// ver o tipo de uma fruta 
function verificarTipoFruta(nome) {
    let tipo;

    switch (nome.toLowerCase()) {
        case "maçã":
            tipo = "Fruta vermelha";
            break;
        case "banana":
            tipo = "Fruta amarela";
            break;
        case "uva":
            tipo = "Fruta roxa";
            break;
        case "laranja":
            tipo = "Fruta cítrica";
            break;
        default:
            tipo = "Tipo de fruta desconhecido";
    }

    console.log("A fruta " + nome + " é do tipo: " + tipo);
}

// chamadas de exemplo da função
verificarTipoFruta("maçã");    //  a fruta maçã é do tipo: Fruta vermelha
verificarTipoFruta("banana");  //  a fruta banana é do tipo: Fruta amarela
verificarTipoFruta("abacaxi"); //  a fruta abacaxi é do tipo: Tipo de fruta desconhecido

//explicação 

//O switch em JavaScript é como uma máquina de escolhas. Você dá a ele um valor para verificar e ele verifica esse valor contra várias opções. 
//Se encontrar uma correspondência, ele executa um bloco de código associado a essa opção (case). 
//Se não encontrar correspondência, pode executar um bloco de código padrão (default).
