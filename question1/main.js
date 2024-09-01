let numInforme = 8; //Só trocar o número informado aqui.

console.log(isFibonnaci(numInforme)); //Chama a função e mostra no console


function isFibonnaci(value){ 
  const arrFibo = [0,1]
  let numfibo = 0;

  if(value <= 0  || !Number.isInteger(value)){ //Verifica se o número é maior que 0 e se é inteiro
    return "Número inválido"
  }

  for (let i = 0; i < value; i++) { //Percorre a array e verifica as validações
    numfibo = arrFibo[i] + arrFibo[i+1]
    arrFibo.push(numfibo);
  
    if(numfibo > value){
      return "Não é um número de Fibonacci"
    }
    if(numfibo === value){
      return "É um número de Fibonacci"
    }
  }
}

