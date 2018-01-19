
var listaNotas = [];

function atualizarSecaoNotas(secao) {

    var addNotasHtml = "";

    // console.log(listaNotas);
    
    for (var index = 0; index < listaNotas.length; index++) {
        
        addNotasHtml += '<div class="note">' + '<button onclick="excluirNota(secao)">' +
        '<i class="fa fa-times" aria-hidden="true"></i>' +
        '</button>' +
        '<h2 class="note__title">' + listaNotas[index].titulo + '</h2>' +
        '<p class="note__body">' + listaNotas[index].texto + '</p>' +
        '</div>';

    }

    secao.innerHTML = addNotasHtml;
}


function onDoneClick(form, secao, inputTitulo, txtareaTexto) {
    
    // console.log(inputTitulo.value);

    var nota = {
        titulo: inputTitulo.value,
        texto: txtareaTexto.value
    };

    // add nota na lista de notas
    listaNotas.push(nota);

    atualizarSecaoNotas(secao);

    form.reset();
}


function excluirNota() {

}