window.onload = onloads();

function onloads() {
    const getno = Math.floor(Math.random() * 1000);
    document.getElementById("uid").value = getno;
}

function firstname() {
    const fname = document.getElementById("fname").value;

    if (fname.trim().length == 0) {
        document.getElementById("fout").innerText = "Please fill first name!"
    } else if (fname.match("^([a-zA-Z]+)$") == null) {
        document.getElementById("fout").innerText = "Please fill a valid first name";
    } else {
        document.getElementById("fout").innerText = "";
    }
}

function lastname() {
    const lname = document.getElementById("lname").value;

    if (lname.trim().length == 0) {
        document.getElementById("lout").innerText = "Please fill last name!"
    } else if (lname.match("^([a-zA-Z]+)$") == null) {
        document.getElementById("lout").innerText = "Please fill a valid last name";
    } else {
        document.getElementById("lout").innerText = "";
    }
}

function email1() {
    const emailid = document.getElementById("email").value;

    if (emailid.trim().length == 0) {
        document.getElementById("eout").innerText = "Please fill Email Id!"
    } else if (emailid.match("^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z0-9]+)$") == null) {
        document.getElementById("eout").innerText = "Please enter a valid Email Id";
    } else {
        document.getElementById("eout").innerText = "";
    }
}

function phoneno() {
    const phone = document.getElementById("phone").value;
    if (phone.trim().length == 0) {
        document.getElementById("pnout").innerText = "Please enter phone number";
    } else if (phone.match("^([0-9]{10})$") == null) {
        document.getElementById("pnout").innerText = "Please enter a valid phone number!"
    } else {
        document.getElementById("pnout").innerText = "";
    }
}

function pass1() {
    const pass = document.getElementById("pass").value;
    if (pass.trim().length == 0) {
        document.getElementById("pout").innerText = "Please enter your password";
    } else if (pass.trim().length < 8) {
        document.getElementById("pass1").style.display = "block";
        document.getElementById("pass1").style.backgroundColor = "red";
        document.getElementById("pout").innerText = "Password minimum length must be 8 Charcter!"
    } else if (pass.trim().length < 15) {
        document.getElementById("pass1").style.backgroundColor = "orange";
        document.getElementById("pout").innerText = "";
    } else if (pass.trim().length >= 15) {
        document.getElementById("pass1").style.backgroundColor = "green";
    } else {
        document.getElementById("pout").innerText = "";
    }
}

function cityout(){
    const city = document.getElementById("city").value;
    if (city.trim().length == 0) {
        document.getElementById("cityout").innerText = "Please enter your city";
        document.getElementById("cityinfo").innerText = "";
    }else{
        document.getElementById("cityout").innerText = "";
        document.getElementById("cityinfo").innerText = `Your City is ${city}`
    }
}

function showhide (){
    const pass = document.getElementById("pass");
    if(pass.type === "password"){
        pass.type = "text";
        document.getElementById("hide").style.display = "inline-block";
        document.getElementById("show").style.display = "none";
    }else{
        pass.type = "password";
        document.getElementById("show").style.display = "inline-block";
        document.getElementById("hide").style.display = "none";
    }
}
function matchpass (){
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    if(pass != cpass){
        document.getElementById("cpout").innerText = "Password doesn't match!"
    }else if(cpass.trim().length == 0 ){
        document.getElementById("cpout").innerText = "Please confirm password!"
    }else{
        document.getElementById("cpout").innerText ="";
    }
}


