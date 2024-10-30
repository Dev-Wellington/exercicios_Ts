enum DiasSemana {
  Segunda = "Segunda-feira",
  Terca = "Terça-feira",
  Quarta = "Quarta-feira",
  Quinta = "Quinta-feira",
  Sexta = "Sexta-feira",
  Sabado = "Sábado",
  Domingo = "Domingo",
  Natal = "Natal",
  AnoNovo = "Ano Novo",
  Carnaval = "Carnaval",
  Independencia = "Independência do Brasil",
  aniversario = "Seu aniversário",
}
const ehFimDeSemana = (dia: DiasSemana): boolean => {
  return dia === DiasSemana.Sabado || dia === DiasSemana.Domingo;
};

const feriadoOuAniversario = (dia: DiasSemana): boolean => {
  if (
    dia === DiasSemana.Natal ||
    dia === DiasSemana.AnoNovo ||
    dia === DiasSemana.Carnaval ||
    dia === DiasSemana.Independencia
  ) {
    return true;
  }
  return dia === DiasSemana.aniversario;
};

console.log(ehFimDeSemana(DiasSemana.Domingo)); // true
console.log(ehFimDeSemana(DiasSemana.Quinta)); // false

console.log(feriadoOuAniversario(DiasSemana.Natal)); 
console.log(feriadoOuAniversario(DiasSemana.Segunda)); 
console.log(feriadoOuAniversario(DiasSemana.aniversario)); 