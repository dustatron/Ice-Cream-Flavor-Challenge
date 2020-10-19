// Solution 4
// Vanilla JavaScript Option

// Make html string
const finalList = iceCreamFlavors.reduce((string, item) => {
  return (string += `<li> ${item} </li>`);
}, "");

// Write string to DOM
document.getElementsByClassName("ice-cream-list")[0].innerHTML = finalList;
