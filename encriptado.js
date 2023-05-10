var btnencrip = document.querySelector(".boton1");
var btndesen = document.querySelector(".boton2");
var btncop = document.querySelector(".boton3");
var imagen = document.querySelector(".imge");
var presul = document.querySelector(".presultados");
var contenido = document.querySelector(".resultados")


    btnencrip.onclick = encriptar;
    btndesen.onclick = desencriptar;
    btncop.onclick = copy;

function encriptar(){
    ocultarAledante()
    var area = capturatext();
    contenido.textContent =  encriptartexto( area);
}

function desencriptar(){
    ocultarAledante()
    var area = capturatext();
    contenido.textContent =  desencriptartexto( area);
}

function copy(){
    var copiado = document.querySelector(".resultados");
    copiado.select();
    document.execCommand("copy");
    alert("se ha copiado el texto")
}

function capturatext(){
    var area = document.querySelector(".encriptador");
    return area.value;
}

function ocultarAledante(){
    imagen.classList.add("ocultar");
    presul.classList.add("ocultar");
}

function encriptartexto(mensaje){
    var texto = mensaje;
    var textofinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "ai"
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "ufat"
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }
    
    return textofinal;
}

function desencriptartexto(mensaje){
    var texto = mensaje;
    var textofinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "a"
            i= i+1;
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "e"
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "o"
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "u"
            i = i + 3;
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }
    
    return textofinal;
}




