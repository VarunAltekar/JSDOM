// 1. Parent Node Traversal

const movieList = document.querySelector("ul");

console.log(movieList.parentElement);
console.log(movieList.parentNode);

console.log(document.querySelector("html").parentElement); // returns null
console.log(document.querySelector("html").parentNode); // more commonly used

// 2. Child Node Traversal
// *** Indentation is counted as Node in html ***

console.log(movieList.childNodes);

console.log(movieList.firstChild);
console.log(movieList.lastChild);

// 3. Sibling Node Traversal
// previousSibling
// nextSibling
