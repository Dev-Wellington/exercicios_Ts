const filtrarPrecosAltos = (precos: number[]): string[] => {
    return precos
        .map((preco) => preco * 3)
        .filter((preco) => preco > 87)
        .map((preco) => `R$${preco.toFixed(2)}`);
};

console.log(filtrarPrecosAltos([50, 150, 200, 30]));
