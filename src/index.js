function convert(){
  var num = document.getElementById("binNumberInput").value
  var resultElement = document.getElementById("result")

  if(num){
    if(isBinary(num)){
      var decim = parseInt(num, 2)
      document.getElementById("result").innerHTML = decim
      resultElement.style.display = "block"
    }
    else
      alert("Enter only binary numbers (0 or 1)!")
  }
  else
    window.alert("Enter at least 1 digit!")
}

function isBinary(number){
  var result = true

  for(var i=0; i<number.length; i++){
    if(number[i] != 0 && number[i] != 1)
      result = false
  }
  return result
}