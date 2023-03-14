var hora = 12
var nome 
var idade = Number(idade);
var textoSaudacao = "";
var textoIdade = "";

nome = ('Escreva seu nome: ')
idade = ('Escreva sua idade: ')

if(isNaN(idade) == true){
    alert('Use números!!!!')   
}else if(nome.length == 0 || idade.length == 0){
    alert('Não deixe em branco!!!!')
}else {
    statusIdade();
    statusSaudacao();  
    document.write(textoSaudacao + ', <b>' + nome.toUpperCase() + '</b> <br>' + 'Você tem <b>' + idade.toUpperCase() + '</b> anos de idade. <br> Você é considerado ' + textoIdade + ".") 

}

function statusIdade(){
    if(idade >= 0 && idade <= 9){
        textoIdade = "criança"
    }else if(idade >= 10 && idade <= 20){
        textoIdade = "jovem"
    }else if (idade >= 21 && idade <= 64) {
        textoIdade = "adulto"
    }else{
        textoIdade = "idoso"
    }
}
function statusSaudacao(){
    if(hora >= 0 && hora <= 11){
        textoSaudacao = "Bom dia"
    }else if(hora >= 12 && hora <= 17){
        textoSaudacao = "Boa tarde"
    }else if (hora >= 18 && hora <= 23) {
        textoSaudacao = "Boa noite"
    }
}
