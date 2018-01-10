var produtos = [

    {   name: "Puma Golf Raglan Tech Polo Tee",
        price: 72,
        qty: 3
    },

    {   name: "Nike Men's Running Shoes",
        price: 129,
        qty: 1
    },

    {   name: "DC Men's Axis Snowboard Jacket",
        price: 89,
        qty: 2
    },
];



var total = {
    produto1: produtos[0].price*produtos[0].qty,

    produto2: produtos[1].price*produtos[1].qty,

    produto3: produtos[2].price*produtos[2].qty,
};


document.getElementById('produto1').innerHTML = produtos[0].name + " $ " + produtos[0].price + " " + produtos[0].qty  + " $" + total.produto1 ;
document.getElementById('produto2').innerHTML = produtos[1].name + " $ " + produtos[1].price + " " + produtos[1].qty + " $" + total.produto2 ;
document.getElementById('produto3').innerHTML = produtos[2].name + " $ " + produtos[2].price + " " + produtos[2].qty + " $" + total.produto3 ;


var subtotal = total.produto1 + total.produto2 + total.produto3;

document.getElementById('subtotal').innerHTML = subtotal;


