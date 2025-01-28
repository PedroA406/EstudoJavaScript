






function soma(a,b){
    return a+b
}

function clique(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    r = soma(parseFloat(n1), parseFloat(n2))
    document.getElementById('resultado').innerText = r
}

function subtracao(a,b){
    return a-b
}

function clique2(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    r = subtracao(parseFloat(n1), parseFloat(n2))
    document.getElementById('resultado').innerText = r
}

function mutiplicacao(a,b){
    return a*b
}

function clique3(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    r = mutiplicacao(parseFloat(n1), parseFloat(n2))
    document.getElementById('resultado').innerText = r
}

function divisao(a,b){
    return a/b
}

function clique4(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    r = divisao(parseFloat(n1), parseFloat(n2))
    document.getElementById('resultado').innerText = r
}

function fatorial(a){
    let fatorial = a
if(a==0){

    fatorial=1
}

while(a>1){
    a--

    fatorial = fatorial*a

    
}
return fatorial
}

function clique5(){
    let n1 = document.getElementById('n1').value
    r = fatorial(parseFloat(n1))
    document.getElementById('resultado').innerText = r
}

function calcular(liquido){
    let salario = document.getElementById('salario').value
    if(salario<=1500){
    var liquido = salario - 100
    document.getElementById('liquido').innerText=liquido

    }else{

    if(salario>1500 || salario<=3000){
        var liquido = salario - 300
        document.getElementById('liquido').innerText=liquido
    
        }
    }
}

function clique6(){
    let n1 = document.getElementById('n1').value
    r = fatorial(parseFloat(n1))
    document.getElementById('resultado').innerText = r
}

