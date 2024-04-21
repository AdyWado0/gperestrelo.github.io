//ALGORITMO -> Tenho 1 numero, quando clicar quero que esse numero passe para outra variavel, que entao retorna

function isNumberKey(txt, evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 46) 
    {
         //Check if the text already contains the . character
        if (txt.value.indexOf('.') === -1) {
        return true;
    } 
    else
    {
        return false;
    }
    } 
    else 
    {
        if (charCode > 31 &&
            (charCode < 48 || charCode > 57))
                return false;
    }
    return true;
}

function multiply()
{
    let num1 = document.getElementById("num1");
    let display = document.getElementById("display");
    let numTotal = display.value * num1.value;
    
    if(num1.value == "")
    {
        alert('You need to insert a value');

    num1.autofocus = true;
    }
    else if (display.value == "")
    {
        display.value = num1.value;
        num1.value = "";

    num1.autofocus = true;
    }
    else
    {
        display.value = numTotal;
        num1.value = "";

    
    }
    num1.focus();
}

function divide()
{
    let num1 = document.getElementById("num1");
    let display = document.getElementById("display");
    let numTotal = display.value / num1.value;
    
    if(num1.value == "")
    {
        alert('You need to insert a value');
    }
    else if (display.value == "")
    {
        display.value = num1.value;
        num1.value = "";
    }
    else if (num1.value == 0 || display.value == 0)
    {
        alert("You cannot divide by 0")
    }
    else
    {
        display.value = numTotal;
        num1.value = "";
    }
    num1.focus();
}

function sum()
{
    let num1 = document.getElementById("num1");
    let display = document.getElementById("display");
    let numTotal = display.value + num1.value;
    
    if(num1.value == "")
    {
        alert('You need to insert a value');
    }
    else if (display.value == "")
    {
        display.value = num1.value;
        num1.value = "";
    }
    else
    {
        display.value = numTotal;
        num1.value = "";
    }
    num1.focus();
}

function minus()
{
    let num1 = document.getElementById("num1");
    let display = document.getElementById("display");
    let numTotal = display.value - num1.value;
    
    if(num1 == "")
    {
        alert('You need to insert a value');
    }
    else if (display.value == "")
    {
        display.value = num1.value;
        num1.value = "";
    }
    else
    {
        display.value = numTotal;
        num1.value = "";
    }
    num1.focus();
}


function clear()
{
    document.getElementById("num1").value = "";
}

function numbers()
{
    if(document.getElementsByClassName('numbers').)
}
