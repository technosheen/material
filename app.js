import {MDCCheckbox} from '@material/checkbox';
import {MDCRipple} from '@material/ripple/index';
import {MDCSwitch} from '@material/switch';
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';

// Set text in HTML
// document.querySelector('.glitch-url').textContent = process.env.PROJECT_ID;

// Select HTML components
const buttonEls = Array.from(document.querySelectorAll('.mdc-button'));
const textFieldEl = document.querySelector('.mdc-text-field');
// const helperTextEl = document.querySelector('.mdc-text-field-helper-text');
const fabEls = Array.from(document.querySelectorAll('.mdc-fab'));
const checkboxEls = Array.from(document.querySelectorAll('.mdc-checkbox'));
const switchEls = Array.from(document.querySelectorAll('.mdc-switch'));

// Instantiate all components
buttonEls.forEach((el) => new MDCRipple(el));
new MDCTextField(textFieldEl);
// new MDCTextFieldHelperText(helperTextEl);
fabEls.forEach((el) => new MDCRipple(el));
checkboxEls.forEach((el) => new MDCCheckbox(el));
switchEls.forEach((el) => new MDCSwitch(el));
