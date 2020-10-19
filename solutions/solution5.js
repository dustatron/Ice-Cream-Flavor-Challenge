// Solution 5
// Vanilla JavaScript Option

const listContainer = document.getElementsByClassName("ice-cream-list");

const makeChild = (content) => {
  let li = document.createElement("li");
  li.textContent = content;
  return li;
};

iceCreamFlavors.forEach((item) => listContainer[0].appendChild(makeChild(item)));
