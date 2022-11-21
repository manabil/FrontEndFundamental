'use strict';

import 'regenerator-runtime';
import './style/style.css';
import './script/components/hero-menu.js';
import './script/components/main-menu.js';
import './script/view/sliding.js';
import './script/view/counter.js';
import main from './script/view/main.js';
import $ from 'jquery';

$(function () {
  main();
});
