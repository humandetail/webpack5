/*
 * @FilePath: \webpack5\src\utils.ts
 * @Description: utils
 * @Author: humandetail
 * @Date: 2021-03-18 15:32:28
 * @LastEditors: humandetail
 * @LastEditTime: 2021-03-18 16:33:28
 */

function createElement (Logo: any) {
  const element = document.createElement('div');

  element.innerHTML = 'Hello webpack5...!';
  
  element.classList.add('hello');

  const myLogo = new Image();
  myLogo.src = Logo;

  element.appendChild(myLogo);

  return element;
}

export {
  createElement
};
