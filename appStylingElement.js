const titleColorChange = document.querySelector("#main-heading");
console.log(titleColorChange);
titleColorChange.style.color = "red";

/*
    Above is inline styling
*/

const movieList = document.querySelectorAll(".list-item");
console.log(movieList);
for (let i = 0; i < movieList.length; i++) {
  movieList[i].style.color = "yellow";
}

/*
    Styling list of element
*/
