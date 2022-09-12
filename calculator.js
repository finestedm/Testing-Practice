export function add(a, b) {
    return (typeof a === 'number') && (typeof b === 'number')
        ? a + b
        : "only number are accepted as input"
}

export function subtract(a, b) {
    return (typeof a === 'number') && (typeof b === 'number')
        ? a - b
        : "only number are accepted as input"
}

export function multiply(a, b) {
    return (typeof a === 'number') && (typeof b === 'number')
        ? a * b
        : "only number are accepted as input"
}

export function divide(a, b) {
    if ((typeof a === 'number') && (typeof b === 'number')) {
        return b !== 0 ? a / b : "Congrats, you've just created a new black hole..."
    } else {
        return "only number are accepted as input"
    }
}

