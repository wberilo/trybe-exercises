let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim'
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim'
};

for(i in info){
  if(i == 'recorrente'){
    if(info[i]==info2[i]){
      console.log("ambos",info[i])
    }
  }
  else{
    console.log(info[i] + ' e '+ info2[i])
  }
  
}