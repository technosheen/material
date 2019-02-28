import {MDCChipSet} from '@material/chips';
import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield';

import {teamName} from './my-variables';

// Set text in HTML
document.querySelector('.team-name').textContent = teamName;

// Select HTML components
const buttonEls = Array.from(document.querySelectorAll('.mdc-button'));
const chipSetEl = document.querySelector('.mdc-chip-set');
const textFieldEl = document.querySelector('.mdc-text-field');

// Instantiate all components
buttonEls.forEach((el) => new MDCRipple(el));
new MDCChipSet(chipSetEl);
new MDCTextField(textFieldEl);
