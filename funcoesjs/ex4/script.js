function lerSalarios(){
    let listaSalarios = [];
    for (let i = 0; i < 5; i++) {
        
        let salario = prompt("Informe o Salario: ");
        let s = parseFloat(salario);
        
        listaSalarios.push(s);
        }
        return listaSalarios;
    }
function lerNomes(){
    let listaNomes = [];
    mensagem = ""
    for (let i = 0; i < 5; i++) {
        
        let nome = prompt("Informe o nome: ");
        let n = parseFloat(nome);
        
        listaNomes.push(n);
        while (i < 5) {
            
        }

        }
        return listaNomes
    }    
listaNomes = processar()
function processar(listaSalarios){
        let mensagem = "Salarios Líquidos: \n";
     
    for (let i = 0; i < listaSalarios.length; i++) {
        
        let liquido =  listaSalarios[i] - (listaSalarios[i] * (12/100));
        
        mensagem += "R$ " + liquido.toFixed(2) + "\n";
    }
}
    resposta()    
function resposta(listaNomes,listaSalarios,processar){
       mensagem += `${listaNomes} ${listaSalarios} ${processar}`
    }
    alert(mensagem);