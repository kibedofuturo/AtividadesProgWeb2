const button = document.getElementById("button");
const lable = document.getElementById("dice-value");

const roll = () => {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

button.addEventListener('click', () => {
    console.log(roll());
    lable.textContent = roll();
});