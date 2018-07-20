//FOR SIMPLE INTEREST
var btnItems = ['Strike', 'Strike', 'Submit'];
var labelItems = ['Principal', 'Time', 'Rate'];
var inputValues = [];
var index  = 0;
getValues();
document.getElementById('simpleBtn').addEventListener('click', btnAction);

// Action carried out on btn Click
function btnAction(){
  inputValues.push(document.getElementById('simpleInput').value);
  document.getElementById('simpleInput').value = '';

  if (index==2){
    var result = "The Simple Interest is " + calculateSimpleInterest(inputValues[0], inputValues[1], inputValues[2]);
    simpleResult.innerHTML = result;
  }else{
    index++;
    getValues();
  }
}
function getValues(){
  document.getElementById('simpleLabel').innerHTML = labelItems[index];
  document.getElementById('simpleBtn').innerHTML = btnItems[index];
}
// Calculates Simple Interest
function calculateSimpleInterest(principal, time, rate){
  var sI = (principal*time*rate)/100;
  return sI;
}

//FOR COMPOUND INTEREST
var btnCompItems = ['Strike', 'Strike', 'Strike', 'Submit'];
var labelCompItems = ['Principal', 'Time', 'Rate', 'Number(years/months)'];
var inputCompValues = [];
var indexComp  = 0;
getCompValues();
document.getElementById('compoundBtn').addEventListener('click', btnCompAction);

// Action carried out on btn Click
function btnCompAction(){
  inputCompValues.push(document.getElementById('compoundInput').value);
  document.getElementById('compoundInput').value = '';

  if (indexComp==3){
    var compResult = "The Compound Interest is " + calculateCompoundInterest(inputCompValues[0], inputCompValues[1], inputCompValues[2], inputCompValues[3]);
    compoundResult.innerHTML = compResult;
  }else{
    indexComp++;
    getCompValues();
  }
}
function getCompValues(){
  document.getElementById('compoundLabel').innerHTML = labelCompItems[indexComp];
  document.getElementById('compoundBtn').innerHTML = btnCompItems[indexComp];
}
// Calculates Compound Interest
function calculateCompoundInterest(principal, time, rate, number){
  var cI = Math.pow(principal*(1+(rate/number)), number*time);
  return cI;
}

// FOR FACTORIAL
function getNumber() {
  var facInput = document.getElementById('facInput').value;
  facFunction(facInput);
}
function facFunction(num){
  var fact = 1;
  for(var i=num; i>1; i--){
    fact = fact * i;
    }
  document.getElementById("facResult").innerHTML = fact;
  return fact;
}

//FOR PERMUTATION
function factorialForPermutation(perm){
  var factP = 1;
  for(var i=perm; i>1; i--){
    factP = factP * i;
    }
  return factP;
}
function permutationFunction(){
  var nPerm = Number(document.getElementById('nPerm').value);
  var rPerm = Number(document.getElementById('rPerm').value);
    document.getElementById('permResult').innerHTML = factorialForPermutation(nPerm) / factorialForPermutation(nPerm-rPerm);
}

//FOR COMBINATION
function factorialForCombination(com){
  var factC = 1;
  for(var i=com; i>1; i--){
    factC = factC * i;
    }
  return factC;
}
function combinationFunction(){
  var nComb = Number(document.getElementById('nComb').value);
  var rComb = Number(document.getElementById('rComb').value);
    document.getElementById('combResult').innerHTML = factorialForCombination(nComb) / (factorialForCombination(rComb) * (factorialForCombination(nComb-rComb)));
}

//ALMIGHTY FORMULA
function formulaMethod (){
  var valueOfA = Number(document.getElementById('valueOfA').value);
  var valueOfB = Number(document.getElementById('valueOfB').value);
  var valueOfC = Number(document.getElementById('valueOfC').value);
  var checkValues = (valueOfB*valueOfB)-(4*valueOfA*valueOfC);

  if(checkValues < 0 ){
    checkValues*= -1;
  }
  var x1 = ((-valueOfB) + Math.sqrt(checkValues))/(2*valueOfA);
  var x2 = ((-valueOfB) - Math.sqrt(checkValues))/(2*valueOfA);
  var x = "X: (" + x1 +"," + x2 +")";
  document.getElementById('FormularMethodResult').innerHTML = x;
}

//FOR PRIME NUMBER
var primeBtn = document.getElementById('primeBtn');
var primeResult = document.getElementById('primeResult');
var Result = "";
primeBtn.addEventListener('click', myFunction);
function myFunction() {
  var primeInput = document.getElementById('primeInput').value;
  for(i = 2; i < primeInput; i++){
    if(primeInput > 9999999) {
			Result = "Sorry! Please enter a number less than 1,000,000 to avoid crashing the browser.";
			break;
    }
    else if(primeInput % i == 0) {
      Result = primeInput + " is not a Prime Number.";
      break;
    }
    else {
      Result = "Yes! " + primeInput + " is a Prime Number.";
    }
  }primeResult.innerHTML = Result;
}

//For Decimal to Hexadecimal with .toString Method
/*var decHexBtn = document.getElementById('decHexBtn');
var decHexResult = document.getElementById('decHexResult');

decHexBtn.addEventListener('click', decHexFunction);
function decHexFunction(){
  var decHexInput = document.getElementById('decHexInput').value;
  result = (parseInt(decHexInput).toString(16));
  result = "The Hexadecimal Equivalent of " + decHexInput + " is " + result;
  decHexResult.innerHTML = result;
}
*/
//For Decimal to Hexadecimal
var decHexBtn = document.getElementById('decHexBtn');
var decHexResult = document.getElementById('decHexResult');

decHexBtn.addEventListener('click', decHexFunction);
function decHexFunction(number){
  var decHexInput = document.getElementById('decHexInput').value;
  var number = decHexInput;
  var rem;
  var hexString = '';

  while(number>0){
    rem=number%16;
    hexString+=getHexCharacter(rem);
    number=Math.floor(number/16);
  }

  function getHexCharacter(rem){
    if(rem=='10'){
      return 'A';
    }else if(rem=='11'){
      return 'B';
    }else if(rem=='12'){
      return 'C';
    }else if(rem=='13'){
      return 'D';
    }else if(rem=='14'){
      return 'E';
    }else if(rem=='15'){
      return 'F';
    }else{
      return rem;
    }
  }
  var hexStringSplit = hexString.split("");
  var tempResult = [];
  for(var i=hexStringSplit.length-1; i>=0; i--){
    tempResult.push(hexStringSplit[i]);
  }

  var finalResult = tempResult.join("");
  var result = "The Hexadecimal Equivalent of " + decHexInput + " is " + finalResult;
  decHexResult.innerHTML = result;
}

// FOR DECIMAL TO BINARY
var decBinBtn = document.getElementById('decBinBtn');
var decBinResult = document.getElementById('decBinResult');

decBinBtn.addEventListener('click', decBinFunction);
function decBinFunction (number){
  var decBinInput = document.getElementById('decBinInput').value;
  var rem;
  var decBinString = '';
  var number = decBinInput;
  while(number>0){
    rem=number%2;
    decBinString += rem;
    number=Math.floor(number/2);
  }
  decBinStringSplit = decBinString.split("");
  var TempResult = [];
  for( var i=decBinStringSplit.length-1; i>=0; i--){
    TempResult.push(decBinStringSplit[i]);
  }
  var lastResult = TempResult.join('');
  var result = "The Binary Equivalent of " + decBinInput + " is " + lastResult;
  decBinResult.innerHTML = result;

}

//FOR FIBONACCI MACHINE
function fibonacciGenerator(){
  var fiboInput = document.getElementById('fiboInput').value;

  var a = 0;
  var b = 1;
  var c = a+b;

  if(fiboInput==0){
    document.getElementById('resultFibo').innerHTML = 0;
    return 0;
  }else if(fiboInput==1){
    document.getElementById('resultFibo').innerHTML = 1;
    return 1;
  }else{
    for (var i=2; i<fiboInput; i++){
      c = a+b;
      a = b;
      b = c;
    }
  }document.getElementById('resultFibo').innerHTML = b;
  return b;
}
