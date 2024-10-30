// km to m
function convertirKmToMeter(){
    const km = document.getElementById("km").value;
    
    if(km){
        const metros = km * 1000;
        document.getElementById("metros").value = metros;  
    }else{
        alert("Ingrese un valor");
    }
}

function convertirMetrosToCm(){
    const metros = document.getElementById("metrosDos").value;

    if(metros){
        const mc = metros * 100;
        document.getElementById("cm").value = mc;
    }else{
        alert("Ingrese un valor");
    }
}

function convertirPulgadasToPies(){
    const pulgadas = document.getElementById("pulgadas").value;

    if(pulgadas){
        const pies = pulgadas * 12;
        document.getElementById("ft").value = pies;
    }else{
        alert("Ingrese un valor");
    }

}

function convertirYardaToPlg(){
    const yarda = document.getElementById("yarda").value;

    if(yarda){
        const plg = yarda * 12;
        document.getElementById("plg").value = plg    
    }else{
        alert("Ingrese un valor");
    }       
}


