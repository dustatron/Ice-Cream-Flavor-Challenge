// Solution 3
// Jquery used to write to DOM

iceCreamFlavors.forEach((item) => {
  return $(`<li> ${item} </li>`).appendTo(".ice-cream-list");
});
