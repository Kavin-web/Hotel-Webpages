var home = "Welcome Too All Wonderful Resort";
const newHome = document.createElement("div")
newHome.innerText = home;
const kavin = document.getElementById("kavin")
kavin.append(home)


let food ="Breakfast Food";
const breakfasts = document.createElement("div")
breakfasts.innerText = food;
const breakfast = document.getElementById("break-fast")
breakfast.append(food)


var afternoon = "Lunch Food";
const after = document.createElement("div")
after.innerText = afternoon;
const sapadu = document.getElementById("afternoon")
sapadu.append(afternoon)


function login(){
    var uname = document.forms["myform"]["uname"].value;
    var password = document.forms["myform"][password].value;

    if(uname==null || uname==""){
        document.getElementById("error-box").innerHTML = "Enter The User Name";
        return false;
    }

    if(password==null || password==""){
        document.getElementById("error-box").innerHTML = "Enter the Password";
        return false;
    }

    if(uname!=null && password!=""){
        alert("Login Successfully")
    }
}











