let nome: string = "Wellington";
let idade: number = 20;
let ativo: boolean = true;
let hobbies: string[] = [
  "Cozinhar",
  "Jogos online",
  "Ouvir música",
  "Xadrez",
  "Desenhar",
];
let endereco: {
  pais: string;
  cidade: string;
  estado: string;
  ficaNoBrasil: boolean;
  cep: number;
  numero: number;
  complemento: string;
} = {
  pais: "Brasil",
  cidade: "Nova Iguaçu",
  estado: "RJ",
  ficaNoBrasil: true,
  cep: 12345678,
  numero: 180,
  complemento: "Casa",
};
console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
console.log(`Meus hobbies são: ${hobbies.join(", ")}`);
console.log(`O endereço: ${endereco.cidade} - ${endereco.estado} fica no ${endereco.pais}?,[${endereco.ficaNoBrasil}] e tem o CEP: ${endereco.cep}, o número: ${endereco.numero} e o complemento: ${endereco.complemento}`);
