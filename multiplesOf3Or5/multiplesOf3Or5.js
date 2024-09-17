function multiplesOf3Or5(number) {
    let sum_three = 0;
    let sum_five = 0;
  
    if(number < 3){
      return 0;
    }
  
    for(let i = 3; i < number; i += 3){
      sum_three += i;
    }
  
    for (let i = 5; i < number; i += 5){
      if(i % 3 === 0){
        continue;
      }
      sum_five += i;
    }
  
    return sum_three + sum_five;
  }

if(require.main === module){
const number = parseInt(process.argv[2], 10);
if (isNaN(number)){
    console.error();
    process.exit(1);
}
const result = multiplesOf3Or5(number);
console.log(result);
}