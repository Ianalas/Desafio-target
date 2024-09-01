const input = require('fs').readFileSync('entrada', 'utf8');
const line = input.split('');

console.log(verificHaveA(line));

function verificHaveA(str) {
  let count = 0;
    for (let x of str){
      x = x.toUpperCase(); 
      if([195, 193, 192, 65].includes(x.charCodeAt())){ //ele irá verificar se tem letra "a" com acento ou não por meio charCode
        count++
      }
    }
  if (count === 0) {
    return `Não há ocorrência da letra "A"`;
  }
  if(count > 0){
    return `Ocorre ${count> 1? `${count}x vezes` : "1x vez"}.`;
  }
}



