let numbers = document.querySelectorAll(".number");
let functions = document.querySelectorAll(".calculator-functions > div");
let selectedNumberText = document.querySelector(".calculator-input > p");
let selectedNumber = document.querySelector(".calculator-input > h1");
let count = 0;
let sum = 0;
let minusCount = 0;
let plusCount = 0;
let savedNumber = 0;
const numbersList = [0];

numbers.forEach(function(elem) {
    elem.addEventListener("click", function() {
        if(count >= 1) {
            selectedNumber.innerHTML = '';
            count = 0;
        }
        for(i=0; i<=numbers.length; i++) {
            if(elem.textContent == i) {
                selectedNumberText.style.display = 'none';
                selectedNumber.innerHTML += i;
                selectedNumber.style.marginRight = '20px';
                selectedNumber.style.opacity = '1';
                savedNumber = Number(selectedNumber.innerHTML);
            }
        }
    });
});

functions.forEach(function(elem) {
    elem.addEventListener("click", function() {
        count += 1;
        if(elem.className == 'plus') {
                numbersList.unshift(savedNumber);
                selectedNumber.innerHTML = '';
                calculate(elem.className);
        }else if(elem.className == 'equal') {
            numbersList.unshift(savedNumber);
            calculate(elem.className);
        }else if(elem.className == 'empty') {
            selectedNumber.style.opacity = '0';
            selectedNumber.innerHTML = '';
            sum = 0;
            savedNumber = 0;
            numbersList.splice(0,numbersList.length);
            numbersList.unshift(0);
            plusCount = 0;
            minusCount = 0;
            count = 0;
            selectedNumber.innerHTML = '';
        }else if(elem.className == 'minus') {
                numbersList.unshift(savedNumber);
                selectedNumber.innerHTML = '';
                calculate(elem.className);
        }else if (elem.className == 'multiply') {
        }
    });
});

function calculate(param) {
        if(param == 'plus') {
            if(plusCount == 1 && minusCount == 0) {
                sum = numbersList[1] + numbersList[0];
                console.log(sum);
                numbersList.unshift(sum);
                selectedNumber.innerHTML = sum;
                count = 1;
                plusCount = 1;
            }else if(plusCount == 0 && minusCount == 0) {
                sum = numbersList[1] + numbersList[0];
                numbersList.unshift(sum);
                selectedNumber.innerHTML = sum;
                count = 1;
                plusCount = 1;
            }else if (minusCount == 1) {
                if(numbersList[1] > 0){sum = numbersList[1] - numbersList[0]
                    numbersList.unshift(sum);
                    selectedNumber.innerHTML = sum;}else{sum = numbersList[0]
                    numbersList.unshift(sum);
                    selectedNumber.innerHTML = sum;
                    }
                    count = 1;
                    minusCount = 0;
                    plusCount = 1;
            }
        }else if(param == 'minus') {
            if(minusCount == 1 && plusCount == 0) {
                if(numbersList[1] > 0){sum = numbersList[1] - numbersList[0]
                    numbersList.unshift(sum);
                    selectedNumber.innerHTML = sum;}else{sum = numbersList[0]
                    numbersList.unshift(sum);
                    selectedNumber.innerHTML = sum;
                    }
                    count = 1;
                    minusCount = 1;
            }else if (minusCount == 0 && plusCount == 0) {
                if(numbersList[1] > 0){sum = numbersList[1] - numbersList[0]
                    numbersList.unshift(sum);
                    selectedNumber.innerHTML = sum;}else{sum = numbersList[0]
                    numbersList.unshift(sum);
                    selectedNumber.innerHTML = sum;
                    }
                    count = 1;
                    minusCount = 1;
            }else if (plusCount == 1) {
                sum = numbersList[1] + numbersList[0];
                console.log(sum);
                numbersList.unshift(sum);
                selectedNumber.innerHTML = sum;
                count = 1;
                plusCount = 0;
                minusCount = 1;
            }
        }else if (param == 'equal') {
            console.log('bemen');
            if(plusCount == 1) {
                console.log('plus');
                sum = numbersList[1] + numbersList[0];
                console.log(sum);
                numbersList.unshift(sum);
                selectedNumber.innerHTML = sum;
                count = 1;
                minusCount = 0;
                plusCount = 0
                numbersList.splice(0,numbersList.length);
                savedNumber = 0;
                numbersList.unshift(sum);
            }else if (minusCount == 1) {
                console.log('minus');
                if(numbersList[1] > 0){sum = numbersList[1] - numbersList[0]
                    numbersList.unshift(sum);
                    selectedNumber.innerHTML = sum;}else{sum = numbersList[0]
                    numbersList.unshift(sum);
                    selectedNumber.innerHTML = sum;
                    }
                    count = 1;
                    plusCount = 0;
                    minusCount = 0;
                    numbersList.splice(0,numbersList.length);
                    savedNumber = 0;
                    numbersList.unshift(sum);
            }
        }
}