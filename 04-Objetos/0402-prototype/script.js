// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade,
    this.nomeCompleto = function(){
        console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`)
    }
}

const leandro = new Pessoa('Leandro', 'Xavier', 26)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document



// Liste os construtores dos dados abaixo

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
