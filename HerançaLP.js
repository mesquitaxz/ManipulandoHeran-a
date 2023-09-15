class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  }
  
  let pessoa = new Pessoa('João Pedro', 16);
  pessoa.apresentar(); // Olá, meu nome é João e eu tenho 16 anos.