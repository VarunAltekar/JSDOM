/*
    DOM Elements are added as a child to parent
*/

const movieList = document.querySelector("ul");

const movieItem = document.createElement("l1");
movieList.append(movieItem);

// At this point, li element would not be visible
// We need to add text to li element

movieItem.innerText = "X-Men";

/*
    innerText - visible text contain inside that node
    textContent - identation, text
    innerHtml - identation, text & html element
*/

/*
    Modifying element attributes & classes
*/

//movieItem.setAttribute("id", "main-heading");

movieItem.classList.add("list-item");

// To remove class
//movieItem.classList.remove("list-item");

console.log(movieItem.classList.contains("list-item"));

/*
    Remove element
*/
movieItem.remove();
