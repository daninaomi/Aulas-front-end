var produtos = [

    {   
        name: "Puma Golf Raglan Tech Polo Tee",
        color: "purple",
        size: "xxl",
        price: 72,
        qty: 3,
        image: {
            src: '"img/shirt.jpg"',
            alt: "purple shirt"
        }
    },

    {   
        name: "Nike Men's Running Shoes",
        color: "orange",
        size: "43",
        price: 129,
        qty: 1,
        image: {
            src: '"img/shoes.jpg"',
            alt: "running shoes"
        }
    },

    {   
        name: "DC Men's Axis Snowboard Jacket",
        color: "blue",
        size: "s",
        price: 89,
        qty: 2,
        image: {
            src: '"img/jacket.jpg"',
            alt: "blue jacket"
        }
    },
];

function listarProdutos() {

    event.preventDefault();

    var listarProdutos = "";
    var subtotal = "";

    for (var x = 0; x < produtos.length; x++) {

        listarProdutos += ' <tr class="shop-cart-items-produto">';
        listarProdutos += '<td class="shop-cart-items-produto__cancel"> <img src="img/cancel.png" alt="cancel" /> </td>'
        listarProdutos += '<td class="shop-cart-items-produto__img"> <img src=' + produtos[x].image.src + '/> </td>'
        listarProdutos += '<td class="shop-cart-items-produto-description"> <div class="shop-cart-items-produto__name"> ' + produtos[x].name + '</div>';
        listarProdutos += '<div class="shop-cart-items-produto__details">' + '<br> COLOR: ' + produtos[x].color + ' SIZE: ' + produtos[x].size + ' </div> </td>';
        listarProdutos += '<td class="shop-cart-items-produto__price"> $' + produtos[x].price + ' </td>';
        listarProdutos += '<td class="shop-cart-items-produto__qty">' + produtos[x].qty + ' </td>';
        listarProdutos += '<td class="shop-cart-items-produto__total">' + produtos[x].price * produtos[x].qty + '</td> </tr> ';

        subtotal = x * (produtos[x].price * produtos[x].qty);
    }

    document.getElementById('produtos').innerHTML = listarProdutos;
    document.getElementById('subtotal').innerHTML = subtotal;

}


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

