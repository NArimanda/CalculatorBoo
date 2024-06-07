let workingArray = ['0'];

// different objects of relevence. 
let clearMemoryButton = document.querySelector('#ACbutton')
let NavBar= document.querySelector('nav')
let numberButtons = document.querySelectorAll('.numericalValues > button')
let Operators = document.querySelectorAll('.operatorFunctions >button')

let ClearMemory = function(){
    workingArray = [0];
    display();
    console.log(workingArray)
}

clearMemoryButton.addEventListener('click', ClearMemory)

let NumberClicked = function(){
    if (isNaN(workingArray.at(-1))){
        workingArray.push(this.innerText)
    }
    else if(workingArray.at(0)=='0'){
        workingArray.pop()
        workingArray.push(this.innerText)
    }
    else{
        x = workingArray.pop()
        workingArray.push(x+this.innerText)
    }
    console.log(workingArray)

    
    display()
}

let OppWatch = function(){
    if(workingArray.length ==3){
        workingArray = [evaluator(workingArray)];
        display()
        
    }
    else if (isNaN(workingArray.at(-1))){
        workingArray.pop()
    }
    
    workingArray.push(this.innerText)
    if(workingArray.at(-1) == '='){
        workingArray.pop()
    }
    console.log(workingArray)
}

for (opp of Operators){
    opp.addEventListener('click', OppWatch)
}

for (button of numberButtons){

    button.addEventListener('click', NumberClicked)
    
}

let display = function(){
    NavBar.innerText = workingArray.at(-1)

}


let evaluator = function(Arr){
    
    switch(Arr.at(1)){
        case '+': 
            return addition(Arr.at(0), Arr.at(-1));
            break;
        case '-':
            return subtraction(Arr.at(0), Arr.at(-1));
            break;
        case '/':
            return division(Arr.at(0), Arr.at(-1));
            break;
        case '*':
            return multiplication(Arr.at(0), Arr.at(-1));
            break;
    }
}


let addition = (a,b)=> (Number(a)+Number(b))

let subtraction = (a,b) => (a-b)

let division = (a,b) => (a/b)

let multiplication = (a,b) => (a*b)

display();