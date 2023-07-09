/*
  First way of including event listener is to include in html
  <button onclick='alert('')' />
*/

// Otherwise ->
// element.addEventListener(eventName, callbackFn)
// *** event listener added to an element over rides any other prev event listener

const btn1 = document.querySelector(".btn1");
console.log(btn1);
btn1.addEventListener("click", () => {
  alert("So silly");
});

const box3 = document.querySelector(".box-3");
console.log(box3);
box3.addEventListener("mouseover", () => {
  box3.style.backgroundColor = "red";
});
