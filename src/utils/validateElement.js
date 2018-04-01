export function validateSizeMatrix(element) {
    if (element.value > 40) {
        element.value = 40;
    }
}

export function validateChance(element) {
    if (element.value > 0.99) {
        element.value = 0.99;
    }
}