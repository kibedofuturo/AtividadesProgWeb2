const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btnReset = document.getElementById('btnReset');
const lbl1 = document.getElementById('lbl1');
const lbl2 = document.getElementById('lbl2');
const turnLbl = document.getElementById('turn');
const maxTurns = 10;
let currentTurn = 1;
let player1Win = 0;
let player2Win = 0;
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
            player1Win++
            setTimeout(alert('O jogador 1 venceu'), 3000);
            break;
        case (resultPlayer1 < resultPlayer2):
            player2Win++
            setTimeout(alert('O jogador 2 venceu'), 3000);
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
        resetGame()
        switch (true) {
            case (player1Win > player2Win):
                alert("O jogador 1 foi o campeão")
                break;
            case (player1Win < player2Win):
                alert("O jogador 2 foi o campeão")
                break;
            case (player1Win === player2Win):
                alert("O jogo terminou tem empate")
                break;
            default:
                break;
        }
    }
}

const resetGame = () => {
    currentTurn = 1;
    lbl1.innerHTML = '';
    lbl2.innerHTML = '';
    player1Win = 0;
    player2Win = 0;
    btn1.disabled = false;
    btn2.disabled = true;
    btnReset.disabled = true;
    turnLbl.innerHTML = currentTurn;
}

btn1.onclick = () => {
    rollPlayer1();
}

btn2.onclick = () => { 
    let resultPlayer1 = rollPlayer1();
    let resultPlayer2 = rollPlayer2();
    gamePlay(resultPlayer1,resultPlayer2);
    turnLbl.innerHTML = currentTurn;
}

btnReset.onclick = resetGame;
