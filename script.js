
function limpar(){
    console.log("Esta limpando");
}

function calcular(){
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value
    
    var imc = peso / altura **2
    console.log(imc)
    var text = ""
    if (imc<18.5) {
       text = ("Você está magro")
    }else if(imc<24.9){
        text = ("Você está normal")
    }else if(imc<29.9){
        text = ("Você está acima do peso")
    }else if(imc<39.9){
        text = ("Você está com obesidade")
    }else if(imc>39.9){
        text = ("Você está com obesidade mórbida")
    }
    document.getElementById("story").innerText = text
}