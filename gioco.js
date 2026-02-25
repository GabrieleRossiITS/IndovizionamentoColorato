function decimalToHexString(number) {

    if(number < 16) return "0" + number.toString(16).toUpperCase();

    let numHEX = number.toString(16).toUpperCase();

    if(numHEX.length < 2) return numHEX + "0"

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


const colorHTMLElement = document.getElementById("codice-da-indovinare");
colorHTMLElement.textContent = generateRandomHEXColor()

const colorOptions = document.getElementsByClassName("quadrato-colore");

Array.from(colorOptions).forEach((button) => {
    const color = generateRandomHEXColor();
    button.style.backgroundColor = color;
    console.log(color)
});