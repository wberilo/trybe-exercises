let salario = 3000;

// *   Salário bruto até R$ 1.556,94: alíquota de 8%

// *   Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// *   Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// *   Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
let inss;
let aliquota;

if(salario<=1556.94){
    inss = (salario*8)/100
}
else if(salario<=2594.92){
    inss = (salario*9)/100
}
else if(salario<=5189.82){
    inss = (salario*11)/100;
}
else{
    inss=570.88;
}

console.log(inss)
let salariob = salario-inss;

// *   **IR**

// *   Até R$ 1.903,98: isento de imposto de renda

// *   De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// *   De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// *   De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// *   Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let ir;

if(salariob<=1903.98){
    ir = 0;
}
else if(salariob<=2826.66){
    ir = (salariob*7.5)/100;
    ir -= 142.80;
}
else if(salariob<=3751.05){
    ir = (salariob*15)/100;
    ir -=354.80;
}
else if(salariob<=4664.68){
    ir = (salariob*22.5)/100
    ir -= 636.13;
}
else{
    ir = (salariob*27.5)/100
    it -= 869.36
}
let salariof = salariob-ir;
console.log(salariof)