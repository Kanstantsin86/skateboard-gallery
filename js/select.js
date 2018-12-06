'use strict';

const view = document.getElementById('view');
const nav = document.getElementById('nav');

function selectImage(event) {
  event.preventDefault();
  let target = event.target.parentNode;
  if (target.tagName == 'A') {
    for (let i of target.parentNode.children) {
      i.classList.remove('gallery-current');
    }
    target.classList.add('gallery-current');
    view.src = target.href;
  }
}

nav.addEventListener('click', selectImage);