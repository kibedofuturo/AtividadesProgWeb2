const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btnReset = document.getElementById('btn-reset');
const lbl1 = document.getElementById('lbl1');
const lbl2 = document.getElementById('lbl2');
const maxTurns = 10;
let currentTurn = 1;
btn2.disabled = true;

const roll = () => {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

const rollPlayer1 = () => {
    const result = roll();
    lbl1.innerHTML = result;
    console.log(`jogador 1:  ${result}`);
    btn1.disabled = true;
    btn2.disabled = false;
    return result;
}

const rollPlayer2 = () => {
    const result = roll()
    lbl2.innerHTML = result;
    console.log(`jogador 2: ${result}`)
    btn2.disabled = true;
    btn1.disabled = false;
    return result;
}

const gamePlay = (resultPlayer1, resultPlayer2) => {
    
    switch (true) {
        case (resultPlayer1 > resultPlayer2):
            setTimeout(alert('O player 1 ganhou:'), 3000);
            break;
        case (resultPlayer1 < resultPlayer2):
            setTimeout(alert('play 2 win'), 3000);
            break;
        case (resultPlayer1 === resultPlayer2):
            setTimeout(alert('empate'), 3000);
            break;
        default:
            // caso nenhuma das condições acima seja atendida
            break;
    }
    
    currentTurn++;
    
    if (currentTurn > maxTurns) {
        btn1.disabled = true;
        btn2.disabled = true;
        btnReset.disabled = false;
    }
}

const resetGame = () => {
    currentTurn = 1;
    lbl1.innerHTML = '';
    lbl2.innerHTML = '';
    btn1.disabled = false;
    btn2.disabled = true;
    btnReset.disabled = true;
}

btn1.onclick = () => {
    rollPlayer1();
};

btn2.onclick = () => {
    let resultPlayer1 = rollPlayer1();
    let resultPlayer2 = rollPlayer2();
    gamePlay(resultPlayer1,resultPlayer2);
};

btnReset.onclick = resetGame;