//function areaQuadrado(lado) {
//  return lado * lado;
//}
//
//console.log(areaQuadrado(10));
//
//function pi() {
//  return 3.14;
//}
//var total = 5 * pi(); // 15.7
//
//console.log(pi());

//function imc(peso, altura) {
//  var imc = peso / (altura * altura);
//  return imc;
//}
//
//console.log(imc(93, 1.73));

//function corFavorita(cor) {
//  if(cor === 'azul') {
//    return 'Eu gosto do céu';
//  } else if (cor === 'verde') {
//    return 'Eu gosto de mato';
//  } else {
//    return 'Eu não gosto de cores';
//  }
//}
//
//function mostraConsole() {
//  console.log('Oi')
//}
//
//addEventListener('click', mostraConsole);
//
//function imc2(peso, altura) {
//  const imc = peso / (altura ** 2);
//  console.log(imc);
//}
//
//imc2(20, 1.8); // undefined
//console.log(imc2(1000, 1.80)); // retorna o imc e undefined
//
//

idade = 61

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por favor preencha um número'
  } else if(idade >= 60) {
    return 'Você está na terceira idade';
  } else {
    return 'Você não está na terceira idade';
  }
}

console.log(terceiraIdade('a'));
//
//var totalPaises = 193;
//function faltaVisitar(paisesVisitados) {
//  return `Falta visitar ${totalPaises - paisesVisitados} países`;
//}
//
//console.log(totalPaises);
//
//var profissao = 'Designer';
//
//function dados() {
//  var nome = 'André';
//  var idade = 28;
//  function outrosDados() {
//    var endereco = 'Rio de Janeiro';
//    var idade = 29;
//    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
//  }
//  return outrosDados();
//}
//
//console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//
//// Crie uma função para verificar se um valor é Truthy 
// 
//// Crie uma função matemática que retorne o perímetro de um quadr
//// lembrando: perímetro é a soma dos quatro lados do quadrado 
// 
//// Crie uma função que retorne o seu nome completo 
//// ela deve possuir os parâmetros: nome e sobrenome 
// 
//// Crie uma função que verifica se um número é par 
// 
//// Crie uma função que retorne o tipo de 
//// dado do argumento passado nela (typeof) 
// 
//// addEventListener é uma função nativa do JavaScript 
//// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
//// utilize essa função para mostrar no console o seu nome complet
//// quando o evento 'scroll' ocorrer. 
//
//