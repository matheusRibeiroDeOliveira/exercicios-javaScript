//funçao para verificar a idade
/*function verificaIdade(idade){
    alert("A idade digitada é: "+idade);
    if(idade < 18){
        alert("Voce é menor de idade");
      }else{
        alert("Voce é maior de idade");
        }
}
document.querySelector("#botao").onclick = function(){
    let idade = document.querySelector("#idade").value;
    verificaIdade(idade);
}


let peso = 100;
let altura = 1.80;
let imc = 0;

function calculaImc(peso,altura){
    let imc = 0;
    imc = peso/ (altura*altura);
    if(imc < 18.5){
        console.log("Magreza");
     }else if (imc > 18.5 && imc < 24.9){
             console.log("Normal");
         
         }else if (imc > 25 && imc < 29.9){
             console.log("Sobrepeso");
         }else if ( imc > 30.0 && imc < 39.9){
             console.log("Obesidade");
         }else if ( imc > 40.0){
             console.log("Obesidade Grave");
         }
         
        }   
        document.querySelector("#botao").onclick = function(){
                
            let  peso= document.querySelector("#peso").value;
            let  altura= document.querySelector("#altura").value;
            calculaImc(peso,altura);
        }
    */
   
   function mostraNome (nome){
       alert("O nome da pessoa é: "+nome);
       
       


    document.querySelector("#botao").onclick = function(){
                
        let nome= document.querySelector("#nome").value;
        mostraNome(nome);
        
    }
   }
    
        
    
