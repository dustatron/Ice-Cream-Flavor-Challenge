// Solution 3
iceCreamFlavors.forEach((item) => {
  return $(`<li> ${item} </li>`).appendTo(".ice-cream-list");
});
