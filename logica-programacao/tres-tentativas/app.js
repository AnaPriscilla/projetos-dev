/*1º É preciso criar uma variavel para o número secreto */
/* E atribuir um valor para ser o valor secreto a ser adivinhado*/
var numeroPensado = Math.round(Math.random() * 10);

var tentativas = 1;

var chute = document.querySelector("button"); 

function verifica() {
    while( tentativas <= 3) {
        var chute = parseInt(prompt("Digite o número:"));
        if(chute == numeroPensado) {
            alert("Você ACERTOU! 😎🎆🎇🎉🎊 o número pensado era " + numeroPensado);
            break;//Aqui quebra o númro de tentativa,quando o número é acertado.
        } else {
            alert("Você ERROU! 😪");
        } 
    
        tentativas++;
    }
}

var chuteButton = document.querySelector("button");

chuteButton.onclick = verifica;