function lerNotas() {
    const listaNotas = [];
    for (let i = 0; i < 4; i++) {
        let numero = prompt("Informe uma nota: ");
        while (isNaN(numero)) {
            alert("O valor digitado não é um nota!");
            numero = prompt("Informe uma nota: ");
        }
        listaNotas.push(parseInt(numero));
    }
    return listaNotas;
}

function calcularMedia(notas) {
    const quantidadeNotas = notas.length;
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / quantidadeNotas;
    return media;
}

let lista = lerNotas();
let resultado = calcularMedia(lista);
alert(`Notas Informadas: ${lista.join(",")}
        Média: ${resultado}`);








































/*let mensagem = "";
let listaNumeros =  main()

    function main(){
    for (let i = 0; i < 4; i++) {

        let listaNumeros = [];
        let n = "";
        
        
        do {
            n = parseFloat(prompt(`${i + 1}-Digite um número`));
            
            if (isNaN(n)) {
                alert("Está inválido,devido que digitou uma palavra");
            }
            else if (n === "") {
                alert("Está em branco, digite um número por favor.");
            }
            
        } while (isNaN(n) || n === "");
        listaNumeros.push[n];
        
    }
    return listaNumeros;
}
function calcular()
{
    let m = 0;
    let soma = listaNumeros[0]+[1]+[2]+[3]  
    m = soma/listaNumeros.length
}
mensagem = `O usuário digitou estas notas : ${listaNumeros} \n cuja média é ${m} `;
alert(mensagem)*/
