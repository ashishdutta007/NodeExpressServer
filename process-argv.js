//console.log(process.argv);

var sum = 0;
for (var i = 0; i < process.argv.length; i++) {
  if(i>=2)
  {
   sum = sum + Number(process.argv[i]);
  }
  else{
    continue;
  }
}

console.log(sum);