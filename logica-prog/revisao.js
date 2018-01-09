
var clientes = [];

function cadastrarCliente() {

    event.preventDefault();

    // var nome = document.getElementById('nome').value;
    // var idade = document.getElementById('idade').value;
    // var resultado;


    // if (idade >= 18) {
    //     resultado = 'maior de idade';
    // } else {
    //     resultado = 'menor de idade';
    // }

    // var cli = {
    //     nome: nome,
    //     idade: idade
    // }

    var objNome = document.getElementById('nome');
    var objIdade = document.getElementById('idade');

    var cli = new Object();
        cli.nome = objNome.value;
        cli.idade = objIdade.value;

        clientes.push(cli);

        objNome.value = '';
        objIdade.value = '';

    // console.log(clientes);

    for ????

    // document.getElementById('resultado').innerHTML = "<p>"+resultado+"<p>";

    // var txt = "";
    // txt += "<p class='paragrafo'>";
    // txt += resultado;
    // txt += "</p>";

    // document.getElementById('resultado').innerHTML = txt;
}