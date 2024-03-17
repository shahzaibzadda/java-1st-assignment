
// Chapter # 1-7 | Introduction to Javascript | Data Types | Alert | Arithematic Operators

//Function start Alert Name Button
document.getElementById("alert-name").onclick = function(){
    alert("Shahzaib Ghullam Rasool")
}
//Function start Alert Number Button
document.getElementById("alert-number").onclick = function(){
    alert("0326-9850071")
}

//Function start Show Variable Name Button
document.getElementById("var-name").onclick = function(){
    document.getElementById("statement").innerHTML = "<i>Some rules for declare variable.</i>"
    document.getElementById("result").innerHTML = "<ul><li>A variable name cannot contain spaces.</li><li>A variable name can contain only letters, numbers, dollor signs(&) and underscore(-)</li><li>Through a Variable name cannot be any of javascript keywords. It can contain keywords.</li></ul>"
}

// Function start Show Camel Case Button
document.getElementById("camel-case").onclick = function(){
    document.getElementById("statement").innerHTML = "<i>Some examples of camelcase word.</i>"
    document.getElementById("result").innerHTML = "<b><ol><li>Javascript is Case sensitive Language.</li><li>Javascript is easy to understand.</li></ol></b>"
}

// Function start Sum Number Button
let a = 30;
let b = 100;
let sum = a+b
document.getElementById("add-numb").onclick = function(){
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br /> Sum = a+b`
    document.getElementById("result").innerHTML = `Sum = ${sum}`
}

// Function start Subtract Number Button
let sub = a-b
document.getElementById("sub-numb").onclick = function(){
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br /> Sub= a-b`
    document.getElementById("result").innerHTML =  `Sub = ${sub}`
}

// Function start Multiply Number Button
let c = 3;
let d = 8;
let multiply = c*d;
document.getElementById("multiple").onclick = function (){
    document.getElementById("statement").innerHTML = `a = ${c} <br/> b = ${d} <br /> Multiply= a*b`
    document.getElementById("result").innerHTML = `Multiply = ${multiply}`
}

// Function start Divide Number Button
let divide = c/b;
document.getElementById("division").onclick = function (){
    document.getElementById("statement").innerHTML = `c = ${c} <br/> b = ${b} <br /> Divided = c/b`
    document.getElementById("result").innerHTML = `= ${divide}`
}

// Function start Calculate Number Button
let result = a*c+(d/a)-b+c;
document.getElementById("cal-numb").onclick = function (){
    document.getElementById("statement").innerHTML = `a = ${a} <br /> b = ${b} <br /> c = ${c} <br /> d = ${d} <br /> Calculate Number = a*c+(d/a)-b+c`
    document.getElementById("result").innerHTML = `Result = ${result}`
}

// Function start Clear Statement Button
document.getElementById("clear").onclick =function(){
    document.getElementById("statement").innerText = ""
}

// Function start Output Button
document.getElementById("output").onclick = function(){
    document.getElementById("result").innerHTML = ""
}