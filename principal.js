var idade =10;


function verificaIdade(idade){
if (idade < 18){
 console.log("Pessoa menor de idade");
  return idade;
}
 if(idade >= 18){
  console.log("Pessoa maior de idade");
   return idade;
 }
}
 console.log(verificaIdade(idade));

 var peso = 100;
 var altura = 1.80;

 function calculaImc(peso,altura) {
     var imc = 0;

     imc =peso / (altura*altura)

     if( imc <  18.5){
     console.log("Magreza");
     }else if (imc >= 18.5 && imc <= 24.9){
         console.log("Normal");
     }else if(imc >= 25.0 && imc <= 29.9){
         console.log("Sobrepeso");
     }else if (imc >= 30.0 && imc <= 39.9){
         console.log("Obesidade");
     }else{
         console.log("Obesidade grave");
     }
     return imc.toFixed(2);
     
 }
console.log(calculaImc(peso,altura));


var gasolina = 30;
var alcool = 5;

function verificaCombustivel(gasolina, alcool){
 var vrc= alcool/gasolina;
 var calc = vrc - (vrc*1.7)

 if(vrc >= calc ){
     console.log("A melhor opção é abastecer com gasolina");
 }else{
     console.log("A melhor opção é abstecer com alcool");
 }
}
console.log(verificaCombustivel());