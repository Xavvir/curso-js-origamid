var numero = 20;
var numero2 = 10;

numero += numero2; // numero = numero + numero2
console.log(numero);
console.log(numero2);

var idade = 20;
var naoPossuiDiabetes = true;

var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? `Idade ${idade}, então você pode beber` : 'Você não pode beber';

console.log(podeBeber)

var possuiFaculdade = false;

if(possuiFaculdade)
  console.log('Sim possui');
else
  console.log('Não possui')