const sectionResult = document.querySelector('.empty--results')[0];
const inputDiv = document.getElementsByClassName('input-Div"')[0];

const calculateButton = document.getElementsByClassName('button-calculate')[0];




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



function calculateClick(event){
    const inputAmount = document.getElementById('mortgage-amount');
    const inputInterest = document.getElementById('interest-rate');
    const inputYears = document.getElementById('mortgage-term');
    const image = document.getElementsByClassName('img-calculator')[0];
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

    if (repayment.checked) {
        alert(calculateMontlyPayment(amount, interesti, years));
        titleResult.innerHTML = 'Your results';
        paragraphResult.innerHTML = `Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.`;
        

    }
    if(interest.checked){
        alert(calculateOnlyInterest(amount, interesti, years));
    }
}

calculateButton.addEventListener('click', calculateClick);