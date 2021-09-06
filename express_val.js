function getMenuValue() {
    var selectItem = document.getElementById("menu_select").value;
    var email_field = document.querySelector("#validation_field1");
    var phone = document.querySelector("#validation_field2");
    var post_code = document.querySelector("#validation_field3");

    if (selectItem == "email") {
        email_field.style.visibility = "visible";
        phone.style.visibility = "hidden";
        post_code.style.visibility = "hidden";
    }

    

    if (selectItem == "phone") {
        phone.style.visibility = "visible";
        email_field.style.visibility = "hidden";
        post_code.style.visibility = "hidden";
    }



    if (selectItem == "post_code") {
        post_code.style.visibility = "visible";
        phone.style.visibility = "hidden";
        email_field.style.visibility = "hidden";
    }
}



function emailValidation() {
    var email = document.getElementById("email_field").value;

    var regx = /^([a-zA-z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)(.[a-z]+)?$/

    if (regx.test(email)) {
        alert("Valid email!!!");
        return true;
    } else {
        alert("Sorry invalid email!!!");
        return false;
    }
}


function phoneValidation() {
    var phone_number = document.getElementById("phone_field").value;

    var phn_val = /^([1-9])/;

    if (phn_val && phone_number.length < 11) {
        alert("Invalid phone");
        return false;

    } else {
        alert("valid phone");
        return true;
    }

}


function postcodeValidation() {
    var postal_code = document.getElementById("postcode_field").value;

    if (postal_code.length > 4 || postal_code.length < 4) {
        alert("Invalid postal code");
        return false;
    } else {
        alert("Valid postal code");
        return true;
    }
}