function computerLoan() {

    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;
    const interest = (amount * (interest_rate * 0.01)) /months;
    let payment = ((amount / mounths) + interest).toFixed(2);  //ca/culate monthly payment


    //regedit to add a comma after every three digits
    // payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row

    payment = document.querySelector('#payment').textContent = 'Monthly Payment = ${paymet}'
}