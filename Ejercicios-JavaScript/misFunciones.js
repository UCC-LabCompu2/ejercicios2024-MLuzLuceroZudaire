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



