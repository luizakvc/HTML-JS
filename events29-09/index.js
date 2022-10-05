/** Criar uma função responsável por mostrar o alerta na tela */


function mostrarAlerta () {
    /** O objeto document éum objeto que faz uma representação do HTML do seu site dentro do JS*/
    /** getElementById= recuperar um elemento pela ID */
    const divAlerta = document.getElementById('alerta') 
    /**A propriedade classList retorna um array com todas as classes CSS que um elmento possui
     * classList.add adiciona uma nova classe pro objeto
     */
    divAlerta.classList.add('mostrar')
}

function fecharAlerta(){
    /** classList.remove() remove uma classe dinamicamente dentro de um elemento html */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

/** addEventListener é um método que te permite ouvir eventos do HTML pelo JS */
/** dentro do JS não precisa do ON (onclick) */
/**Uma função como parâmetro para outra: pega a função só que sem os () na frente para pegar apenas a referência e não executar a função */
btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)

var count = 0;
var btnContador = document.getElementById("btnContador");
var display = document.getElementById("display");

btnContador = document.getElementById("display")
    count++;
    display.innerHTML = count;
