function decimalToHexString(number) {
    if (number < 16) return "0" + number.toString(16).toUpperCase();

    let numHEX = number.toString(16).toUpperCase();

    if (numHEX.length < 2) return numHEX + "0";

    return numHEX;
}

function generateRandomHEXColor() {
    let red = decimalToHexString(parseInt((Math.random() * 255).toFixed(0)));
    let green = decimalToHexString(parseInt((Math.random() * 255).toFixed(0)));
    let blue = decimalToHexString(parseInt((Math.random() * 255).toFixed(0)));

    return `#${red}${blue}${green}`;
}

function generateRandomRGBColor() {
    let red = (Math.random() * 255).toFixed(0);
    let green = (Math.random() * 255).toFixed(0);
    let blue = (Math.random() * 255).toFixed(0);

    return `RGB(${red},${blue},${green})`;
}

const winStreakParagraph = document.getElementById("messaggio-risultato");
let winStreak = 0;
// for real-time variable change
const variableHandler = {
    set(target, property, value) {
        target[property] = value;
        winStreakParagraph.textContent = value;
        return true;
    },
};
// accessible with winStreakMonitored.value
const winStreakMonitored = new Proxy({ value: winStreak }, variableHandler);

function handleButtonClick(evt) {
    alert(evt.currentTarget.isWin ? "YOU WON!" : "YOU LOSE...");
    winStreakMonitored.value = evt.currentTarget.isWin ? winStreakMonitored.value + 1 : 0;
}

function main() {
    const winningColor = generateRandomHEXColor();

    const colorHTMLElement = document.getElementById("codice-da-indovinare");
    const colorOptions = document.getElementsByClassName("quadrato-colore");

    const winningButton =
        Array.from(colorOptions)[parseInt((Math.random() * 4).toFixed(0))];

    winStreakParagraph.textContent = winStreakMonitored.value;
    colorHTMLElement.textContent = winningColor;

    Array.from(colorOptions).forEach((button) => {
        const color = generateRandomHEXColor();
        button.style.backgroundColor = color;

        button.removeEventListener("click", handleButtonClick);

        if (button === winningButton) {
            button.style.backgroundColor = winningColor;
            button.addEventListener("click", handleButtonClick, false);
            button.isWin = true;
        } else {
            button.addEventListener("click", handleButtonClick, false);
            button.isWin = false;
        }
    });
}

main();
