const dividir = require('./dividir');

test('dividir 10 / 2 deve ser igual a 5', () => {
    expect(dividir(10, 2)).toBe(5);
});

test('dividir 9 / 3 deve ser igual a 3', () => {
    expect(dividir(9, 3)).toBe(3);
});

test('dividir -9 / -3 deve ser igual a 3', () => {
    expect(dividir(-9, -3)).toBe(3);
});

test('dividir -9 / 3 deve ser igual a -3', () => {
    expect(dividir(-9, 3)).toBe(-3);
});

test('dividir 1 / 0 deve lançar erro', () => {
    expect(dividir(1, 0)).toBe("Não é possível dividir por zero");
});
