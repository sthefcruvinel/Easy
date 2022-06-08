const q1 = {
    pergunta     : "Sobre o sistema operacional, aponte a alternativa correta: ",
    alternativaA : "a) O sistema operacional tem como objetivo funcionar como uma superfície entre o usuário e o computador, tornando sua utilização mais simples, rápida e segura",
    alternativaB : "b) O primeiro sistema operacional foi o linux, criado em 1986",
    alternativaC : "c) O primeiro sistema operacional foi o windows, criado em 1981",
    alternativaD : "d) O sistema operacional tem como objetivo principal controlar os dispositivos de entrada e saída",
    correta      : "a) O sistema operacional tem como objetivo funcionar como uma superfície entre o usuário e o computador, tornando sua utilização mais simples, rápida e segura",
    escolhida    : "",
}

const q2 = {
    pergunta     : "Assinale a opção que não faz parte das classificações de tipo de sistema operacional: ",
    alternativaA : "a) Sistema monotarefa",
    alternativaB : "b) Sistema com várias memórias",
    alternativaC : "c) Sistema com vários processadores",
    alternativaD : "d) Sistema multitarefa",
    correta      : "b) Sistema com várias memórias",
    escolhida    : "",
}

const q3 = {
    pergunta     : "O processador, também denominado unidade central de processamento (UCP), gerencia todo o sistema computacional controlando as operações realizadas por cada unidade funcional. A principal função do processador é controlar e executar instruções presentes na memória principal, através de operações básicas, exceto: ",
    alternativaA : "a) Somar",
    alternativaB : "b) Gerar interrupções",
    alternativaC : "c) Comparar dados",
    alternativaD : "d) Movimentar dados",
    correta      : "b) Gerar interrupções",
    escolhida    : "",
} 

const q4 = {
    pergunta     : "São principais funções do Kernel, exceto:",
    alternativaA : "a) Tratamento de interrupções e exceções",
    alternativaB : "b) Desfragmentar o disco",
    alternativaC : "c) Criação e eliminação de processos e threads",
    alternativaD : "d) Sincronização e comunicação entre processos e threads",
    correta      : "b) Desfragmentar o disco",
    escolhida    : "",
}

const q5 = {
    pergunta     : "São características da arquitetura CISC, exceto:",
    alternativaA : "a) Instruções com formato fixo",
    alternativaB : "b) Muitas instruções",
    alternativaC : "c) Arquitetura com poucos registradores",
    alternativaD : "d) Pouco uso da técnica de pipelining",
    correta      : "a) Instruções com formato fixo",
    escolhida    : "",
}

const q6 = {
    pergunta     : "Alguns sistemas operacionais possuem diferentes organizações de arquivos. Neste caso, cada arquivo criado deve seguir um modelo suportado pelo sistema de arquivos. As organizações mais conhecidas e implementadas são:",
    alternativaA : "a) Indexada, sequencial e randômica",
    alternativaB : "b) Sequencial, randômica e relativa",
    alternativaC : "c) Indexada, sequencial e relativa",
    alternativaD : "d) Indexada, sequencial, randômica e relativa",
    correta      : "c) Indexada, sequencial e relativa",
    escolhida    : "",
}

const q7 = {
    pergunta     : "São vantagens dos sistemas com múltiplos processadores, exceto:",
    alternativaA : "a) Desempenho",
    alternativaB : "b) Escalabilidade",
    alternativaC : "c) Sincronização",
    alternativaD : "d) Relação custo/benefício",
    correta      : "c) Sincronização",
    escolhida    : "",
}

////////////////////////////////////////// TAGS COM AS DIVS PARA MUDAR AS TELAS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const questoes = [q1, q2, q3, q4, q5, q6, q7] // vetor com os objetos de perguntas                                                    /////
                                                                                                                                     /////
const nome = document.getElementById('caixa-txt-nome')// pega o conteúdo 'nome'                                                     /////
                                                                                                                                   /////
const mostra = document.getElementById('conteudo-principal') // tela das questões                                                 /////
                                                                                                                                 /////
const cronom = document.getElementById('conteudo-cronometro') // espaço onde vai aparecer o cronômetro                          /////
                                                                                                                               /////                                                                                     
const temp = document.getElementById('temporaria') // espaço de aviso temporário                                              /////
                                                                                                                             /////
const mostraFinal = document.getElementById('conteudo-final') //conteúdo final, que só aparece ao clicar o botão 'finalizar'/////
                                                                                                                           /////
const aviso = document.getElementById('aviso') // tela de aviso ao clicar em inserir questão                              /////
                                                                                                                         /////
const gabarito = document.getElementById('conteudo-gabarito') // conteúdo para ir para a prox questão                   /////
                                                                                                                       /////
const prox = document.getElementById('conteudo-proxima')                                                              /////         
                                                                                                                     /////
const conteudoRanking = document.getElementById("conteudo-ranking");                                                /////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var iQ = 0; //variável índice que controla a passagem de próxima questão
var pontuacao = 0;///variável para pontuação

///////////////////////////////////////////////////EMBARALHA ELEMENTOS DO VETOR DE QUESTÕES\\\\\\\\\\\\\\\\\\\
function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}
questoesRamdom = shuffleArray(questoes);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var VetorRanking = [];

function iniciaJogo(){
    if (nome.value == ''){
        nome.style.backgroundColor = "#ffbfaa";
    }
    else{
        temp.innerHTML = '';              //limpa o conteúdo ao clicar no botão 'play'
        cronom.innerHTML += `<img src="clock.png" id = "clock"/>`//imagem do relógio do cronômetro
        cronom.innerHTML += `<h3 id = "counter">00:00:00</h3><br>`//cria um parágrafo para o cronômetro
        start(mostraPerguntas())        //inicia o cronômetro ao clicar no 'play' // chama a próxima questão     
    }
}

function mostraPerguntas(){

    iQ++;
    let i = iQ;
    if(iQ == questoesRamdom.length){
        prox.innerHTML += `<input  id = "button" type = "button" value = "Finish" onclick = "finalJogo()"></input>` //botão finalizar;
    }else{
        prox.innerHTML= cronom.innerHTML
        prox.innerHTML+=`<br><span><br>&nbsp${i} - ${questoesRamdom[i].pergunta}<br><br></span> 
                         <p onclick = "verificaCorreta(this, mostraPerguntas())">${questoesRamdom[i].alternativaA}</p>
                         <p onclick = "verificaCorreta(this, mostraPerguntas())">${questoesRamdom[i].alternativaB}</p>
                         <p onclick = "verificaCorreta(this, mostraPerguntas())">${questoesRamdom[i].alternativaC}</p>
                         <p onclick = "verificaCorreta(this, mostraPerguntas())">${questoesRamdom[i].alternativaD}</p><br>`
    }
}

function verificaCorreta(elemento){
    if(elemento.textContent == questoesRamdom[iQ-1].correta){
        pontuacao++;
        questoesRamdom[iQ-1].escolhida = elemento.textContent;
    }else{
        questoesRamdom[iQ-1].escolhida = elemento.textContent;
    }
}

function finalJogo(){   

    var porcentagem = (pontuacao * 100) / (questoesRamdom.length-1);

    mostra.innerHTML += ''; // limpa a tela das questões
    let mostraTempo = finaliza() // pega o valor que o cronômetro está marcando e manda para a variável

    mostraFinal.innerHTML =`<article><br>Congratulations ${nome.value}, your score was ${porcentagem.toFixed(0)}%
                            and your final time was ${mostraTempo}.<br>
                            <br>Click 'View Ranking' if you want to see your ranking position.<br>
                            <br>Click 'View Feedback' if you want to see the right and wrong answers.<br><br>
                            </article><br>`;
    mostraFinal.innerHTML +=`<input type = "button" id = "button" value = "View Ranking" onclick = "abreRanking()"></input>`
    mostraFinal.innerHTML +=`<input type = "button" id = "button" value = "View feedback" onclick = "abreGabarito()"></input>`

    VetorRanking.push(
        {
            nome: nome.value,
            porcentagem: porcentagem,
            tempo: mostraTempo
        }
    )

}

function abreGabarito(){
    mostraFinal.innerHTML = '';
    for (let i = 1; i < questoesRamdom.length; i++){
        gabarito.innerHTML +=`<br><span><br>&nbsp${i} - ${questoesRamdom[i].pergunta}<br><br></span>`
        if (questoesRamdom[i].escolhida == questoesRamdom[i].correta){
            gabarito.innerHTML += `<p id = "correta">  &nbsp ${questoesRamdom[i].correta}<br></p>`
        }else{
            gabarito.innerHTML += `<p id = "errada">  &nbsp ${questoesRamdom[i].escolhida}<br></p>`
            gabarito.innerHTML += `<p id = "correta">  &nbsp ${questoesRamdom[i].correta}<br></p>`
        }
    }
    gabarito.innerHTML += ` <input type = "button" id = "button" value = "View Ranking" onclick = "abreRanking()"></input>`
}

function ordenarRanking(){
    VetorRanking.sort((a,b)=>{
        if (a.porcentagem < b.porcentagem){
            return 1;
        }
        else if (a.porcentagem > b.porcentagem){
            return -1;
        }
        if (a.tempo < b.tempo){
            return -1;
        }
        else if (a.tempo > b.tempo){
            return 1;
        }
        return 0;
    });
}

function abreRanking(){
    ordenarRanking();
    console.log(VetorRanking)
    mostraFinal.innerHTML = '';
    gabarito.innerHTML = '';
    for (let i = 0; i < VetorRanking.length; i++){
        conteudoRanking.innerHTML +=` <article><br>${i+1} - ${VetorRanking[i].nome}&nbsp &nbsp &nbsp &nbsp Score: ${VetorRanking[i].porcentagem.toFixed(0)}%&nbsp &nbsp &nbsp &nbsp    
        Final time: ${VetorRanking[i].tempo}.<br><br>`
    }
}

/////////////////////////////////////////////////////// FUNÇÕES DO CRONÔMETRO \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var hh = 0;
var mm = 0;
var ss = 0;
var tempo = 1000; //1 milésimo vale 1 segundo
var cron;
var tempoFinal;

function start(){
    cron = setInterval(() => {timer();}, tempo);
}

function finaliza(tempoFinal){
    clearInterval(cron);
    tempoFinal = (hh < 10 ? '0' + hh : hh) +':' + (mm <10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    return tempoFinal; //a variável tempoFinal contém o tempo que o usuário levou para responder as questões.
                      //só armazena o tempo final quando o botão 'finalizar' é clicado.
}

function timer(){
    ss++;
    if(ss == 60 ){
        ss = 0;
        mm++;

        if (mm == 60){
            mm = 0;
            hh++;
        }
    }
    var format = '';
    format = (hh < 10 ? '0' + hh : hh) +':' + (mm <10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerHTML = format; 
}