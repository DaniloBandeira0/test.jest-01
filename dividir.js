function dividir(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero";
    }
    return parseFloat(a) / parseFloat(b);
}

module.exports = dividir;
