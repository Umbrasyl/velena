"use strict";
window.onload = function() {
  // Set the timeout to 1 second (1000 milliseconds)
  setTimeout(function() {
    // Get the header element on the page
    var header = document.querySelector("header");
    // Set the height of the header to 80vh
    header.style.height = "80vh";
  }, 1000);
}


const clientList = document.querySelector('.client-list');

function checkVisibility() {
  const clientListTop = clientList.offsetTop;
  const clientListBottom = clientListTop + clientList.offsetHeight;

  const windowTop = window.scrollY;
  const windowBottom = windowTop + window.innerHeight;

  if (clientListBottom > windowTop && clientListTop < windowBottom) {
    clientList.style.marginLeft = 'auto';
  } else {
    clientList.style.marginLeft = '0';
  }
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);



const lineContainer = document.getElementById("line-container");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      lineContainer.classList.add("visible");
      observer.unobserve(lineContainer);
    }
  });
});

observer.observe(lineContainer);
/*Add visible class to the line-container element when it is scrolled into view.*/