// Solution 1
// Validate iceCreamFlavors
// Jquery used to write to DOM

function printList(list) {
  let finalList = "";

  // Check list is an array with values
  if (list && list.length > 0) {
    list.forEach((item) => {
      finalList += `<li> ${item} </li>`;
    });
  } else {
    console.error("Error: Ice Cream list is undefined or empty.");
  }

  $(".ice-cream-list").append(finalList);
}

printList(iceCreamFlavors);
