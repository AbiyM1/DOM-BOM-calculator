
var userInput = document.getElementById("inputData").value ;

var defaultVal = "";

function getVal(userInputVal){
      
    
    defaultVal += userInputVal;

    document.getElementById("inputData").value = defaultVal;
}

function inputValidation(){

    var userInput = document.getElementById("inputData").value;
    try{
        document.getElementById("resultValue").value = eval(userInput);

    }catch(e){
        document.getElementById("resultValue)").value = "Invalid Input";
    }

}

function clearInput(){
    defaultVal = "";
    document.getElementById("inputData").value = "";
    document.getElementById("resultValue").value = "";
}


function calculate(){

    document.getElementById("resultValue").value = eval(document.getElementById("inputData").value);
   

}
