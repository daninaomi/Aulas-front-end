
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


