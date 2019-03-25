import {MDCCheckbox} from '@material/checkbox';
import {MDCChipSet} from '@material/chips';
import {MDCDialog} from '@material/dialog';
import {MDCFormField} from '@material/form-field';
import {MDCIconButtonToggle} from '@material/icon-button';
import {MDCLinearProgress} from '@material/linear-progress';
import {MDCList} from '@material/list';
import {MDCMenu} from '@material/menu';
import {MDCRadio} from '@material/radio';
import {MDCRipple} from '@material/ripple/index';
import {MDCSelect} from '@material/select';
import {MDCSlider} from '@material/slider';
import {MDCSnackbar} from '@material/snackbar';
import {MDCSwitch} from '@material/switch';
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import {MDCTopAppBar} from '@material/top-app-bar';

// Select main content
const main = document.querySelector('.main-content');

//
// Instantiate all components
//

// Button
const buttonEls = Array.from(main.querySelectorAll('.mdc-button'));
buttonEls.forEach((el) => new MDCRipple(el));

// Icon button
const iconButtonEls = Array.from(main.querySelectorAll('.mdc-icon-button:not(#icon-toggle-button'));
iconButtonEls.forEach((el) => new MDCRipple(el));

// Icon button toggle
const iconToggleEl = main.querySelector('#icon-toggle-button');
const iconToggle = new MDCIconButtonToggle(iconToggleEl);
iconToggle.unbounded = true;

// Card
const cardPrimaryActionEls = Array.from(main.querySelectorAll('.mdc-card__primary-action'));
cardPrimaryActionEls.forEach((el) => new MDCRipple(el));

// Chips
const chipSetEls = Array.from(main.querySelectorAll('.mdc-chip-set'));
chipSetEls.forEach((el) => new MDCChipSet(el));

// Text field
const textFieldEls = Array.from(main.querySelectorAll('.mdc-text-field'));
textFieldEls.forEach((el) => {
  let textField = new MDCTextField(el);
  if (el.classList.contains('text-field-with-input')) {
    textField.value = 'Input text';
  }
});
const helperTextEls = Array.from(main.querySelectorAll('.mdc-text-field-helper-text'));
helperTextEls.forEach((el) => new MDCTextFieldHelperText(el));

// Linear progress
const linearProgressEl = main.querySelector('.mdc-linear-progress');
const linearProgress = new MDCLinearProgress(linearProgressEl);
linearProgress.progress = 0.5;

// FAB
const fabEls = Array.from(main.querySelectorAll('.mdc-fab'));
fabEls.forEach((el) => new MDCRipple(el));

// Checkbox
const checkboxEls = Array.from(main.querySelectorAll('.mdc-checkbox'));
checkboxEls.forEach((el) => {
  let checkbox = new MDCCheckbox(el);
  if (el.classList.contains('indeterminate-checkbox')) {
    checkbox.indeterminate = true;
  }
});

// Radio
const radioEls = Array.from(main.querySelectorAll('.mdc-radio'));
radioEls.forEach((el) => new MDCRadio(el));

// Switch
const switchEls = Array.from(main.querySelectorAll('.mdc-switch'));
switchEls.forEach((el) => new MDCSwitch(el));

// Top app bar
const topAppBarEls = Array.from(main.querySelectorAll('.mdc-top-app-bar'));
topAppBarEls.forEach((el) => {
  let topAppBar = new MDCTopAppBar(el);
  topAppBar.setScrollTarget(main);
});

// List
const listEls = Array.from(main.querySelectorAll('.mdc-list'));
listEls.forEach((el) => {
  let list = new MDCList(el);
  list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
  list.singleSelection = true;
});

// Select
const selectEls = Array.from(main.querySelectorAll('.mdc-select'));
selectEls.forEach((el) => new MDCSelect(el));

// Snackbar
const snackbarEl = main.querySelector('.mdc-snackbar');
new MDCSnackbar(snackbarEl);

// Dialog
const dialogEl = main.querySelector('.mdc-dialog');
new MDCDialog(dialogEl);

// Slider
const sliderEl = main.querySelector('.mdc-slider');
const slider = new MDCSlider(sliderEl);
slider.value = 5;

// Menu
const menuEl = main.querySelector('.mdc-menu');
const menu = new MDCMenu(menuEl);
menu.open = true;
// Override MDCMenuSurfaceFoundation so the menu never closes
menu.menuSurface_.foundation_.close = () => {};

//
// Inside the Theme Builder drawer
//
const teamName = new MDCTextField(document.querySelector('.team-name'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
const rtlSwitch = new MDCSwitch(document.querySelector('.rtl-switch'));
formField.input = rtlSwitch;

const rtlInput = document.querySelector('#rtl-input');
rtlInput.addEventListener('change', function() {
  [].forEach.call(document.querySelectorAll('.column'), function(columnEl) {
    if (rtlInput.checked) {
      columnEl.setAttribute('dir', 'rtl');
      linearProgressEl.classList.add('mdc-linear-progress--reversed');
    } else {
      columnEl.removeAttribute('dir');
      linearProgressEl.classList.remove('mdc-linear-progress--reversed');
    }
    slider.layout();
  });
});
