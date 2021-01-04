
// exercice 1
const date = new Date();
console.log(date.getDate())
console.log(date.getHours())
//exercice 2
console.log(" Exercice 2")
function firstElement (t) {
    return t[0];
}

var t = [1,3,6,15,9];
console.log("question1:", firstElement(t));


function addition (x,y) {
   return x+y;
}

console.log("question2:", addition(3,5));

function conversion (x) {
    return x*60
}

console.log("question3:",conversion(5));

function age(h) {
    return h*365
}

console.log("question4:",age(25));

// exercice 3
console.log(" Exercice 3")
var alaa = "akram"
//document.writeln(5)
//document.writeln("bonjour")
//document.writeln(alaa)

function getTempretureMessage(temperature, seuil){
    if (temperature > seuil) {
        return "la temperature est superieure"
    }
    else if (temperature < seuil){
        return "la temperature est inferieur"
        
    }
    else {
        return "la temperature est dans le seuil"
    }
}

//document.writeln(getTempretureMessage(30,50))
list = ["a","b","c"]
for(let i=0; i < list.length; i++){
    console.log(list[i])
}
//for(var i=0;i<101;i++)
//console.log(i)
var i=1
while ( i<=100) {
    console.log(i)
    i++
    
}
//exercice 4

// divisible par 3 tu afficher fizz
// divisible par 5 tu affiche buzz
// divisiblke par 3 et 5 tu affiche toto
 i = 5
  for(var i =0;i<=100;i++){
 if(i%5 ==0 && i%3==0){               
     document.writeln("FizzBuzz");
 }else{                                

    if(i%3==0){                             
        document.writeln("Fizz");
    }
     if(i%5==0) {                           // si je suis divisible par 5
        document.writeln("Buzz");
    }
 }
}
document.writeln('<br>')
for(var i =0;i<=100;i++){
    if(i%5 ==0 && i%3==0){               
        document.writeln("FizzBuzz");
    }else if(i%3==0){                             
           document.writeln("Fizz");
       }
       else if(i%5==0) {                           // si je suis divisible par 5
           document.writeln("Buzz");
       }
   }
   document.writeln('<br>')

   for(var i =0;i<=100;i++){
    if(i%5 ==0 && i%3==0){               
        document.writeln("FizzBuzz");
    }
     if( !(i%5 ==0 && i%3==0) && i%3==0){                             
           document.writeln("Fizz");
       }
     if(!(i%5 ==0 && i%3==0) && i%5==0) {                           // si je suis divisible par 5
           document.writeln("Buzz");
       }
   }
   //exercice 5
   var toto = [1,2,3]
   function sommeTable (tableau) {
       let somme = 0
       for(let i = 0; i<tableau.length; i++){
        somme = somme + tableau[i]
       }
       return somme
   }
   document.write( '<br>')
  document.write( sommeTable(toto))
  document.write( '<br>')
  function produitTableau(tableau) {
    var produit= 1
      for(var i= 0;i<tableau.length;i++) {
           produit = produit * tableau[i]
      }
      return produit
  }
  document.writeln(produitTableau(toto))
  // Exercice 6
  for (var i=0;i<=15;i++) {
     if (i%2==0) {
         document.writeln("ce nombre " +i+" est pair")
     }
     else {
         document.writeln("ce nombre "+i+" est imapir")
     }
  }
  // exercice 7
  