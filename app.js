document.addEventListener('DOMContentLoaded', () => {

const name = document.getElementById('name'); // grab the name field element
const jobRole = document.getElementById('title'); // grab the Job Role element
const tshirtDiv = document.getElementById('colors-js-puns'); // grab the t-shrit element
const tDesign = document.getElementById('design');
const tColor = document.getElementById('color');
const jsPuns = `<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
<option value="gold">Gold (JS Puns shirt only)</option>`
const heartJs = `<option value="tomato">Tomato (I &#9829; JS shirt only)</option>
<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>`
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
const payment = document.getElementById('payment');
const credit = document.getElementById('credit-card');
const payPal = document.getElementsByTagName('p')[0];
const bitCoin = document.getElementsByTagName('p')[1];




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
    credit.className = 'is-hidden';
    bitCoin.className = '';
  } else {
    credit.className = '';
    payPal.className = 'is-hidden';
    bitCoin.className = 'is-hidden';
  }
});

    // Form Validation
  // submit event handler.

const form = document.getElementsByTagName('form')[0];
const error = document.createElement('span');
const nameError = 'Please enter your name.';
const emailError = 'Please enter an email address.';
const creditError = 'Please enter a Credit Card Number.';
const jobError = 'Please enter your Job Role.'
const paymentError = 'Please select form of payment.';
const zipError = 'Please enter a valid zip code.'
const creditError2 = 'Please enter a valid Credit Card number with at least 13 numbers.'
const cvvError = 'Please enter a valid cvv its the 3 digit number on the back of your card.'
const cvvError2 = 'Please enter the three digit number on the back of your card.'
const emailError2 = 'example: john@example.com'
const button = document.getElementsByTagName('button')[0];
const ccNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const regText = activities.children;
error.style.color = 'red';
const filter = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;


    // create a validate function

form.addEventListener('submit', (e) => {

  function validateValue (field, text) {

    if (field.value == "") {
       e.preventDefault();
       error.textContent = text;
       field.after(error);
       field.style.borderColor = 'red';

    } else {
        field.style.borderColor = '';
        error.remove();
    }
  }

validateValue(name, nameError);
validateValue(mail, emailError);



//validateValue();




 // check for empty values
  // if (activitiesCount == 0 || name.value === '' || email.value === '' || jobRole.value === 'other' ||
  //   payment.value === 'select_method' || payment.value === 'credit card' || cvv.value ==='') {
  //
  //   if (name.value == "" && name.value.length > 3) {
  //      e.preventDefault();
  //      error.textContent = nameError;
  //      name.after(error);
  //      name.style.borderColor = 'red';
  //   }
  //   if (mail.value === '') {
  //       e.preventDefault();
  //       error.textContent = nameError;
  //       name.after(error);
  //       name.style.borderColor = 'red';
  //   }
  //
  //   if (jobRole.value === 'other' && jobInput.value === '') {
  //      e.preventDefault();
  //      error.textContent = jobError;
  //      jobInput.after(error);
  //      jobInput.style.borderColor = 'red';
  //   }
  //
  //   if (activitiesCount === 0) {
  //     e.preventDefault();
  //     alert('Please Registar for one or more of our activites.')
  //     for (let i = 0; i < regText.length; i++) {
  //     regText[i].style.color = 'red'
  //    }
  //   }
  //
  //   if (payment.value ==='select_method')
  //       e.preventDefault();
  //       error.textContent = paymentError;
  //       payment.after(error);
  //       payment.style.borderColor = 'red';
  // }
  //
  //   if (ccNumber.value === '') {
  //       e.preventDefault();
  //       error.textContent = creditError;
  //       ccNumber.after(error);
  //       ccNumber.style.borderColor = 'red';
  //   }
  //
  //   if (ccNumber.value.length < 13 || ccNumber.value.length > 16) {
  //      e.preventDefault();
  //      error.textContent = creditError2;
  //      ccNumber.after(error);
  //      ccNumber.style.borderColor = 'red';
  //   }
  //
  //   if (zip.value === '' || zip.value.length !== 5 ) {
  //      e.preventDefault();
  //      error.textContent = zipError;
  //      zip.after(error);
  //      zip.style.borderColor = 'red';
  //   }
  //   if (cvv.value ==='') {
  //       e.preventDefault();
  //       error.textContent = cvvError2;
  //       cvv.after(error);
  //       cvv.style.borderColor = 'red';
  //     }
  //
  //    if (cvv.value.length !== 3) {
  //       e.preventDefault();
  //       error.textContent = cvvError;
  //       cvv.after(error);
  //       cvv.style.borderColor = 'red';
  //   }
});

name.addEventListener('keyup', (e) => {
  if (e.target.value !== '' && e.target.value.length >= 3) {
      error.remove();
      e.target.style.borderColor = '';
  } else {
    e.preventDefault();
    error.textContent = 'Your name must contain at least 3 lettters';
    name.before(error);
    name.style.borderColor = 'red';
  }
});

mail.addEventListener('change', (e) => {
  if (e.target.value !== '' && filter.test(e.target.value)) {
      error.className = 'is-hidden';
      e.target.style.borderColor = '';
      return true;
  } else {
    e.preventDefault();
    error.className = '';
    error.textContent = 'like: john@example.com';
    mail.before(error);
    mail.style.borderColor = 'red';
  }
});

   // validating the page after the first submit

// name.addEventListener('keypress', (e) => {
//   if (name.value !== '' && name.value.length > 3) {
//     name.style.borderColor = '';
//   }
//
// });

});
