import {MDCRipple} from '@material/ripple/index';

import {teamName} from './my-variables';

document.querySelector('.team-name').textContent = teamName;

const ripple = new MDCRipple(document.querySelector('.mdc-button'));