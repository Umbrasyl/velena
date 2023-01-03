"use strict";

/* HEADER TEXT */

window.onload = function() {
  // Set the timeout to 1 second (1000 milliseconds)
  setTimeout(function() {
    // Get the header element on the page
    var header = document.querySelector("header");
    // Set the height of the header to 80vh
    header.style.height = "80vh";
  }, 1000);
};
/* CLIENTS MOVE TO RIGHT */
var divs = document.querySelectorAll(".push-away");

// Create an intersection observer to detect when the elements enter the viewport
var observerPush = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    // If the element is in the viewport
    if (entry.intersectionRatio > 0) {
      // Animate the element
      entry.target.style.animation = "push-away 1s";
      // Stop observing the element
      observerPush.unobserve(entry.target);
    }
  });
});

// Start observing the elements
divs.forEach(function(div) {
  observerPush.observe(div);
});

/* LINE IN SHOWREEL */ 

const lineContainer = document.getElementById("line-container");

const observerLine = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      lineContainer.classList.add("visible");
      observerLine.unobserve(lineContainer);
    }
  });
});

observerLine.observe(lineContainer);
/*Add visible class to the line-container element when it is scrolled into view.*/

let count = 1;
const total = 5;

function incrementCount() {
  count++;
  if (count > total) {
    count = total;
  }
  document.getElementById('counter').innerHTML = `${count}/${total}`;
}

function decrementCount() {
  count--;
  if (count < 1) {
    count = 1;
  }
  document.getElementById('counter').innerHTML = `${count}/${total}`;
}