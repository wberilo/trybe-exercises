document.getElementById("para").innerText = "newtext" // retorna 1 elemento html
document.getElementsByClassName("class")[0].innerText = "newertext" // retorna todos com a classe
let a = document.getElementsByClassName("class"); 
for(let i in a){
    a[i].innerText="even newer text"
}
document.getElementsByTagName("span")[0].innerText = 'changed text' // retorna todos com a tag
document.querySelector('#para').innerText = 'aaa'
document.querySelector('.class').innerText = 'firste'
document.querySelector('.divdiv .classy').innerText = 'less text' // retorna o primeiro encontrado
document.querySelectorAll // retorna todos elementos escolhidos em uma lista que não pode ser elemento html (pode ser somente texto)
