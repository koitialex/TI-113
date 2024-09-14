let mensagem = "";

letras = lerDados()  
function lerDados(){
    let letras = [];
   
    for (let i = 0; i < 10; i++) {
        let letra = prompt("Informe uma Letra: ").toUpperCase();
        letras.push(letra);
    }
    return letras;
}
consoante = consoante(letras)
function consoante(){
    let cosoante = []

    for (let i = 0; i < letras.length; i++) {
        if (letras [i] !== "A" && letras [i] !== "E" && letras [i] !== "I" && letras [i] !== "O" && letras [i] !== "U" )  {
            consoante.push (letras)
        }
    }
    return cosoante
}
vogais = vogais(letras)
function vogais() {
    let vogais = []
    for (let i = 0; i < letras.length; i++) {
        if (letras [i] == "A" || letras [i] == "E" || letras [i] == "I" || letras [i] == "O" || letras [i] == "U" )  {
            vogais.push (letras)
        }
    }
    return vogais
}
estruturaMensagem(consoante,vogais);
function estruturaMensagem() {
 
    let mensagem = "numeros de vogais lidas foi " + vogais.length + "\n"  
    let ultimaPosicao = (consoante.length - 1);
 
    for (let i = 0; i < consoante.length; i++) {
        mensagem += consoante[i];

        if (i == ultimaPosicao)
            mensagem += ".";
        else
            mensagem += ", ";
    }

    alert (mensagem)
}