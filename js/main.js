let first_number = '';
let second_number = '';
let total = document.querySelector("#result");
let operators_calc = []
let point_decimal = false;
let nbOperateur = 0;

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
   if(number_two !== 0){
       return number_one / number_two;
   }else{
       return "Come on!!!";
   } 
    
}

function operate(operator, number_one,number_two){
    

    switch(operator){
        case '+': first_number = add(number_one, number_two).toString();
                  //nbOperation++;  
                  //console.log(total.value);
        break;
        case '-': 
                    first_number = substract(number_one,number_two).toString();
                    //nbOperation++;
        break;
        case 'X': first_number = multiply(number_one, number_two).toString();
                  //nbOperation++;  
        break;
        case '/' : first_number = divide(number_one, number_two).toString();
                   //nbOperation++; 
        break;
    }

    
}

//À refactorer

function retrieveNumber(){

    console.log(first_number);

    if(first_number === '' && operators_calc.length === 0){
       // total.value = ''
        first_number += this.textContent;
        
        if(first_number.length > 23){
            total.value = first_number.substring(0,23);
        }else{
            total.value = first_number;
        }
            
    }else if(first_number !== '' && operators_calc.length === 0){

        first_number += this.textContent;

        if(first_number.length > 23){
            total.value = first_number.substring(0,23);
        }else{
            total.value = first_number;
        }
    }else if(first_number !== '' && operators_calc.length === 1){
        console.log(second_number);
        second_number += this.textContent;
        
        if(second_number.length > 23){
           total.value = second_number.substring(0,23); 
        }else{
           total.value = second_number; 
        }
        
    }else if(first_number !== '' && operators_calc.length === 2){
        second_number += this.textContent;

        if(second_number.length > 23){
           total.value = second_number.substring(0,23); 
        }else{
           total.value = second_number; 
        }
    }
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
       nbOperateur++; 
       // operator_calc = operator.textContent;
       point_decimal = false;
       //operators_calc.push(operator.textContent); 
       console.log(operators_calc.length);

       if(operators_calc.length === 0){
            operators_calc.push(operator.textContent);
            nbOperateur = 0;
            //first_number = total.value;
       }else if(operators_calc.length === 1 && first_number !== '' && second_number !== ''){
            operate(operators_calc[0],parseFloat(first_number) , parseFloat(second_number));
            if(first_number.length > 23){
                total.value = first_number.substring(0,23);
            }else{
                total.value = first_number;
            }
            second_number = '';
            operators_calc.shift();   
            operators_calc.push(operator.textContent);
            nbOperateur  = 0;

           //first_number = total.value;
       }else if(second_number === ''){
           console.log('Je passse');
           operators_calc[0] = operator.textContent;
           console.table(operators_calc[0]);
       } 
       
      
         
       console.table(operators_calc);
        
        });
});

//Bouton égal
const equal = document.querySelector('button[name="egal"]');

equal.addEventListener('click',() => {
    if(first_number !== '' && second_number !== '' && operators_calc.length === 1){
        console.log(first_number,second_number);
        operate(operators_calc[0], parseFloat(first_number), parseFloat(second_number));
        console.log(`First number dans égal ${first_number}`)
        if(first_number.length > 23){
            total.value = first_number.substring(0,23);
        }else{
            total.value = first_number;
        }
        second_number = '';
        operators_calc.shift();
    }
});


//Bouton A/C 
let AC_calc = document.querySelector('button[name="ac"]');


AC_calc.addEventListener('click', () => {
    total.value = 0;
    first_number = '';
    second_number = '';
    operators_calc = [];
    nbOperation = 0;
});

//Bouton %
let percent = document.querySelector('button[name="percent"]');

percent.addEventListener('click', () => {
    if(first_number !== '' && second_number === ''){
        first_number = (parseFloat(first_number) / 100).toString();
        if(first_number.length > 23){
            total.value = first_number.substring(0,23);
        }else{
            total.value = first_number;
        }
        point_decimal = false;
    }else if(second_number !== '' && operators_calc.length > 0){
        second_number = (parseFloat(first_number) / 100).toString();
        if(second_number.length > 23){
            total.value = second_number.substring(0,23); 
         }else{
            total.value = second_number; 
        }
        point_decimal = false;
    }
})

//Bouton plus_moins
let plusMoins = document.querySelector('button[name="plus_moins"]');

plusMoins.addEventListener('click', () => {
    console.log(typeof first_number);

    if(second_number === '' && first_number.includes('-') && total.value !== '0'){
        first_number = first_number.slice(1);
        if(first_number.length > 23){
            total.value = first_number.substring(0,23);
        }else{
            total.value = first_number;
        }
    }else if(second_number === '' && !first_number.includes('-') && total.value !== '0'){
        first_number = '-' + first_number;
        if(first_number.length > 23){
            total.value = first_number.substring(0,23);
        }else{
            total.value = first_number;
        }
        //ffirst_number = total.value;
    }else if(second_number !== '' && !second_number.includes('-') && total.value !== '0'){
        second_number = '-' + second_number;
        if(second_number.length > 23){
            total.value = second_number.substring(0,23); 
        }else{
            total.value = second_number; 
        }
    }else if (first_number === '' && total.value === '0'){
        total.value === '0';
    }else if(second_number === '0' && operators_calc.length > 0){
        total.value = '0';
    }else if(second_number.includes('-')){
        second_number = second_number.slice(1);
        if(second_number.length > 23){
            total.value = second_number.substring(0,23); 
        }else{
            total.value = second_number; 
        }
    }
});

//Bouton décimal
let point = document.querySelector('button[name="point"]');

point.addEventListener('click' ,() => {
    if(second_number === '' &&  !first_number.includes('.') && operators_calc.length === 0){
       if(first_number === ''){
           first_number += '0.';
           if(first_number.length > 23){
            total.value = first_number.substring(0,23);
           }else{
            total.value = first_number;
           }
           console.log(first_number); 
       }else{
           first_number += '.';
           if(first_number.length > 23){
            total.value = first_number.substring(0,23);
           }else{
            total.value = first_number;
           }
           point_decimal = true;
       } 
        
       // first_number = total.value;
    }else if(second_number !== '' && !second_number.includes('.') && operators_calc.length > 0){
        second_number += '.';
        if(second_number.length > 23){
            total.value = second_number.substring(0,23); 
        }else{
            total.value = second_number; 
        }
        point_decimal = true;
    }else if(second_number === '' && !second_number.includes('.') && operators_calc.length > 0){
        second_number += '0.';
        if(second_number.length > 23){
            total.value = second_number.substring(0,23); 
        }else{
            total.value = second_number; 
        }
        point_decimal = true;
    } 
});



