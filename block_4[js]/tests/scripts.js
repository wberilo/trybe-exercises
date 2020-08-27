let a = 3;

var b = 3;
console.log(a + b);
var c;
let d;
let hora = 10;

if( hora < 12){
    console.log("bom dia")
}
else if( hora >= 12 && hora <= 18){
    console.log("boa tarde")
}
else{
    console.log("boa noite")
}
5 == "5" //true
5 === "5" //false

let permicao

switch (permicao) {
    case 'comum':
        console.log("usuario comum")
        break;

    case 'manager':
        console.log("manager")
        break;
        
    default:
        console.log("usuario não reconhecido")
        break;
}