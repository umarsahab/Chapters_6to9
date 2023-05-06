// Question 1
var a = 10;
document.write("Results:" + "<br/>" + "The value of a is : " + a + "<br/>")
document.write("<br>")

document.write("The value of ++a is :" + ++a + "<br/>")

document.write("Now the value of a is : " + a + "<br/>")

document.write("<br>")

document.write("The value of a++ is :" + a++ + "<br/>")

document.write("Now the value of a is : " + a + "<br/>")
document.write("<br>")

document.write("The value of --a is :" + --a + "<br/>")

document.write("Now the value of a is : " + a + "<br/>")

document.write("<br>")

document.write("The value of a-- is :" + a-- + "<br/>")

document.write("Now the value of a is : " + a + "<br/>")

// Question 2
var numa = 2;
var numb = 1;
var numa1 = --numa;
var numa2 = --numa1;
var numa3 = --numa2;
var numa4 = --numa3
document.write("a is : " + numa4 + "<br>")
var numb1 = --numb;
var numb2 = --numb1 + ++numb1;
var numb3 = --numb2 + ++numb2 + numb2--;
document.write("b is : " + numb3 + "<br>")
var resultsnum = --numa;
console.log(resultsnum);
var resultsnum1 = --numa - --numb;
console.log(resultsnum1)
var resultsnum2 = --numa - --numb + ++numb;
console.log(resultsnum2)
var finalresults = --numa - --numb + ++numb + numb--;
console.log(finalresults)
document.write("Results is : " + finalresults)

document.write("<br>")

//Question 3 
var usrName = prompt("inter your name sir/Medam ;");
document.write("Assalamalikum " + usrName)

document.write("<br>")
document.write("<br>")

// Question 4 "Empty"

// Question 5

var number = prompt("Enter Any number for Table you want")
if(number == ''){
    document.write('5 ' + ' X ' + '1 ' + '= ' + 5*1 + '<br />')
    document.write('5 ' + ' X ' + '2 ' + '= ' + 5*2 + '<br />')
    document.write('5 ' + ' X ' + '3 ' + '= ' + 5*3 + '<br />')
    document.write('5 ' + ' X ' + '4 ' + '= ' + 5*4 + '<br />')
    document.write('5 ' + ' X ' + '5 ' + '= ' + 5*5 + '<br />')
    document.write('5 ' + ' X ' + '6 ' + '= ' + 5*6 + '<br />')
    document.write('5 ' + ' X ' + '7 ' + '= ' + 5*7 + '<br />')
    document.write('5 ' + ' X ' + '8 ' + '= ' + 5*8 + '<br />')
    document.write('5 ' + ' X ' + '9 ' + '= ' + 5*9 + '<br />')
    document.write('5 ' + ' X ' + '10 ' + '= ' + 5*10 + '<br />')
}
else{
    document.write(number + ' X ' + '1 ' + '= ' + number*1 + '<br />')
    document.write(number + ' X ' + '2 ' + '= ' + number*2 + '<br />')
    document.write(number + ' X ' + '3 ' + '= ' + number*3 + '<br />')
    document.write(number + ' X ' + '4 ' + '= ' + number*4 + '<br />')
    document.write(number + ' X ' + '5' + '= ' + number*number + '<br />')
    document.write(number + ' X ' + '6 ' + '= ' + number*6 + '<br />')
    document.write(number + ' X ' + '7 ' + '= ' + number*7 + '<br />')
    document.write(number + ' X ' + '8 ' + '= ' + number*8 + '<br />')
    document.write(number + ' X ' + '9 ' + '= ' + number*9 + '<br />')
    document.write(number + ' X ' + '10 ' + '= ' + number*10 + '<br />')
    
}

//Question 6

var subject1 = prompt("Inter your first subject name")
var subject2 = prompt("Inter your Second subject name")
var subject3 = prompt("Inter your third subject name")

document.getElementById('sub1').innerHTML = subject1
document.getElementById('sub2').innerHTML = subject2
document.getElementById('sub3').innerHTML = subject3

var firstSubNumber = +prompt("Enter Your "+ subject1 +" Number")
var secondSubNumber = +prompt("Enter Your "+ subject2 +" Number")
var thirdSubNumber = +prompt("Enter Your "+ subject3 +" Number")

document.getElementById('eng').innerHTML = firstSubNumber
document.getElementById('urdu').innerHTML = secondSubNumber
document.getElementById('math').innerHTML = thirdSubNumber

var per1 = (firstSubNumber/100) * 100
var per2 = (secondSubNumber/100) * 100
var per3 = (thirdSubNumber/100) * 100

document.getElementById('per1').innerHTML = per1 + "%"
document.getElementById('per2').innerHTML = per2 + "%"
document.getElementById('per3').innerHTML = per3 + "%"

var totalObtainMark = firstSubNumber + secondSubNumber + thirdSubNumber
document.getElementById("obtm").innerHTML = totalObtainMark

var percentage = (totalObtainMark/300) * 100
document.getElementById('per').innerHTML = percentage + "%"

