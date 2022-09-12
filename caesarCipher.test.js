import { caesarCipher } from "./caesarCipher";

test('casearCipher with all uppercase', () => {
    expect(caesarCipher('PIES1')).toBe('KRVH1');
});

test('casearCipher with mixed case', () => {
    expect(caesarCipher('pIeS 1')).toBe('kRvH 1');
});

test('casearCipher with number only', () => {
    expect(caesarCipher('123')).toBe('123');
});

test('casearCipher with float', () => {
    expect(caesarCipher('.123')).toBe('.123');
});

test('casearCipher with string and float', () => {
    expect(caesarCipher('chleb .123')).toBe('xsovy .123');
});
