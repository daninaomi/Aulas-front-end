var produtos = [

    {   
        name: "Puma Golf Raglan Tech Polo Tee",
        color: '<div class="color color-purple"></div>',
        size: "XXL",
        price: 72,
        qty: 3,
        image: {
            src: '"img/shirt.jpg"',
            alt: "purple shirt"
        },
        cod: 11
    },

    {   
        name: "Nike Men's Running Shoes",
        color: '<div class="color color-orange"></div>',
        size: "43",
        price: 129,
        qty: 1,
        image: {
            src: '"img/shoes.jpg"',
            alt: "running shoes"
        },
        cod: 12
    },

    {   
        name: "DC Men's Axis Snowboard Jacket",
        color: '<div class="color color-blue"></div>',
        size: "S",
        price: 89,
        qty: 2,
        image: {
            src: '"img/jacket.jpg"',
            alt: "blue jacket"
        },
        cod: 13
    },
];

function listarProdutos() {

    event.preventDefault();

    var listarProdutos = "";
    var subtotal = 0;

    for (var x = 0; x < produtos.length; x++) {

        listarProdutos += ' <tr class="shop-cart-produto">';
        listarProdutos += '<td class="shop-cart-produto__cancel"> <img src="img/cancel.png" alt="cancel" /> </td>'
        listarProdutos += '<td class="shop-cart-produto__img"> <img src=' + produtos[x].image.src + '/> </td>'
        listarProdutos += '<td class="shop-cart-produto-description"> <div class="shop-cart-produto__name"> ' + produtos[x].name + '</div>';
        listarProdutos += '<div class="shop-cart-produto__details">' + '<br> COLOR: ' + produtos[x].color + ' SIZE: ' + produtos[x].size + ' </div> </td>';
        listarProdutos += '<td class="shop-cart-produto__price"> $' + produtos[x].price + ' x   </td>';
        listarProdutos += '<td> <input onchange="atualizarQty(this.id, this.value)" class="shop-cart-produto__qty" type="number" value="' + produtos[x].qty + '" id="' + produtos[x].cod + '"> =   </td>';
        listarProdutos += '<td class="shop-cart-produto__total" id="total-' + produtos[x].cod + '"> $' + produtos[x].price * produtos[x].qty + '</td> </tr> ';

        subtotal += (produtos[x].price * produtos[x].qty);
    }

    document.getElementById('produtos').innerHTML = listarProdutos;
    
    document.getElementById('subtotal').innerHTML = subtotal;

}

function atualizarQty(_cod, _qty) {
    
    for (var x = 0; x < produtos.length; x++) {

        if ( produtos[x].cod == _cod ) {
            
            produtos[x].qty = _qty;

            var totalProduto = produtos[x].price * produtos[x].qty;
            var codProd = 'total-'+ produtos[x].cod;

            document.getElementById(codProd).innerHTML = "R$ " + totalProduto;

            break;
        }
    }
}


// var dados = [
//     {
//         name: "Country"
//     },
//     {
//         name: "City"
//     },
//     {
//         name: "State/Region/Province"
//     }
// ];

// function dadosForm() {

//     event.preventDefault();

//     var dadosForm = "";

//     for (var x = 0; x < produtos.length; x++) {

//         dadosForm += '<input type="text" placeholder="' + dados[x].name + '" >';
//     }

//     document.getElementById('dados').innerHTML = dadosForm;

// }


// document.getElementById('produto1name').innerHTML = produtos[0].name ;
// document.getElementById('produto1descrip').innerHTML = "Color: " + produtos[0].color + " Size: " + produtos[0].size;
// document.getElementById('produto1price').innerHTML = " $ " + produtos[0].price ;
// document.getElementById('produto1qty').innerHTML = " " + produtos[0].qty ;
// document.getElementById('produto1img').innerHTML = " <img src=" + produtos[0].image.src + "/>";
// document.getElementById('produto1total').innerHTML = " $" + total.produto1;

// document.getElementById('produto2name').innerHTML = produtos[1].name;
// document.getElementById('produto2descrip').innerHTML = "Color: " + produtos[1].color + " Size: " + produtos[1].size;
// document.getElementById('produto2price').innerHTML = " $ " + produtos[1].price;
// document.getElementById('produto2qty').innerHTML = " " + produtos[1].qty;
// document.getElementById('produto2img').innerHTML = " <img src=" + produtos[1].image.src + "/>";
// document.getElementById('produto2total').innerHTML = " $" + total.produto1;

// document.getElementById('produto3name').innerHTML = produtos[2].name;
// document.getElementById('produto3descrip').innerHTML = "Color: " + produtos[2].color + " Size: " + produtos[2].size;
// document.getElementById('produto3price').innerHTML = " $ " + produtos[2].price;
// document.getElementById('produto3qty').innerHTML = " " + produtos[2].qty;
// document.getElementById('produto3img').innerHTML = " <img src=" + produtos[2].image.src + "/>";
// document.getElementById('produto3total').innerHTML = " $" + total.produto1;


// var total = {
//     produto1: produtos[0].price*produtos[0].qty,

//     produto2: produtos[1].price*produtos[1].qty,

//     produto3: produtos[2].price*produtos[2].qty,
// };



// var subtotal = total.produto1 + total.produto2 + total.produto3;

// document.getElementById('subtotal').innerHTML = subtotal;

