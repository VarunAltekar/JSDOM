/*
    Event Listener & CSS display property
*/

const btn = document.querySelector(".btn1");
const revealtext = document.querySelector(".reveal-text");
console.log(btn);
btn.addEventListener("click", () => {
  console.log(revealtext.classList);
  if (revealtext.classList.contains("reveal-text")) {
    revealtext.classList.remove("reveal-text");
    revealtext.classList.add("show-text");
  } else {
    revealtext.classList.remove("show-text");
    revealtext.classList.add("reveal-text");
  }
});
