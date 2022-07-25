let numbers = document.querySelectorAll(".number");
let functions = document.querySelectorAll(".calculator-functions > div");
let selectedNumberText = document.querySelector(".calculator-input > span");
let selectedNumberText2 = document.querySelector(".calculator-input > p");
let selectedNumber = document.querySelector(".calculator-input > h1");
let last = 0;
let count = 0;
let plus = 0;
let minus = 0;
let sum = 0;
let trigger = 10;
let zazabu = 0;
let savedNumber = 0;

numbers.forEach(function(elem) {
    elem.addEventListener("click", function() {
        for(i=0; i<=numbers.length; i++) {
            if(elem.textContent == i) {
                if(zazabu == 2) {
                    alert('Clear the number!');
                }else{
                    selectedNumberText.style.display = 'none';
                    selectedNumberText2.style.display = 'none';
                    selectedNumber.innerHTML += i;
                    savedNumber = Number(selectedNumber.innerHTML);
                }
            }
        }
    });
});

functions.forEach(function(elem) {
    elem.addEventListener("click", function() {
        count += 1;
        if(elem.className == 'plus') {
            if(zazabu == 0 || zazabu == 2){
                zazabu = 1;
                selectedNumber.innerHTML = '';
                if(count > 1) {
                    plus = sum;
                }else{
                    plus = savedNumber;
                }
                trigger = 1;
            }else {
                alert('Press "="');
            }
        }else if(elem.className == 'equal') {
            calculate();
            zazabu = 2;
        }else if(elem.className == 'empty') {
            selectedNumber.style.opacity = '0';
            selectedNumber.innerHTML = '';
            sum = 0;
            zazabu = 0;
            plus = 0;
            minus = 0;
            last = 0;
            savedNumber = 0;
            count = 0;
            selectedNumber.innerHTML = '';
        }else if(elem.className == 'minus') {
            if(zazabu == 0 || zazabu == 2){
                zazabu = 1;
                selectedNumber.innerHTML = '';
                trigger = 2;
                if(count > 1) {
                    minus = sum;
                }else{
                    minus = savedNumber;
                }
            }else {
                alert('Press "="');
            }
        }else if (elem.className == 'multiply') {
            if(zazabu == 0 || zazabu == 2){
                zazabu = 1;
                selectedNumber.innerHTML = '';
                trigger = 3;
                if(count > 1) {
                    multiply = sum;
                }else{
                    multiply = savedNumber;
                }
            }else {
                alert('Press "="');
            }
        }
    });
});

function calculate() {
        if (trigger == 1 ) {
            sum = savedNumber + plus;
            selectedNumber.innerHTML = sum;
            plus = sum;
        } else if (trigger == 2) {
            sum = minus - savedNumber;
            selectedNumber.innerHTML = sum;
            minus = sum;
        } else if (trigger == 3) {
            sum = savedNumber * multiply;
            selectedNumber.innerHTML = sum;
            multiply = sum;
        }
}