import {MDCCheckbox} from '@material/checkbox';
import {MDCFormField} from '@material/form-field';
import {MDCRipple} from '@material/ripple/index';
import {MDCSwitch} from '@material/switch';
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import {MDCTopAppBar} from '@material/top-app-bar';

// Set text in HTML
console.log(document.querySelector('.glitch-url'));
document.querySelector('.glitch-url').textContent = process.env.PROJECT_DOMAIN;

// Inside the drawer
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
const rtlSwitch = new MDCSwitch(document.querySelector('.rtl-switch'));
formField.input = rtlSwitch;

const rtlInput = document.querySelector('#rtl-input');
rtlInput.addEventListener('change', function() {
  [].forEach.call(document.querySelectorAll('.column'), function(columnEl) {
    if (rtlInput.checked) {
      columnEl.setAttribute('dir', 'rtl');
    } else {
      columnEl.removeAttribute('dir');
    }
  });
});

// Stickers
const main = document.querySelector('.main-content');

// Select HTML components
const buttonEls = Array.from(main.querySelectorAll('.mdc-button'));
const textFieldEl = main.querySelector('.mdc-text-field');
// const helperTextEl = main.querySelector('.mdc-text-field-helper-text');
const fabEls = Array.from(main.querySelectorAll('.mdc-fab'));
const checkboxEls = Array.from(main.querySelectorAll('.mdc-checkbox'));
const switchEls = Array.from(main.querySelectorAll('.mdc-switch'));
const topAppBarEl = main.querySelector('.mdc-top-app-bar');

// Instantiate all components
buttonEls.forEach((el) => new MDCRipple(el));
new MDCTextField(textFieldEl);
// new MDCTextFieldHelperText(helperTextEl);
fabEls.forEach((el) => new MDCRipple(el));
checkboxEls.forEach((el) => new MDCCheckbox(el));
switchEls.forEach((el) => new MDCSwitch(el));
new MDCTopAppBar(topAppBarEl);
