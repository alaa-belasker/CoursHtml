

function additionner () {
    var a = parseInt( document.calc.nbr1.value)
var b = parseInt( document.calc.nbr2.value)
   document.calc.nbr3.value = a + b 
    
}

function soustraire () {
    var a = parseInt( document.calc.nbr1.value)
    var b = parseInt( document.calc.nbr2.value)
       document.calc.nbr3.value = a  - b   
}
function multiplier () {
    var a = parseInt( document.calc.nbr1.value)
    var b = parseInt( document.calc.nbr2.value)
       document.calc.nbr3.value = a * b 
}
function diviser () {
    var a = parseInt( document.calc.nbr1.value)
    var b = parseInt( document.calc.nbr2.value)
       document.calc.nbr3.value = a / b 
}



var i = 2
var j = ++i

var i = 2
i ++
var j = i