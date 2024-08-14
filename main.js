const sectionResult = document.querySelector('.empty--results')[0];
const inputDiv = document.getElementsByClassName('input-Div"')[0];
const image = document.getElementsByClassName('img-calculator')[0];
const calculateButton = document.getElementsByClassName('button-calculate')[0];
const resetAllButton = document.getElementsByClassName('clear-button')[0];



function calculateMontlyPayment(inputAmount, inputInterest, inputYears){
    const principal = parseFloat(inputAmount);
    const calculatedInterest = parseFloat(inputInterest) / 100 / 12;
    const calculatedPayments = parseFloat(inputYears) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);

    const monthly = (principal * x * calculatedInterest) / (x - 1);

    const monthlyPayment = monthly.toFixed(2);

    const totalPayment = (monthlyPayment * calculatedPayments).toFixed(2);


    return [monthlyPayment, totalPayment];
}

function calculateOnlyInterest(inputAmount, inputInterest, inputYears){
    const totalPayment = calculateMontlyPayment(inputAmount, inputInterest, inputYears)[1]
    const principal = parseFloat(inputAmount);
    const totalInterest = (totalPayment - principal).toFixed(2);

    return totalInterest;
}

const articleResult = document.getElementsByClassName('results-article')[0];
const resultDiv = document.createElement('div');
resultDiv.classList.add('div-result');
articleResult.appendChild(resultDiv);


const divMonthly = document.createElement('div');
divMonthly.classList.add('payment-result');
resultDiv.appendChild(divMonthly);
const h3Payment = document.createElement('h3');
h3Payment.style.textAlign = 'left';
divMonthly.appendChild(h3Payment);
const paragraphPayment = document.createElement('p');
divMonthly.appendChild(paragraphPayment);

const divTotal = document.createElement('div');
divTotal.classList.add('result-total');
resultDiv.appendChild(divTotal);
const h3Total = document.createElement('h3');
divTotal.appendChild(h3Total);
const paragraphTotal = document.createElement('p');
divTotal.appendChild(paragraphTotal);

resultDiv.style.display = 'none';

function clearResults(){
    resultDiv.style.display = 'none';
    image.style.display = 'block';
    articleResult.style['align-items'] = 'center';
    titleResult.innerHTML = 'Results shown here';
    paragraphResult.innerHTML = `Complete the form and click “calculate repayments” to see what your monthly repayments would be.`;
    

    const inputDiv = document.getElementsByClassName('input-Div');
    

    for (let i = 0; i <inputDiv.length; i++) {
        inputDiv[i].classList.contains('error-div') ? inputDiv[i].classList.remove('error-div') : inputDiv[i].classList.add('error-div');
    }
}

function calculateClick(event){
    const inputAmount = document.getElementById('mortgage-amount');
    const inputInterest = document.getElementById('interest-rate');
    const inputYears = document.getElementById('mortgage-term');
    
    const inputDiv = document.getElementsByClassName('input-Div');
    const amount = inputAmount.value;
    const interesti = inputInterest.value;
    const years = inputYears.value;
    const titleResult = document.getElementsByClassName('title-result')[0];
    const paragraphResult = document.getElementsByClassName('paragraph-result')[0];
    const repayment = event.target.parentElement.repayment;
    const interest = event.target.parentElement.interest;

    if (amount === '' || interesti === '' || years === '') {
        for (let i = 0; i <inputDiv.length; i++) {

        inputDiv[i].classList.contains('error-div') ? inputDiv[i].classList.remove('error-div') : inputDiv[i].classList.add('error-div');
        }
        return;
        
    }

    image.style.display = 'none';
    titleResult.innerHTML = 'Your results';
    articleResult.style['align-items'] = 'flex-start';
    paragraphResult.innerHTML = `Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.`;
    resultDiv.style.display = 'block';
    

        

    if (repayment.checked) {
        h3Payment.innerText = 'Your monthly repayment';
        paragraphPayment.innerText = `${calculateMontlyPayment(amount, interesti, years)[0]}`;
        h3Total.innerText = `Total you'll repayment over the term`;
        paragraphTotal.innerText = `${calculateMontlyPayment(amount, interesti, years)[1]}`;
    }
    if(interest.checked){
        
        h3Payment.innerText = 'Your total interest';
        paragraphPayment.innerText = `${calculateOnlyInterest(amount, interesti, years)}`;
        h3Total.innerText = `Total you'll repayment over the term`;
        paragraphTotal.innerText = `${calculateMontlyPayment(amount, interesti, years)[1]}`;
    }
}

calculateButton.addEventListener('click', calculateClick);

resetAllButton.addEventListener('click', clearResults);