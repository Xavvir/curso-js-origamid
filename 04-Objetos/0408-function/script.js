// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const todosP = document.querySelectorAll("p");

const totalCaracteres = Array.prototype.reduce.call(
  todosP,
  (acc, item) => {
    return acc + item.innerText.length;
  },
  0
);

console.log(`Total de ${totalCaracteres} caracteres`);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHtml = conteudo) : null; // TERNÁRIO = SE EXISTIR CONTEUDO, EXECUTA innerHtml, SE NÃO, RETORNA NULL
  return elemento;
}

console.log(criarElemento("li", "ativa", "adfsasdf asdfasdf asdfadsf"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const criaH1 = criarElemento.bind(null, "h1", "titulo");

console.log(criaH1('curso de '));
