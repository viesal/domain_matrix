export function getRandomColor() {
    const num = Math.random()*(255**3);
    const r = Math.ceil(num % 255);
    const g = Math.ceil(((num-r)/255)%255);
    const b = Math.ceil(((((num-r)/255)-g)/255)%255);
    return `#${dec2hex(r)}${dec2hex(g)}${dec2hex(b)}`
}

function dec2hex(decNum) {
    let hexNum = decNum.toString(16);
    if (hexNum.length === 1){
        hexNum = `0${hexNum}`;
    }
    return hexNum
}