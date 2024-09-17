
function lerNumeroInteiro(promptMessage) {
    while (true) {
        let input = prompt(promptMessage);
        if (input === null) {
            return null; 
        }
        let numero = parseInt(input);
        if (!isNaN(numero) && numero >= 0) {
            return numero;
        } else {
            alert("Entrada inválida. Por favor, insira um número inteiro não negativo.");
        }
    }
}


function cadastrarNumeros(qtd) {
    let lista = [];
    alert(`Você irá cadastrar ${qtd} números inteiros.`);
    while (lista.length < qtd) {
        let numero = lerNumeroInteiro("Digite um número inteiro:");
        if (numero !== null) {
            lista.push(numero);
        } else {
            alert("Operação cancelada.");
            return [];
        }
    }
    return lista;
}


function exibirLista(lista) {
    alert("Lista cadastrada: " + lista.join(", "));
}


function exibirPares(lista) {
    let pares = lista.filter(num => num % 2 === 0);
    alert("Números pares: " + pares.join(", "));
}


function exibirImpares(lista) {
    let impares = lista.filter(num => num % 2 !== 0);
    alert("Números ímpares: " + impares.join(", "));
}


function menuPrincipal() {
    while (true) {
        let opcao = lerNumeroInteiro("Menu Principal\n1. Cadastrar 5 números\n2. Cadastrar 15 números\n3. Cadastrar 25 números\n4. Cadastrar 50 números\n5. Sair\nEscolha uma opção:");
        
        if (opcao === null) {
            return; 
        }
        
        let lista;
        
        switch (opcao) {
            case 1:
                lista = cadastrarNumeros(5);
                break;
            case 2:
                lista = cadastrarNumeros(15);
                break;
            case 3:
                lista = cadastrarNumeros(25);
                break;
            case 4:
                lista = cadastrarNumeros(50);
                break;
            case 5:
                return; 
            default:
                alert("Opção inválida. Tente novamente.");
                continue;
        }
        
        if (lista.length === 0) {
            return; 
        }
        
        while (true) {
            let opcaoExibicao = lerNumeroInteiro("Menu de Exibição\n1. Exibir lista completa\n2. Exibir somente números pares\n3. Exibir somente números ímpares\n4. Voltar ao menu principal\nEscolha uma opção:");
            
            if (opcaoExibicao === null) {
                return; 
            }
            
            switch (opcaoExibicao) {
                case 1:
                    exibirLista(lista);
                    break;
                case 2:
                    exibirPares(lista);
                    break;
                case 3:
                    exibirImpares(lista);
                    break;
                case 4:
                    break; 
                default:
                    alert("Opção inválida. Tente novamente.");
                    continue;
            }
            
            if (opcaoExibicao === 4) {
                break;
            }
        }
    }
}

// Iniciar o menu principal
menuPrincipal();
