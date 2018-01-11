var produtos = [

    {   
        name: "Puma Golf Raglan Tech Polo Tee",
        price: 72,
        qty: 3,
        color: "purple",
        size: "xxl",
        image: {
            src: "shirt.jpg",
            alt: "purple shirt"
        }
    },

    {   
        name: "Nike Men's Running Shoes",
        price: 129,
        qty: 1,
        color: "orange",
        size: "43",
        image: {
            src: "shoes.jpg",
            alt: "running shoes"
        }
    },

    {   
        name: "DC Men's Axis Snowboard Jacket",
        price: 89,
        qty: 2,
        color: "blue",
        size: "s",
        image: {
            src: "jacket.jpg",
            alt: "blue jacket"
        }
    },
];


var total = {
    produto1: produtos[0].price*produtos[0].qty,

    produto2: produtos[1].price*produtos[1].qty,

    produto3: produtos[2].price*produtos[2].qty,
};


document.getElementById('produto1name').innerHTML = produtos[0].name ;
document.getElementById('produto1price').innerHTML = " $ " + produtos[0].price ;
document.getElementById('produto1qty').innerHTML = " " + produtos[0].qty ;
document.getElementById('produto1color').innerHTML = produtos[0].color ;
document.getElementById('produto1size').innerHTML = produtos[0].size;
document.getElementById('produto1img').innerHTML = produtos[0].image;
document.getElementById('produto1total').innerHTML = " $" + total.produto1;

document.getElementById('produto2name').innerHTML = produtos[1].name;
document.getElementById('produto2price').innerHTML = " $ " + produtos[1].price;
document.getElementById('produto2qty').innerHTML = " " + produtos[1].qty;
document.getElementById('produto2color').innerHTML = produtos[1].color;
document.getElementById('produto2size').innerHTML = produtos[1].size;
document.getElementById('produto2img').innerHTML = produtos[1].image;
document.getElementById('produto2total').innerHTML = " $" + total.produto1;

document.getElementById('produto3name').innerHTML = produtos[2].name;
document.getElementById('produto3price').innerHTML = " $ " + produtos[2].price;
document.getElementById('produto3qty').innerHTML = " " + produtos[2].qty;
document.getElementById('produto3color').innerHTML = produtos[2].color;
document.getElementById('produto3size').innerHTML = produtos[2].size;
document.getElementById('produto3img').innerHTML = produtos[2].image;
document.getElementById('produto3total').innerHTML = " $" + total.produto1;

// document.getElementById('produto2').innerHTML = produtos[1].name + " $ " + produtos[1].price + " " + produtos[1].qty + " $" + total.produto2 ;

// document.getElementById('produto3').innerHTML = produtos[2].name + " $ " + produtos[2].price + " " + produtos[2].qty + " $" + total.produto3 ;


var subtotal = total.produto1 + total.produto2 + total.produto3;

document.getElementById('subtotal').innerHTML = subtotal;


