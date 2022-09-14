import { analyzeArray } from "./analyzeArray";

const exampleArray = [1, 2, 8]

test('sample check', () => {
    expect(analyzeArray(exampleArray)).toEqual({
        average: 3.6666666666666665,
        min: 1,
        max: 8,
        length: 3
    })
})

test('sample check 2', () => {
    expect(analyzeArray([2, 18, 25, 8])).toEqual({
        average: 13.25,
        min: 2,
        max: 25,
        length: 4
    })
})

test('string check', () => {
    expect(analyzeArray(['pies'])).toBe("not an array or not all values passed in array are numbers")
})

test('string check 2', () => {
    expect(analyzeArray(['pies', 2, 8])).toBe("not an array or not all values passed in array are numbers")
})

test('string check 3', () => {
    expect(analyzeArray(['1', 2, 8])).toBe("not an array or not all values passed in array are numbers")
})


