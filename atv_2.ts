const saudacao = (
  nome: string,
  idade?: number,
  cidade?: string,
  estado?: string,
  sorte?: boolean
): string => {
  let mensagem = `Olá, ${nome}!\n`;
  if (idade) {
    mensagem += ` Você tem ${idade} anos.\n`;
  }
  if (idade !== undefined && idade > 18 && sorte === true) {
    mensagem += `Você está com sorte a ${idade} anos!\n`;
  }
  if (cidade && estado) {
    mensagem += ` Você mora em ${cidade} - ${estado}.\n`;
  }
  if (sorte !== undefined) {
    mensagem += ` Você está com sorte hoje? : ${
      sorte ? "Sim, comemore" : "Não, pense no amanhã"
    }.\n`;
  }
  return mensagem;
};
console.log(saudacao("Alice"));
console.log(saudacao("Bob", 30));
console.log(saudacao("Carlos", 40, "São Paulo", "SP"));
console.log(saudacao("Daniel", 50, "Rio de Janeiro", "RJ", true));
console.log(saudacao("Eduardo", 60, "Curitiba", "PR", false));
