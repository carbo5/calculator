let first_number = 0;
let second_number = 0;
let operator_calc = '';
let total = document.querySelector("#result");
let operators_calc = []
let point_decimal = false;

function add(number_one, number_two){
    return number_one + number_two;
}

function substract(number_one, number_two){
    return number_one - number_two;
}

function multiply(number_one, number_two){
    return number_one * number_two;
}

function divide(number_one, number_two){
    return number_one / number_two;
}

function operate(operator, number_one,number_two){
    

    switch(operator){
        case '+': total.value = add(number_one, number_two);
                  //console.log(total.value);
        break;
        case '-': total.value = substract(number_one,number_two);
        break;
        case 'X': total.value = multiply(number_one, number_two);
        break;
        case '/' : total.value = divide(number_one, number_two);
        break;
    }

    operator = '';
}


function retrieveNumber(){
   // let total = document.querySelector("#result");
    console.log(total.value);
    if(parseFloat(total.value) === 0 && !total.value.includes('.') && operators_calc.length === 0){
        
        first_number = this.textContent;
        total.value = first_number;
        second_number = '';

       
    }else if(parseFloat(total.value) !== 0 && !total.value.includes('.') && operators_calc.length === 0){
        
        total.value += this.textContent;
        first_number = total.value;

    }else if(total.value.includes('.') && point_decimal === true /* && operators_calc.length === 0*/){
        console.log('dans décimal');
        total.value += this.textContent;
        console.log(total.value);
        first_number = total.value;
        //first_number = total.value;
    }else{
        //To do
        if(operators_calc.length === 1  /*|| operators_calc.length === 0*/){
            
            //first_number = total.value;
            total.value = '';
            second_number  += this.textContent;
             total.value = second_number;
            //total.value = second_number; 
            //console.log(operator_calc);
            console.log(first_number);
            console.log(second_number);
        }else{
            
            //total.value = second_number
         /*  if(operators_calc.length === 2){
                //first_number = total.value;
                total.value += this.textContent;
                 second_number = total.value;   
                //operate(operators_calc[1],first_number , second_number );
                //operators_calc.shift();
           }else{
                total.value += this.textContent;
           }*/
            
        }
            
        
    }
       
   // total.value = this.textContent; 
}

let numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{ 
    number.addEventListener('click', retrieveNumber)
});


//Set up des boutons oranges
let operators = document.querySelectorAll('.BGOrange');
//console.log(operators);

operators.forEach((operator) => {
    operator.addEventListener('click', ()=> {
        console.log(operator.textContent);
       // operator_calc = operator.textContent;
       point_decimal = false;

       if(operators_calc.length === 0){
            operators_calc.push(operator.textContent);
            first_number = total.value;
       }else if(operators_calc.length === 1){
           operators_calc.push(operator.textContent);
           //first_number = total.value;
           
       } 
       
       if(operators_calc.length === 2){
           console.log(first_number);
           console.log(second_number);
         if(first_number !== '' && second_number !== ''){
            operate(operators_calc[0],parseFloat(first_number) , parseFloat(second_number));
            first_number  = total.value;
            second_number = '';
            operators_calc.shift();
         }else{
             operators_calc[1] = operator.textContent;
         }  
           
       } 
        
        console.table(operators_calc);
        });
});


//Bouton A/C 
let AC_calc = document.querySelector('button[name="ac"]');


AC_calc.addEventListener('click', () => {
    total.value = 0;
    first_number = 0;
    second_number = 0;
    operators_calc = [];
});

//Bouton %
let percent = document.querySelector('button[name="percent"]');

percent.addEventListener('click', () => {
    if(total.value !== '0'){
        total.value = parseFloat(total.value) / 100;
        first_number = total.value;
        point_decimal = false;
    }
})

//Bouton plus_moins
let plusMoins = document.querySelector('button[name="plus_moins"]');

plusMoins.addEventListener('click', () => {
    if(total.value.includes('-')){
        total.value = total.value.slice(1);
        //first_number = total.value;
    }else if(total.value !== '0'){
        total.value = '-' + total.value;
        //ffirst_number = total.value;
    }
});

//Bouton décimal
let point = document.querySelector('button[name="point"]');

point.addEventListener('click' ,() => {
    if(!total.value.includes('.')){
        total.value = total.value + '.';
        point_decimal = true
       // first_number = total.value;
    } 
});



