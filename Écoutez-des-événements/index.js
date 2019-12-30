/*
  click sur enfant ou parent amène incrément du compteur
  parent ou enfant
 */

const parent = document.getElementById('parent');

let parentCount = 0;

parent.addEventListener('click', function() {
  parentCount++;
  document.getElementById('parent-count').innerHTML = parentCount + "";
//  e.stopPropagation();
});

const child = document.getElementById('child');

let childCount = 0;

child.addEventListener('click', function(e) {
  childCount++;
  document.getElementById('child-count').innerHTML = childCount + "";
  e.stopPropagation();
  e.preventDefault();
});
