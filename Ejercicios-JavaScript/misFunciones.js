/**
 * Realiza las conversiones de un valor ingresado por usuriario en unidades de metros, pulgadas, pies y yardas
 * @method convertirUnidadades
 * @param {string} nombre - id del elemento en HTML
 * @param {number} valor -numero ingresado por el usuario
 */
let convertirUnidades=(nombre, valor) => {
    let valMetro, valPulgada, valPie, valYarda;
    if (valor.includes (",")){
        valor = valor.replace(",",".");
    }
    if (isNaN(valor)){
        alert("El valor ingresado no es un numero");
        valMetro="";
        valPulgada="";
        valPie="";
        valYarda="";
    }else if(nombre==="metro"){
        valMetro =valor;
        valPulgada = valor*39.3701;
        valPie = valor* 3.28084;
        valYarda = valor*1.0936133333333;
    }else if(nombre==="pulgada"){
        valPulgada =valor;
        valMetro = valor*0.0254 ;
        valPie = valor*0.0833333;
        valYarda = valor*0.0277778;
    }else if(nombre==="pie"){
        valPie = valor;
        valMetro = valor*0.3048;
        valPulgada = valor*12;
        valYarda = valor*0.333333;
    }else if(nombre==="yarda"){
        valYarda = valor;
        valMetro = valor*0.9144;
        valPulgada = valor*36;
        valPie = valor*3;
    }
    document.getElementById("metro").value= Math.round(valMetro*100)/100;
    document.getElementById("pulgada").value= Math.round(valPulgada*100)/100;
    document.getElementById("pie").value= valPie.toFixed(2);
    document.getElementById("yarda").value = valYarda.toFixed(2);
}


function ConvertirGR (id) {
    let grad, rad;
    if (id==="grados"){
        let grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
        document.getElementById("radianes").value=rad;
    } else if (id==="radianes"){
        rad= document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
        document.getElementById("grados").value=grad;
    }
}

function mostrar_ocultar (valorMO){
    if (valorMO=== "val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }
    else if (valorMO=== "val_ocultar"){
        document.getElementById("divMO").style.display= 'none';
    }
}



function CalcularSuma () {
    let num1, num2;
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML= num1+num2;
}



function CalcularResta () {
    let num1, num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = (num1-num2);
}



function CalcularMultiplicacion () {
    console.log("restar llamada");
    let num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = (num1 * num2);
}



function CalcularDivision() {
    let num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
}


function CargarWeb () {
    var cant, unidad, urlcompleta;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlcompleta = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlcompleta);
}


function Cargarresultado () {
    var urlcompleta, can, uni;

    urlcompleta = window.location.href.split("/")[5];
    can = urlcompleta.split("#")[1];
    uni = urlcompleta.split("#")[2];

    document.getElementById("dist").value= can + " " + uni;
}


function GuardarLocalStorage (){
    let distancia, unidad;
    distancia= document.getElementById('distancia').value;
    unidad= document.getElementsByName( 'unidades')[0].value;

    localStorage.setItem("DistanciaLS", distancia);
    localStorage.setItem("UnidadesLS" , unidad);

    window.open('2_segundaWEB.html');
}

function CargarLocalStorage (){
    let cantidad, unidad;
    cantidad = localStorage.getItem("DistanciaLS");
    unidad = localStorage.getItem("UnidadesLS");

    document.getElementById("dist").value= cantidad + " " + unidad;
}


function DibujarCirculoCuadrado () {
    var canvas =document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var yMax = canvas.height;
    var margen=5;

    var xMax =canvas.width


    ctx.fillStyle= "#7a1d63";
    ctx.fillRect(margen, yMax-40-margen, 40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "rgba(58,148,150,0.49)"
    ctx.fill ();
}

var bandera;
function dibujar (event) {
    var canvas = document.getElementById("canvasparadibujar");
    var ctx=canvas.getContext("2d");

    var posX= event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);


    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){ bandera=false};
    if (bandera===true) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fillStyle= "#55458252";
        ctx.fill();
    }
}

function Limpiar (){
    var canvas = document.getElementById("canvasparadibujar");
    var ctx=canvas.getContext("2d");

    canvas.width=canvas.width;

}


function Cuadriculado () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var alturamax = canvas.height;
    var lateralmax = canvas.width;
//Horizontales
    ctx.beginPath();
    for (var i = 0; i <alturamax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(lateralmax, i);
        ctx.strokeStyle = "#1f6188";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();
//Verticales
    ctx.beginPath()
    for (var i=0; i<lateralmax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,alturamax);
        ctx.strokeStyle= "#1f6188";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath()

//Eje X
    ctx.beginPath();
    ctx.moveTo(0,alturamax/2);
    ctx.lineTo(lateralmax, alturamax/2);
    ctx.strokeStyle ="#521511";
    ctx.stroke();
//Eje Y
    ctx.beginPath();
    ctx.moveTo(lateralmax/2,0);
    ctx.lineTo(lateralmax/2, alturamax);
    ctx.strokeStyle ="#521511";
    ctx.stroke();
}


function dibujarImagen(posx,posy){
    var canvas= document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");

    console.log(posx, posy);
    var img = new Image();
    img.src= "images/auto.png";

    canvas.width=canvas.width

    img.onload = function () {
        ctx.drawImage(img, posx, posy);
    }


}


