// conversor de numeros romanos
/*A sua tarefa será fazer um conversor de números romanos para arábicos e vice-versa
Para a tarefa, considerar apenas números inteiros positivos entre 1 e 3999.
Sobre números romanos:
Os números romanos são indicações numéricas utilizadas para indicar séculos,
capítulos e páginas de livros, horas dos relógios, nomes dos papas e reis, dentre outros.
São representados por letras maiúsculas, num total de 7 numerações: I (1), V (5), X (10),
L (50), C (100), D (500), M (1000). Para representar outros números, são escritos alguns
algarismos, começando do algarismo de maior valor e seguindo a seguinte regra:
- Algarismos de menor ou igual valor à direita são somados ao algarismo de maior valor;
- Algarismos de menor valor à esquerda são subtraídos do algarismo de maior valor.
Assim, XI representa 10 + 1 = 11, enquanto XC representa 100-10 = 90.
- Um algarismo não pode ser repetido lado a lado por mais de três vezes. Assim, para
representar 300, podemos usar CCC; para representar 400, entretanto, precisamos
escrever CD.
- A letra I é utilizada somente antes do V e do X, por exemplo: IV = 4; IX = 9;
- A letra X é utilizada somente antes do L e do C, por exemplo: XL = 40; XC = 90;
- A letra C é utilizada somente antes do D e do M, por exemplo, CD = 400; CM = 900*/


function romanoParaDecimal (numero) {
    let resultado = 0;
    let ln = null;
    let algarismos = {I:1, IV:4, V:5, IX:9, X:10, XL:40, L:50, XC:90, C:100, CD:400, D:500, CM:900, M:1000 }
    numero = numero.toUpperCase();
    for (let i = numero.length-1; i >= 0; i--) {
        let char = numero.charAt(i);
        for (let chave in algarismos) {
            if( char === chave){
                let nc = parseInt(algarismos[chave]);
                if (ln !== null) {
                    if (nc < ln) {
                        nc = nc*-1;
                    }
                }
                resultado = resultado + nc;
                ln = nc;
            }
        }
    }
    return resultado;
} 

function decimalParaRomano (numero) {
    let resultado = '';
    let divisao = 0;
    let resto = numero;
    let vetorNumeros = [1000,500,100,50,10];
    let vetorRomanos = ['M','D','C','L','X'];
    let vetorDezena = ['I','II','III','IV','V','VI','VII','VIII','IX'];

    if (numero > 3999) {
        return 'numero maximo 3999'
    }

    for (let i = 0; i < vetorNumeros.length; i++) {
        divisao = parseInt(resto/vetorNumeros[i]);
        resto = numero % vetorNumeros[i];
        if (divisao > 0) {
            for (let x = 0; x < divisao; x++) {
                resultado = resultado + vetorRomanos[i];
            }
        } else if (resto < 10) {
            if (vetorDezena[resto-1] !== undefined) {
                resultado = resultado + vetorDezena[resto-1];
            }
            break;
        }
    }
    return resultado;
  }
    

    
document.getElementById("decimal").addEventListener('keyup', function() {   

    if(!isNaN(this.value)) {
     var romanNumber = decimalParaRomano(this.value)
    }
    else {
        var romanNumber = romanoParaDecimal(this.value)
    }

    document.getElementById("roman").value = romanNumber;
    var numberCheck = this.value;
     if(numberCheck == '') return false;
});
