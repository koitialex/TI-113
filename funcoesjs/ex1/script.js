/*let listaNumeros = Numeros();
let mensagem = "";

function Numeros() {

    let n
    let listaNumeros = []

    for (let i = 0; i < 5; i++) {

        do {
            n = parseInt(prompt(`${i + 1}:Digite um número`));

            if (isNaN(n)) {
                alert ("Digite um número por favor");
            }
            else if (n == "") {
                alert ("Digite um número por favor");
            }

        } while (isNaN(n))
        listaNumeros.push(n);
    }

    return listaNumeros;

}
estruturaMensagem(listaNumeros)
function estruturaMensagem() {

    let ultimaPosicao = (listaNumeros.length - 1);

    for (let i = 0; i < listaNumeros.length; i++) {

        if (i == ultimaPosicao)
            mensagem += listaNumeros[i] + ".";
        else
            mensagem += listaNumeros[i] + ", ";
    }

    alert(mensagem);
}
*/
 
function contador() {
    
    let ListaNumero = [];
    let n = "";
    let mensagem = "";
    
    for (let i = 0; i < 5; i++) {
        do {
            n = parseInt(prompt(`${i + 1}-Digite um número`));
            mensagem += `${n}  \n`;
            mensagem += `O usuário digitou estes números : ${ListaNumero}`;

            if (isNaN(n)) {
                alert("Está inválido");
            }
            else if (n === "") {
                alert("Está em branco, digite um número por favor.");
            }

        } while (isNaN(n) || n === "");
        ListaNumero.push[n];

    }
    return mensagem;
}
mensagem = contador();
alert(mensagem);




