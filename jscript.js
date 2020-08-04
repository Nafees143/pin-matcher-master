//first section

document.getElementById("similar").style.display = "none"
document.getElementById("dissimilar").style.display = "none"

document.getElementById('generatePin').addEventListener('click' , function(){
    const random = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('displayRandomNumber').value = random;  
})

//secound section

function digit(x){
    document.getElementById("displayResult").value += x;
}

//third section

function submitValue() {
    const generateValue= document.getElementById("displayRandomNumber").value;
    const inputValue = document.getElementById("displayResult").value;
    if (generateValue == inputValue) {
        document.getElementById("similar").style.display = "block";
        document.getElementById("dissimilar").style.display = "none";
        document.getElementById("displayResult").value = " " ;
        document.getElementById("displayRandomNumber").value = " " ;
    } 
    else {
        document.getElementById("dissimilar").style.display = "block";
        document.getElementById("similar").style.display = "none";
        document.getElementById("displayResult").value = " " ;
        actionLeft();
    }
}

//fourth section

   document.getElementById("delete").addEventListener('click' , function(){
   document.getElementById("displayResult").value = document.getElementById("displayResult").value.slice(0,-1); 
})

    document.getElementById("clearAll").addEventListener('click',function(){
    document.getElementById("displayResult").value= " " ;
    })

//fifth section

let Count = 0;
function actionLeft() {
    var generateValue = document.getElementById("displayRandomNumber").value;
    var inputValue = document.getElementById("displayResult").value;
    Count++ ;
    if (Count == 1 && inputValue !== generateValue) {
        document.getElementById("actionLeft").innerText = "2 try left";
    }
    else if (Count == 2 && inputValue !== generateValue) {
        document.getElementById("actionLeft").innerText = "1 try left";
    }
    else if (Count == 3 && inputValue !== generateValue) {
        document.getElementById("actionLeft").style.display = "none";
        document.getElementById("submitButton").disabled = true;
    }
}