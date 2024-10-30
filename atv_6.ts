const buscarDados = (tempo: number): Promise<string> =>{
  return new Promise(resolve => {
    setTimeout(() => resolve(`Dados carregados em ${tempo}ms`), tempo);
  });
}

const exibirDados = async (tempo: number) => {
  const dados = await buscarDados(tempo);
  console.log(dados);
}

exibirDados(10000);
exibirDados(2000);
exibirDados(3000);
exibirDados(4000);
exibirDados(500);
exibirDados(2500);