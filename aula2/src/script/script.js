var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto) {
    var chute = prompt('Digite o numero que chutou de 0 a 1000: ')
    if(chute == numeroSecreto) {
        alert('acertou');
    } else if (chute > numeroSecreto) {
        alert('o numero secreto é menor')
    } else if (chute < numeroSecreto) {
        alert('o numero secreto é maior')
    }
}


var carro = 23
var carro = carro + 2
