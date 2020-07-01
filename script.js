const $ = document.querySelector.bind(document)


function multiplicarValores() {
    var metro = $("#metro").value;
    var preco = $("#preco").value;

    var adicional = 0;
    var result = $("#result")



    metro = metro.replace(",", ".");
    preco = preco.replace(",", ".");





    Math.pow(metro, 2);
    var valorfinal = metro * preco


    result.value = valorfinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

}