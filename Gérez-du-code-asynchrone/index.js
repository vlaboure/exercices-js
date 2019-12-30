async function compute(){
  const result = await getNumber1() + await getNumber2();
  return result;
}

compute()
  .then(function(data){
  document.getElementById('result').innerHTML = data;
});


