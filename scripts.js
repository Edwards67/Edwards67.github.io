//console.log('Hello World!') //wakes up console also has to be set up in index.html
// Check JS is Connected
console.log("👍 JS Connected");

// get all the card
document.querySelectorAll(".card").forEach((item) => {
  // for each item i.e. card, do this
  item.addEventListener("click", (event) => {
    // toggle class on card
    item.classList.toggle("flipped");
  });
});