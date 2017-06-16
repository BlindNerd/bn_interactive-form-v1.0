document.addEventListener('DOMContentLoaded', () => {


    // declare all variables

const name = document.getElementById('name'); // grab the name field element
const jobRole = document.getElementById('title'); // grab the Job Role element
const tshirtDiv = document.getElementById('colors-js-puns'); // grab the t-shrit element
const tDesign = document.getElementById('design');
const tColor = document.getElementById('color');
const jsPuns = `<option value="cornflowerblue">Cornflower Blue</option>
<option value="darkslategrey">Dark Slate Grey</option>
<option value="gold">Gold</option>`
const heartJs = `<option value="tomato">Tomato</option>
<option value="steelblue">Steel Blue</option>
<option value="dimgrey">Dim Grey</option>`
const mail = document.getElementById('mail');
mail.placeholder = 'john@example.com'; // add a placeholder to the email field
const jobInput = document.getElementById('other-title'); // create the text field for the other Job Role selection
const activities = document.getElementsByClassName('activities')[0];
const list = activities.children;
const all = document.getElementsByName('all')[0];
const jsFrameworks = document.getElementsByName('js-frameworks')[0];
const jsLibs = document.getElementsByName('js-libs')[0];
const express = document.getElementsByName('express')[0];
const node = document.getElementsByName('node')[0];
const buildTools = document.getElementsByName('build-tools')[0];
const npm = document.getElementsByName('npm')[0];
let total = 0;
const totalText = 'Total Price = $';
const totalNode = document.createElement('h3');
let activitiesCount = 0;
const select = document.getElementById('select_method');
const payment = document.getElementById('payment');
const credit = document.getElementById('credit-card');
const payPal = document.getElementsByTagName('p')[0];
const bitCoin = document.getElementsByTagName('p')[1];
const form = document.getElementsByTagName('form')[0];
const error = document.createElement('span');
const error2 = document.createElement('p');
error2.style.color = 'red';
const nameError = 'Please enter your name.';
const emailError = 'Please enter an email address.';
const actError = 'Please pick one of our activites.';
const creditError = 'Please enter a Credit Card Number.';
const jobError = 'Please enter your Job Role.'
const paymentError = 'Please select form of payment.';
const zipError = 'Please enter a 5 digit zip code.'
const creditError2 = 'Please enter a Credit Card number between 13 and 16 digits.'
const cvvError = 'Please enter a valid cvv its the 3 digit number on the back of your card.'
const cvvError2 = 'Please enter the three digit number on the back of your card.'
const emailError2 = 'example: john@example.com'
const error3 = document.createElement('p');
const error4 = document.createElement('p');
error4.style.color = 'red';
const button = document.getElementsByTagName('button')[0];
const ccNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const regText = activities.children;
error.style.color = 'red';



// const jobInput = document.createElement('input');
// jobInput.type = 'text';
// jobInput.id = 'other-title';
// jobInput.placeholder = ' Your Job Role'; // add job role to the input field for desciption
// jobRole.after(jobInput);
jobInput.className = 'is-hidden';


  name.focus(); // when the page loads add focus to the name input field

      // Job Role event adds input to other selection and toggles it if you select another selection

  jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
      jobInput.className = '';
    } else if (e.target.value !== 'other') {
      jobInput.className = 'is-hidden';
    }
  });

      // t-Shirt info
  tshirtDiv.className = 'is-hidden';

tDesign.addEventListener('change',  (e) => {
          // depending on selection display that menu
    if (e.target.value === 'js puns') {
      tshirtDiv.className = '';
      tColor.innerHTML = jsPuns;
    } else if (e.target.value === 'heart js') {
      tshirtDiv.className = '';
      tColor.innerHTML = heartJs;
    }else {
       tshirtDiv.className = 'is-hidden';
    }
  });

              // Registar for Activities

//Create an event listener to tally the total and keep track of activitys
all.addEventListener('change', (e) => {

  if (e.target.checked) {
    total += 200; // make sure to tally the Main Conferece dollars
    totalNode.textContent = totalText + total;
    npm.parentNode.after(totalNode);
    activitiesCount ++; // makeing sure one of the activities has been checked
  } else {
    total -= 200;
    totalNode.textContent = totalText + total;
    activitiesCount -= 1; // if they uncheck we erase an activity to keep the count up
  }
});
function registar (activity) { // create a function to call all the activitys on to tally up the total
  activity.addEventListener('change', (e) => {

    if (e.target.checked) {
      total += 100;
      totalNode.textContent = totalText + total;
      npm.parentNode.after(totalNode);
      activitiesCount ++
    } else {
      total -= 100;
      totalNode.textContent = totalText + total;
      activitiesCount -= 1;
    }
          // disable like time activities
    if (jsFrameworks.checked) {
      express.disabled = true;
    } else {
      express.disabled = false;
    }

    if (jsLibs.checked) {
      node.disabled = true;
    } else {
      node.disabled = false;
    }

    if (express.checked) {
      jsFrameworks.disabled = true;
    } else {
      jsFrameworks.disabled = false;
    }

    if (node.checked) {
      jsLibs.disabled = true;
    } else {
      jsLibs.disabled = false;
    }
  });
}
    // Call the registar function on all activities
 registar(jsFrameworks);
 registar(jsLibs);
 registar(express);
 registar(node);
 registar(buildTools);
 registar(npm);

    // Payment Information

payPal.className = 'is-hidden';
bitCoin.className = 'is-hidden';

payment.addEventListener('change', (e) => {

  if (e.target.value === 'paypal') {
    payPal.className = '';
    credit.className = 'is-hidden';
    bitCoin.className = 'is-hidden';
  } else if (e.target.value === 'bitcoin'){
    payPal.className = 'is-hidden';
    credit.className ='is-hidden';
    bitCoin.className = '';
  } else {
    credit.className = '';
    payPal.className = 'is-hidden';
    bitCoin.className = 'is-hidden';
  }
    // fix if select bitcoin or paypal form will submit.
  if (e.target.value === 'bitcoin' || e.target.value === 'paypal') {
    ccNumber.value = '11111111111111';
    zip.value = '11111';
    cvv.value = '111'
  } else {
    ccNumber.value = '';
    zip.value = '';
    cvv.value = '';
  }
});

    // Form Validation
  // submit event handler.
// create a validate function

form.addEventListener('submit', (e) => {
    // create a function checks for empty values and highlights the appropriate field
  function validateValue (field) {

    if (field.value == "") {
      e.preventDefault(); // prevent submit when fields are empty
       field.style.borderColor = 'red';
    } else {
        field.style.borderColor = '';
    }
  }

validateValue(name);
validateValue(mail);
validateValue(ccNumber);
validateValue(zip);
validateValue(cvv);

// fixed my errors
if (name.value.length < 3) {
  e.preventDefault();
}
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value) === false) {
  e.preventDefault();
}
if (jobRole.value === 'other' && jobInput.value === '') {
  e.preventDefault()
}



          // checking the activities Count
if (activitiesCount === 0) {
  for (let i = 0; i < list.length; i++) {
    list[i].style.color = 'red';
}
    e.preventDefault();
    error3.className = '';
    error3.textContent = actError;
    list[0].before(error3);
  }
    // make sure payment method is checked
if (payment.value === 'select_method') {
    e.preventDefault();
    error4.className = '';
    error4.textContent = paymentError;
    payment.after(error4);
    payment.style.borderColor = 'red';
 }
    // continue fixing errors
 if (ccNumber.value.length < 13 || isNaN(ccNumber.value) == true || ccNumber.value.length > 16) {
   e.preventDefault();
 }
 if (zip.value.length > 5 || isNaN(zip.value) == true || zip.value.length !== 5) {
   e.preventDefault();
 }

 if (cvv.value.length > 3 || isNaN(cvv.value) == true || cvv.value.length !== 3) {
   e.preventDefault();
 }

});
  //  add event listeners to all required fields to listen for changes after submit

    // add keyup functions to name and email fields
name.addEventListener('keyup', (e) => {
  if (e.target.value !== '' && e.target.value.length >= 3) {
      error.className = 'is-hidden';
      e.target.style.borderColor = '#11C83E';
  } else {
    e.preventDefault();
    error.textContent = 'Your name must contain at least 3 lettters';
    error.className = '';
    name.before(error);
    name.style.borderColor = 'red';
  }
});

mail.addEventListener('keyup', (e) => {
  if (e.target.value !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
      error.className = 'is-hidden';
      mail.style.borderColor = '#11C83E';
      return true;
  } else {
    e.preventDefault();
    error.className = '';
    error.textContent = 'like:  john@example.com';
    mail.before(error);
    mail.style.borderColor = 'red';
  }
});
  // add a change event to the job role.
jobRole.addEventListener('change', (e) => {
  if (jobRole.value === 'other' && jobInput.value === '') {
    e.preventDefault();
    error.className = '';
    error.textContent = jobError;
    jobInput.after(error);
    jobInput.style.borderColor = 'red';
    } else {
    error.className = 'is-hidden';
    jobInput.style.borderColor = '#11C83E';
  }
});

jobInput.addEventListener('keyup', (e) => {
  if (e.target.value.length < 3) {
    e.preventDefault();
    error.className = '';
    error.textContent = jobError;
    jobInput.after(error);
    jobInput.style.borderColor = 'red';
  } else {
    error.className = 'is-hidden';
    jobInput.style.borderColor = '#11C83E';
  }
});

    // create a function to test and change the activites menu
function valActivities (activity) {
  activity.addEventListener('change', (e) => {
    if (e.target.checked) {
      for (let i = 0; i < list.length; i++) {
        list[i].style.color = '';
      }
      error3.className = 'is-hidden';

    } else if (activitiesCount === 0){
      for (let i = 0; i < list.length; i++) {
        list[i].style.color = 'red';
      }
      error3.className = '';
      error3.textContent = actError;
      list[0].after(error3);
    }
  })
}

valActivities(all);
valActivities(jsFrameworks);
valActivities(jsLibs);
valActivities(express);
valActivities(node);
valActivities(buildTools);
valActivities(npm);

payment.addEventListener('change', (e) => {
  if (e.target.value !== 'select_method') {
    error4.className = 'is-hidden';
    payment.style.borderColor = '';
  } else if (e.target.value === 'select_method'){
    error4.className = '';
    error4.textContent = paymentError;
    payment.after(error4);
    payment.style.borderColor = 'red';
  }
});

ccNumber.addEventListener('keyup', (e) => {

  if (e.target.value !== '' && e.target.value.length <= 16 && e.target.value.length >= 13 && isNaN(ccNumber.value) == false) {
        error2.className = 'is-hidden';
        e.target.style.borderColor = '#11C83E';

  } else {
        e.preventDefault();
        error2.className = '';
        error2.textContent = creditError2;
        ccNumber.after(error2);
        ccNumber.style.borderColor = 'red';
  }
});

zip.addEventListener('keyup',  (e) => {
    if (e.target.value !== '' && e.target.value.length === 5 && isNaN(zip.value) == false) {
      error2.className = 'is-hidden';
      e.target.style.borderColor = '#11C83E';
    } else{
      e.preventDefault();
      error2.className = '';
      error2.textContent = zipError;
      zip.after(error2);
      zip.style.borderColor = 'red';
    }
})

cvv.addEventListener('keyup', (e) => {
  if (e.target.value !== '' && e.target.value.length === 3 && isNaN(cvv.value) == false) {
    error2.className = 'is-hidden';
    e.target.style.borderColor = '#11C83E';
  } else {
    e.preventDefault();
    error2.className = '';
    error2.textContent = cvvError;
    cvv.after(error2);
    cvv.style.borderColor = 'red';
  }
});

});
