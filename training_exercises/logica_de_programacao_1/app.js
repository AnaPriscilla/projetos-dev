//Preciso declarar a variavel
//Logo depois preciso chamar o doc através da função querySeletor, a tag que preciso!
//No parâmetro passo o nome da tag 
var input = document.querySelector("input");

//Crio uma função armazenar o texto digitado em um parâmetro
//É armazenado então e lançado via alert pelo navegador, após o usuário acionar o button
function exibeTexto() {
    alert(input.value);
    //Aqui limpa o campo após a ação ser finalizada.
    input.value = "";
}

//Crio essa variavel para chamar a tag button para acionar o alert
var button = document.querySelector("button");
//Aqui indica para o javascript que pode exibir o que foi armazenado no exibeTexto após o usuário 
// realizar a ação declinar no botão.
button.onclick = exibeTexto;