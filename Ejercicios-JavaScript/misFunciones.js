/**
 * Realiza las conversiones de un valor ingresado por usuriario en unidades de metros, pulgadas, pies y yardas
 * @method convertirUnidadades
 * @param {string} nombre - id del elemento en HTML
 * @param {number} valor -numero ingresado por el usuario
*/

function convertirUnidades(nombre, valor) {
    if (isNaN(valor)){
        alert("El valor ingresado no es un nombre");
        document.getElementById("metro").value= "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value="";
        document.getElementById("yarda").value="";
    }else if (nombre == "metro") {
        document.getElementById("pulgada").value = valor * 39.3701;
        document.getElementById("pie").value=valor* 3.28084;
        document.getElementById("yarda").value=valor*1.09361;
    }else if (nombre=="pulgada"){
        document.getElementById("metro").value= valor/0.0254 ;
        document.getElementById("pie").value= valor/0.0833 ;
        document.getElementById("yarda").value= valor/36 ;

    }else if (nombre=="pie"){
        document.getElementById("metro").value= valor/0.3048;
        document.getElementById("pulgada").value= valor*12 ;
        document.getElementById("yarda").value= valor/3 ;

    }else if (nombre=="yarda"){
        document.getElementById("metro").value= valor/0.9144 ;
        document.getElementById("pie").value= valor*3 ;
        document.getElementById("pulgada").value= valor*36 ;
    }
}
