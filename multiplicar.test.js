const multiplicar = require('./multiplicar');

test('mutiplicar 3 * 4 deve ser igual a 12',() => {
    expect(multiplicar(3,4)).toBe (12)
})
test('mutiplicar -1 * -1 deve ser igual a 1',() => {
    expect(multiplicar(-1,-1)).toBe (1)
})

test('mutiplicar 0 * 5 deve ser igual a 0',() => {
    expect(multiplicar(0,5)).toBe (0)

})
