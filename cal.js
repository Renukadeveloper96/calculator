
 
//function that display value 

 function dis(valu1) 

{ 

    document.getElementById("result").value+=valu1 

} 

   

//function that evaluates the digit and return result 

function solve() 

{ 

    var x = document.getElementById("result").value 

    var y = eval(x) 

    document.getElementById("result").value = y 

} 

   

//function that clear the display 

function clr() 

{ 

    document.getElementById("result").value = "" 

} 