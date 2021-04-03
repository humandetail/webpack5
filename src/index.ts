/*
 * @FilePath: \webpack5\src\index.ts
 * @Description: entry
 * @Author: humandetail
 * @Date: 2021-03-16 23:24:13
 * @LastEditors: humandetail
 * @LastEditTime: 2021-03-18 16:33:05
 */

import { createElement } from './utils';

import './style.scss';
import './style.css';
import Logo from './logo.png';

console.log(2);

document.querySelector('#app')!.appendChild(createElement(Logo));
