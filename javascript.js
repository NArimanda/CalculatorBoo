let workingArray = ['0'];

// different objects of relevence. 
let clearMemoryButton = document.querySelector('#ACbutton')
let NavBar= document.querySelector('nav')
let numberButtons = document.querySelectorAll('.numericalValues > button')
let Operators = document.querySelectorAll('.operatorFunctions >button')


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

    if(workingArray.length ==3){
        
        workingArray = [evaluator(workingArray)]
    }
    display()
}




for (button of numberButtons){
    console.log('n')
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


let addition = (a,b)=> (a+b)

let subtraction = (a,b) => (a-b)

let division = (a,b) => (a/b)

let multiplication = (a,b) => (a*b)

display();