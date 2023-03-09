
var characterRange = document.getElementById('charaamount-range')
var characterNumber = document.getElementById('charaamount-number')
var uppercaseTrue =  document.getElementById('Uppercase')
var numbersTrue =  document.getElementById('number')
var symbolsTrue =  document.getElementById('special')


// [a,z] =>65 , 90
//[A,Z] = >97, 122
//[0,9] => 48,	57
//symboles => 32 ,47

var upperCode=helper(65 , 90)
var lowerCode=helper(97 , 122)
var numberCode=helper(48 , 57)
var symboleCode=helper(32 , 47)
//console.log(String.fromCharCode(32,33,34,35,36))

$("#passform").submit( function(e) {
   
    e.preventDefault();
    var characteramount = characterNumber.value
    var uppercas = uppercaseTrue.checked
    var numbers = numbersTrue.checked
    var symbols = symbolsTrue.checked
    console.log(characteramount)
    console.log(uppercas)
    console.log(numbers)
    console.log(symbols)
   

    var password = genPass(characteramount, uppercas, numbers, symbols)
    $("#rzlt").text(password)

});

function genPass(characteramount, uppercas, numbers, symbols){
    var charcodes=lowerCode
    if(uppercas === true){
        
        charcodes =charcodes.concat(upperCode)
    }if(numbers === true){

        charcodes = charcodes.concat(numberCode)

    }if(symbols === true){
        charcodes = charcodes.concat(symboleCode)
    }
    var passwordRzlt =[]
    for(i=0 ; i<characteramount ;i++){
        var coderandom =  charcodes[Math.floor(Math.random()*charcodes.length)]
        passwordRzlt.push(String.fromCharCode(coderandom ))

    }
    return passwordRzlt.join('')



}

// push codes into array 
function helper(min , high) {
    var rzlt = []
    for(var i = min ; i< high ; i++){
        rzlt.push(i)

    }
    return rzlt
}

  function  myFunction() {
    var charact = $("#rzlt").text()
    console.log(charact)
   
  
    navigator.clipboard.writeText(charact);
    alert("Copied Text: " +  charact);
}

function printPageArea(areaID){
    var printContent = document.getElementById(areaID).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}

function myFuncti(){
printPageArea("rzlt")
}

// for the input range and input numbers work
characterNumber.addEventListener('input', boath)
characterRange.addEventListener('input', boath)
function boath() {
    var value = characterRange.value
    console.log(value)
    characterNumber.value = value
    characterRange.value = value
}
