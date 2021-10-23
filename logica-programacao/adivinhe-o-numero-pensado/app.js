/*1º É preciso criar uma variavel para o número secreto */
/* E atribuir um valor para ser o valor secreto a ser adivinhado*/
var numeroSecreto = 8;

/*2º Agora preciso pegar a tag do mundo html para que o javascript
possa identificar qual é a tag que precisa trabalhar, para isso
utiliza-se o método do Js a querySelector*/
var tagInput = document.querySelector("input"); 
//3º Aqui eu indico a tag - passo por parâmetro melhor falando


/*4º O próximo passo é criar a função que irá verificar o que o
usuário vai indicar como palpite 
4.1 - Lembre-se de ao criar a função passar o parâmetro -> ()*/
function verifica(){
    /*5º É preciso utilizar o nomedavariavel.value, pois é ele
    que vai indicar qual foi o valor que o usuário digitou*/
    if(tagInput.value == numeroSecreto) {
        alert("VOCÊ ACERTOU!!! Parabéns 👏🎉🎊✨");
    } else {
        alert("ERROU 😥 Tente novamente! Não desista!!!");
    }
}

/*6º Depois da função devidamente criada é preciso
 mais uma vez pegar o comando do botão no mundo html e
 para isso! precisamos indicar qual é a tag do botão*/
 var tagButton = document.querySelector("button");

 /*7º Aqui precisamos indicar a ação de verificar*/
 tagButton.onclick = verifica;

