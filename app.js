import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield';

// Set text in HTML
// document.querySelector('.glitch-url').textContent = process.env.PROJECT_ID;

// Select HTML components
const buttonEls = Array.from(document.querySelectorAll('.mdc-button'));
const fabEls = Array.from(document.querySelectorAll('.mdc-fab'));
const textFieldEl = document.querySelector('.mdc-text-field');

// Instantiate all components
buttonEls.forEach((el) => new MDCRipple(el));
fabEls.forEach((el) => new MDCRipple(el));
new MDCTextField(textFieldEl);
