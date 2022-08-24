let Cartas1;


//ARRAY DOS PASSAROS
const papagaios = [
    'papagaios1',
     'papagaios2',
      'papagaios3',
       'papagaios4',
        'papagaios5',   
         'papagaios6',      
          'papagaios7',
        ];

        let leque = [];
        let PrimeiraCarta;
        let SegundaCarta;
        let tentativas = 0;
        let acertou = 0;
        let temporizador = 0;
        
const validacaojogo = () => {
     if(isNaN(Cartas1) || Cartas1 < 4 || Cartas1 > 14 || (Cartas1 % 2 !== 0)){
            return true;
        }
        return false;
    }   

    const limparcartas = () => {
        PrimeiraCarta = undefined;
        SegundaCarta = undefined;   
    }

    const retornarcartas = () => {
    PrimeiraCarta.classList.remove('clicado');
    SegundaCarta.classList.remove('clicado');

    limparcartas();
    }

    const virarCarta = (carta) => {

        if(carta.classList.contains('clicado')){
            return;
        }



        if (PrimeiraCarta === undefined){
            PrimeiraCarta = carta;
            PrimeiraCarta.classList.add('clicado');
             }else{
                if(SegundaCarta === undefined){
                SegundaCarta = carta;
                SegundaCarta.classList.add('clicado');
                    tentativas++;
                    if(PrimeiraCarta.innerHTML === SegundaCarta.innerHTML){
                       acertou = acertou + 2;
                        limparcartas();

                        if(acertou === Cartas1){
                            alert(`Parabéns.Você ganhou o jogo!
                            Jogadas:${tentativas} jogadas. 
                            Tempo: ${temporizador} segundos.`);
                            const resetar = prompt("Deseja jogar novamente?");
                            if(resetar === "sim"){
                                location.reload();
                                Cartas1 = 0;
                            }else if(resetar === "não"){
                                alert("Obrigado por jogar!");
                            }
                           

                        }

                    }else{
                        setTimeout(retornarcartas, 500);
                    }

             }
            }
}

const sorteador = () => {
    return Math.random() - 0.5;
}

const loadcartas = () => {

    const ul = document.querySelector('.conteiner-cartas');
    for(let i = 0; i < leque.length; i++){

        ul.innerHTML = ul.innerHTML + `
        <li  class="carta" onclick="virarCarta(this)">
        <div class="face frente">
            <img src="./images/Loro.png">
        </div>
        <div class="face costas">
            <img src="./Cartas/${leque[i]}.gif">
        </div>
        </li> `;
    }
}

const tempinho = () => {
    temporizador++;

    const timer = document.querySelector('.timer');
    timer.innerHTML = temporizador;
}

const criarcartas = () => {
    for(let i = 0; i < (Cartas1/2); i++){
        let cartinha = papagaios[i];

        leque.push(cartinha);
        leque.push(cartinha);
    }

    leque.sort(sorteador);

    loadcartas();

    setInterval(tempinho, 1000)
}

const boasvindas = () => {
    Cartas1 = Number(prompt("Quantas cartas você quer?"));

    while (validacaojogo()){
        alert("Você digitou um valor inválido, tente novamente");
        boasvindas();
    }
    criarcartas();
}

boasvindas();