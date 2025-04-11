/*curso de javascript*/
/*modo de inserçoes no html*/

/*inerHTML*/ 
document.getElementById("test").innerHTML="";  

/*write*/
document.write(); 

/*alert*/
alert(); 

/*console log*/

console.log();

/*declarações*/ 

const id ="1";

// variaveis

//declaração de varavel 
var pote;

//atribuição de valores

pote = 5;

// let torna a variavel unica(n pode ser redeclarada)

let nome = "luiz";

const name = "lucas";

// operador 

var a,b,c;

a=1;
b=2;
c=3;

total= a + b;
total= a - b;
total= a * b;
total= c/a;

alert("o total ficou: "+total);

var eleitor = a <c ?/*se for true*/ "maior":/*se for false*/ "menor";


// &&, ||, ! = e, ou, não
var se = (a> 0 &&/**&& = e */ c<4);

var ou = (a> 0 ||/**|| = ou*/ c<4);

var negação = !/*! = não*/(a>0);

// funçoes 

//função de soma
function soma(valor1, valor2){
    return valor1 + valor2;
}

var total = soma(2, 4);

//funçao cotação do dolar
function cotacao(real, dolar){
    return real * dolar;
}

var convercao = cotacao(10.50, 5.80);

console.log(convercao);
