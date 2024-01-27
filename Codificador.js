let textArea=document.getElementById("text");

function encrypt(input){
    /*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    Este orden debe de ser respetado.
    Si la conversion incluyera llaves previas, esto no funcionaria
    En caso de  querer  modificar,
    este codigo  no funcionara sin consideraciones de logica,
    por lo cual no es una solucion perfecta
    */
   return input.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

}
function decrypt(input){
    /*
     * El Orden inverso de encrypt("") debe de ser respetado
     * Para una mejor solucion se necesita de un control mas complejo
     */
    return  input.replaceAll("ufat","u").replaceAll("ober","o").replaceAll("ai","a").replaceAll("imes","i").replaceAll("enter","e");
}

function buttonEncrypt(){
    
    document.getElementById("encoded").innerHTML=encrypt(textArea.value);

}
function buttonDecrypt(){
    
    document.getElementById("encoded").innerHTML=decrypt(textArea.value);

}