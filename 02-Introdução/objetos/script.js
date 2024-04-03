var pessoa = {
  nome: "Leandro",
  sobrenome: "Xavier",
  cidade: "BH",
  idade: 26,
};

pessoa.informacao = function () {
  console.log(
    `Olá! Meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos e moro em ${this.cidade}.`
  );
};

pessoa.informacao();

var cachorro = {
  tipo: "Labrador",
  idade: 10,
  cor: "preto",
  latir(pessoa) {
    if (pessoa === 'homen') {
      return ("Latir");
    } else {
      return ("Sem ação");
    }
  },
};
