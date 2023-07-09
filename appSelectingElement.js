/* Chapter 1 */
// Selecting Elements in DOM
const header = document.getElementById("main-heading");
console.log(header.firstChild);

const listItem = document.getElementsByClassName("list-item");
console.log(listItem);

document.getElementsByTagName("li");

/*
    allows to select by id class or tag
    selects first element
*/
console.log(document.querySelector("div"));

/*
    selects all element 
*/
console.log(document.querySelectorAll("li"));
