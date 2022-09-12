import { caesarCipher } from "./caesarCipher";

test('casearCipher with all uppercase', () => {
    expect(caesarCipher('PIES')).toBe('KRVH');
});
