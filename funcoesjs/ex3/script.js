function lerDados() {
    let letras = [];
    for (let i = 0; i < 10; i++) {
        let letra = prompt("Informe uma letra:").toUpperCase();
        letras.push(letra);
    }
    return letras;
}

function obterConsoantes(letras) {
    let consoantes = [];
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] !== "A" && letras[i] !== "E" && letras[i] !== "I" && letras[i] !== "O" && letras[i] !== "U") {
            consoantes.push(letras[i]);
        }
    }
    return consoantes;
}

function obterVogais(letras) {
    let vogais = [];
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === "A" || letras[i] === "E" || letras[i] === "I" || letras[i] === "O" || letras[i] === "U") {
            vogais.push(letras[i]);
        }
    }
    return vogais;
}

function estruturaMensagem(consoantes, vogais) {
    let mensagem = "Número de vogais lidas foi " + vogais.length + "\n";
    let ultimaPosicao = (consoantes.length - 1);

    for (let i = 0; i < consoantes.length; i++) {
        mensagem += consoantes[i];
        if (i === ultimaPosicao) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }
    }

    alert(mensagem);
}


let letras = lerDados();
let consoantes = obterConsoantes(letras);
let vogais = obterVogais(letras);
estruturaMensagem(consoantes, vogais);
