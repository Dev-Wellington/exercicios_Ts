interface Produto {
  nome: string;
  preco: number;
  disponivel: boolean;
  categoria?: string;
}

const filtrarDisponiveis = (
    produtos: Produto[]
): Produto[] => {
  return produtos.filter((produto) => produto.disponivel);
};

const filtrarCategoria = (
  produtos: Produto[],
  categoria: string
): Produto[] => {
  return produtos.filter((produto) => produto.categoria === categoria);
};

const produtos: Produto[] = [
  { nome: "Teclado", preco: 100, disponivel: true, categoria: "Teclados" },
  { nome: "Mouse", preco: 50, disponivel: false, categoria: "Mouses" },
  { nome: "Monitor", preco: 300, disponivel: true, categoria: "Monitores" },
];

console.log(filtrarDisponiveis(produtos));
console.log(filtrarCategoria(produtos, "Teclados"));
