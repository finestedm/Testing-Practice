import { add, subtract, multiply, divide } from "./calculator";

// add

test('add number', () => {
    expect(add(1, 2)).toBe(3)
})

test('add number but floats', () => {
    expect(add(.1, .2)).toBeCloseTo(.3)
})

test('add number 2', () => {
    expect(add(1 + 3, 2)).toBe(6)
})

test('add number but string', () => {
    expect(add('pies', 2)).toBe("only number are accepted as input")
})

// subtract

test('subtract number', () => {
    expect(subtract(1, 2)).toBe(-1)
})

test('subtract number but floats', () => {
    expect(subtract(.1, .2)).toBeCloseTo(-.1)
})

test('subtract number 2', () => {
    expect(subtract(1 + 3, 2)).toBe(2)
})

test('subtract number but string', () => {
    expect(subtract('pies', 2)).toBe("only number are accepted as input")
})

// multiply

test('multiply number', () => {
    expect(multiply(2, 4)).toBe(8)
})

test('multiply number but floats', () => {
    expect(multiply(.2, .4)).toBeCloseTo(.08)
})

test('multiply number 2', () => {
    expect(multiply(1 + 3, 2)).toBe(8)
})

test('multiply number but string', () => {
    expect(multiply('pies', 2)).toBe("only number are accepted as input")
})

// divide

test('divide number', () => {
    expect(divide(2, 4)).toBe(.5)
})

test('divide number 2', () => {
    expect(divide(1 + 3, 2)).toBe(2)
})

test('divide number but string', () => {
    expect(divide('pies', 2)).toBe("only number are accepted as input")
})

test('divide number but b = 0', () => {
    expect(divide(3, 0)).toBe("Congrats, you've just created a new black hole...")
})