/*
  1.
 Event Capturing - 3rd param as true
 Event Bubbling - 3rd param as false
 By Default - false
*/

const doc = document.addEventListener(
  "click",
  e => {
    console.log("Document");
  },
  false
);

const htmlEle = document.querySelector("html");
htmlEle.addEventListener(
  "click",
  e => {
    console.log("HTML");
  },
  false
);

const bodyEle = document.querySelector("body");
bodyEle.addEventListener(
  "click",
  e => {
    console.log("BODY");
  },
  false
);

const container1Ele = document.querySelector(".container1");
container1Ele.addEventListener(
  "click",
  e => {
    // 3. to stop propogation
    //e.stopPropagation();
    console.log("DIV 1");
  },
  // 4. events firing only once
  //false
  { once: true }
);
const container2Ele = document.querySelector(".container1");
container2Ele.addEventListener(
  "click",
  e => {
    console.log("DIV 2");
  },
  false
);
const btn1Ele = document.querySelector(".btn1");
btn1Ele.addEventListener(
  "click",
  e => {
    // 5.  - prevent default behaviour of element (in our case <a> tag which takes to new page)
    e.preventDefault();

    // 2.  e.target gives us the DOM element on which event took place
    console.log(e.target);
    // this is awesome
    e.target.innerText = "Varun";
  },
  false
);
