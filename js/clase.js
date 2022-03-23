"use strict";
function mousemove(event) {
    console.log("pageX: ", event.pageX, "pageY: ", event.pageY, "clientX: ", event.clientX, "clientY:");
    localStorage.setItem("altura", event.clientY);
    localStorage.setItem("anchura", event.clientX);
}
window.addEventListener('mousemove', mousemove);
var click = 0.00000006;
var cont = 0;
var test = 0;
function dollar() {
    cont++;
    console.log(cont);
    var alt = localStorage.getItem("altura");
    var anch = localStorage.getItem("anchura");
    var div = document.getElementById("mon");
    var mon2 = document.getElementById("mon2");
    var dollar = document.createElement("img");
    dollar.src = "imgs/dollar.png";
    dollar.style.width = "20px";
    dollar.style.animationName = "desvanecer";
    dollar.style.animationDuration = "2s";
    dollar.style.animationFillMode = "forwards";
    dollar.style.position = "absolute";
    dollar.style.top = alt + "px";
    dollar.style.top = parseInt(dollar.style.top) + (-20) + "px";
    dollar.style.left = anch + "px";
    dollar.id = "dollar";
    var text = document.createElement("p");
    var number_dollar = document.createTextNode("+" + click);
    text.style.animationName = "desvanecer";
    text.style.animationDuration = "2s";
    text.style.animationFillMode = "forwards";
    text.style.position = "absolute";
    text.style.top = alt + "px";
    text.style.top = parseInt(dollar.style.top) + (-17) + "px";
    text.style.left = anch + "px";
    text.style.color = "white";
    var text2 = document.createElement("p");
    text2.style.position = "absolute";
    text2.style.top = "50px";
    // text2.style.animationName = "din";
    // text2.style.animationDuration = "0.4s";
    // text2.style.animationFillMode = "forwards";
    text2.id = "tex";
    var totalBTC = cont * click;
    if (totalBTC < 0.00000102) {
        totalBTC = 0;
    }
    console.log(totalBTC);
    var total_btc = document.createTextNode(totalBTC);
    text2.appendChild(total_btc);
    div.appendChild(text2);
    div.removeChild(div.firstChild);
    text.appendChild(number_dollar);
    mon2.appendChild(text);
    mon2.appendChild(dollar);
    setTimeout(function () {
        mon2.removeChild(dollar);
        mon2.removeChild(text);
    }, 1000);
}
var bitxtiempo = 0;
var tot = 0;
function bits() {
    var div = document.getElementById("mon");
    var total = document.createElement("h1");
    // var total_t:any = document.createTextNode(tot+num);
    div.appendChild(total);
}
