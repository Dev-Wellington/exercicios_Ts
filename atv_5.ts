class Animal {
  nome: string;
  som: string;
  constructor(nome: string, som: string) {
    this.nome = nome;
    this.som = som;
  }
  emitirSom(): string {
    return `${this.nome} faz ${this.som}`;
  }
}

class Cachorro extends Animal {
  raca: string;
  constructor(nome: string, som: string, raca: string) {
    super(nome, som);
    this.raca = raca;
  }
  
  latirForte(): void {
    switch (this.raca) {
      case "Labrador":
        this.som = "Au Au";
        break;
      case "Chihuahua":
        this.som = "aU aU";
        break;
        case "Pitbull":
        this.som = "AU AU AU";
      default:
        this.som = "au au";
        break;
    }
  }
}

const rex = new Cachorro("Rex", "au au", "Chihuahua");
const toto = new Cachorro("Toto", "au au", "Labrador");
const pit = new Cachorro("Pit", "au au", "Pitbull");
const viraLata = new Cachorro("Vira Lata", "au au", "Vira Lata");


console.log('\n')
rex.latirForte();
console.log(rex.emitirSom());
console.log(`Raça: ${rex.raca}\n`);

toto.latirForte();
console.log(toto.emitirSom());
console.log(`Raça: ${toto.raca}\n`);

pit.latirForte();
console.log(pit.emitirSom());
console.log(`Raça: ${pit.raca}\n`);

viraLata.latirForte();
console.log(viraLata.emitirSom());
console.log(`Raça: ${viraLata.raca}\n`);