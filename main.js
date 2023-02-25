/* console.log("Hello World!")
document.getElementById().innerHTML = ""
alert()
prompt()
confirm()

let asem = 5
let alusche = "Hase"

asem.innerHTML = "green"

let = fangeDasEinhorn = () => {

} */

// Lev1_1_js-einführung_classList

/*  function myFunction() {
  const ueberschrift = document.getElementById("headline").classList;
  const liste = document.getElementById("list").classList;  
  liste.add("liste");
  ueberschrift.add("heading")
}

myFunction() 

// zweite Variante ohne Variable

function myFunction() {
  document.getElementById("headline").classList.add("heading");
  const liste = document.getElementById("list").classList.add("liste");
}

myFunction(); */

// Lev 1_2

// function changeColor() {
//     let input = document.getElementById("inputTag").value
//     document.getElementsByTagName("BODY")[0].style.backgroundColor = input
// }

// Lev 1_3

/* let block1 = document.getElementById("block1") 
let block2 = document.getElementById("block2")
let block3 = document.getElementById("block3")
let block4 = document.getElementById("block4")
let block5 = document.getElementById("block5")
let block6 = document.getElementById("block6")
let block7 = document.getElementById("block7")
let block8 = document.getElementById("block8") */

/* let result = document.getElementById('result').innerHTML = 0 */
/* result.innerHTML = '0' */
/* let block = 0
let block1 =  1
let block2 = 10
let block3 = 100
let block4 = "reset"

let block5 = 1
let block6 = 10
let block7 = 100
let block8 = 2


let defaults = document.getElementById('result').innerHTML = 0

let summ

function myFunction1 () {
    result = summ + block1
    summ = result
    defaults.document.getElementById('result').innerHTML = result

}

function myFunction2 () {
 result =  defaults + block2
    summ = document.getElementById('result').innerHTML = result
}

function myFunction3 () {
    result =  0 + block3
    let defaults = document.getElementById('result').innerHTML = result
}

function myFunction4 () {

}

function myFunction5 () {

}

function myFunction6 () {

}

function myFunction7 () {

}

function myFunction8 () {

} */

// neuer Versuch lev 1_3

// in der Vriable v wird der String vom Html Document geparsed
let v = parseInt(document.getElementById("pResult").innerHTML);
console.log(zahl);


function fn_add(zahl) {
  v += zahl;
  console.log(v)
  document.getElementById("pResult").innerHTML = v
  console.log(document.getElementById("pResult").innerHTML)

}

function fn_substract(zahl) {
  v -= zahl;
  console.log(v)
  document.getElementById("pResult").innerHTML = v
  console.log(document.getElementById("pResult").innerHTML)
}

function fn_reset(){
    v = 0
    document.getElementById("pResult").innerHTML = v;
    console.log(document.getElementById("pResult").innerHTML)
}

function fn_multi(){
    v *= 2
    console.log(v)
    document.getElementById("pResult").innerHTML= v;
    console.log(document.getElementById("pResult").innerHTML)
}