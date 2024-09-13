function main() {
    let letras = [];
    let contador = 0;
    let mensagem = "";

    for (let i = 0; i < 10; i++) {
        let letra = prompt("Informe uma Letra: ");
        letras.push(letra);
    }
    for (let i = 0; i < letras.lenght; i++) {
        let letra = letras[i].toUpperCase()
        let A = (letra == "a")
        let B = (letra == "b")
        let C = (letra == "c")
        let D = (letra == "d")
        let E = (letra == "e")

        if (!(letra == "a") || (letra == "e") || (letra == "i") || (letra == "o") || (letra == "u")) {
            contador += 1
            mensagem += letra + "\n"
        }
    }
}   