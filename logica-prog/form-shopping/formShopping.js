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
    var totalGeral = 0;
    var subtotal = 0;

    for (var x = 0; x < produtos.length; x++) {
        
        subtotal += (produtos[x].price * produtos[x].qty);
        totalGeral += subtotal;

        listarProdutos += ' <tr class="shop-cart-produto">';
        listarProdutos += '<td class="shop-cart-produto__cancel"> <img src="img/cancel.png" alt="cancel" /> </td>'
        listarProdutos += '<td class="shop-cart-produto__img"> <img src=' + produtos[x].image.src + '/> </td>'
        listarProdutos += '<td class="shop-cart-produto-description"> <div class="shop-cart-produto__name"> ' + produtos[x].name + '</div>';
        listarProdutos += '<div class="shop-cart-produto__details">' + '<br> COLOR: ' + produtos[x].color + ' SIZE: ' + produtos[x].size + ' </div> </td>';
        listarProdutos += '<td class="shop-cart-produto__price"> $' + produtos[x].price + ' x   </td>';
        listarProdutos += '<td> <input onchange="atualizarQty(this.id, this.value)" class="shop-cart-produto__qty" type="number" value="' + produtos[x].qty + '" id="' + produtos[x].cod + '"> =   </td>';
        listarProdutos += '<td class="shop-cart-produto__total" id="total-' + produtos[x].cod + '"> $' + produtos[x].price * produtos[x].qty + '</td> </tr> ';

    }

    document.getElementById("produtos").innerHTML = listarProdutos;
    document.getElementById("total-geral").innerHTML = totalGeral ;

}

function atualizarQty(_cod, _qty) {

    var totalGeral = parseFloat(document.getElementById('total-geral').innerHTML);
    
    for (var x = 0; x < produtos.length; x++) {

        if ( produtos[x].cod == _cod ) {
            
            produtos[x].qty = _qty;

            var totalNovo = parseFloat(produtos[x].price * produtos[x].qty);
            var codProd = 'total-'+ produtos[x].cod;
            var totalAntigo = document.getElementById(codProd).innerHTML;

            // (TOTAL GERAL - TOTAL ANTIGO) + TOTAL NOVO

            totalGeral = (totalGeral - totalAntigo) + totalNovo;


            document.getElementById(codProd).innerHTML =  totalNovo.toFixed(2);
            document.getElementById('total-geral').innerHTML =  totalGeral.toFixed(2);

            break;
        }
    }
}



var dadosCliente = {
    address: { },
    contact: { }
}

function validateForm() {

    event.preventDefault();
    
    // if(validateAddress() && validateContact()) {
    //     console.log('validação está ok.. pode prosseguir');
    //     console.log(dadosCliente);
    // } else { 
    //     console.log('validação não passou.. preencher todos os campos');
    // };
    
    // console.log(validateAddress());
    // console.log(validateContact());

    // dadosCliente.contact = objContact;
}

function validateAddress( ) {

    // var retorno = false;

    objAddress = {
        country: document.getElementById('form-country').value,
        city: document.getElementById('form-city').value,
        state: document.getElementById('form-state').value,
        zip: document.getElementById('form-zip').value,
        ad1: document.getElementById('form-ad1').value,
        ad2: document.getElementById('form-ad2').value,
    };

    if ( objAddress.country == 0 ) {
        return false;
    } else if ( objAddress.city == 0 ) {
        return false;
    } else if ( objAddress.state.trim().length == 0 ) {
        return false;
    } else if ( objAddress.zip.trim().length == 0 ) {
        return false;
    } else if ( objAddress.ad1.trim().length == 0 ) {
        return false;
    } else if ( objAddress.ad2.trim().length == 0 ) {
        return false;
    } else {
        dadosCliente.address = objAddress;
        return true;
    };

}

function validateContact() {

    var shippingmethod = false;

    if (document.getElementById('form-ship1').checked) {
        var shippingmethod = document.getElementById('form-ship1').value;

    } else if (document.getElementById('form-ship2').checked) {
        var shippingmethod = document.getElementById('form-ship2').value;

    } else {
        return false;
    }

    
    objContact = {
        firstname: document.getElementById('form-firstname').value,
        lastname: document.getElementById('form-lastname').value,
        email: document.getElementById('form-email').value,
        phone: document.getElementById('form-phone').value,
        shippingmethod: shippingmethod
    }

    
    if ( objContact.firstname.trim().length == 0 ) {
        return false;
    } else if ( objContact.lastname.trim().length == 0 ) {
        return false;
    } else if ( objContact.email.trim().length == 0 ) {
        return false;
    } else if ( objContact.phone.trim().length == 0 ) {
        return false;
    } else {
        dadosCliente.Contact = objContact;
        return true;
    };

    console.log(shippingmethod);

}

// var dadosAddress = [
//     {
//         name: "Country"
//     },
//     {
//         name: "City"
//     },
//     {
//         name: "State/Region/Province"
//     },
//     {
//         name: "Zip Code"
//     },
//     {
//         name: "Address 1"
//     },
//     {
//         name: "Address 2"
//     }
// ];

// var dadosContact = [
//     {
//         name: "First Name"
//     },
//     {
//         name: "Last Name"
//     },
//     {
//         name: "E-mail"
//     },
//     {
//         name: "Phone"
//     }
// ];


// function dadosForm() {
    
//     event.preventDefault();

//     var dadosAdress = "";
    
//     for (var x = 0; x < dadosAddress.length; x++) {

//         dadosAdress += '<input type="text" value="' + dadosAddress[x].name + '" >';
        
//     }

//     document.getElementById('dadosAddress').innerHTML = dadosAdress;

//     var dadosContact = "";

//     for (var x = 0; x < dadosContact.length; x++) {

//         dadosContact += '<input type="text" value="' + dadosContact[x].name + '" >';
        
//     }

//     document.getElementById('dadosContact').innerHTML = dadosContact;

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

