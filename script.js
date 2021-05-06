//button to clear current deck
clearbtn = document.createElement("button");
clearbtn.textContent = "Clear Deck";
document.body.appendChild(clearbtn);
//Adding a 16x16 square grid
//Create a base div
baseDiv = document.createElement("div");
baseDiv.setAttribute("id", "container");
document.body.append(baseDiv);
//run a loop for creating a 16x16 matrix
createDeck(16);

// innerDivs.forEach(iDiv => {
//   iDiv.addEventListener("mouseout", function(e) {
//     e.target.style.backgroundColor = "";
//     e.target.style.transition = "background-color 1.5s";
//   });
// });
clearbtn.onclick = () => {
  innerDivs.forEach(iDiv => {
    iDiv.remove();
    baseDiv.style.borderStyle = "none";
    console.log("remove div");
  });
  let inpDim = prompt("Enter dimensions of your deck:");
  createDeck(inpDim);
};

function createDeck(dim) {
  //run a loop for creating a dimxdim matrix
  for (i = 0; i < dim; i++) {
    rowDiv = document.createElement("div");
    rowDiv.setAttribute("id", `row${i + 1}`);
    rowDiv.setAttribute("class", "row");
    for (j = 0; j < dim; j++) {
      divElem = document.createElement("div");
      divElem.setAttribute("id", `${j + 1}`);
      divElem.setAttribute("class", "column");
      rowDiv.append(divElem);
    }
    baseDiv.append(rowDiv);
  }

  innerDivs = document.querySelectorAll(".column");
  innerDivs.forEach(iDiv => {
    iDiv.addEventListener("mouseover", function(e) {
      let rVal = getRandomColor();
      let gVal = getRandomColor();
      let bVal = getRandomColor();
      e.target.style.backgroundColor = `rgb(${rVal}, ${gVal}, ${bVal})`;
    });
  });
}
function getRandomColor() {
  let randomNum = Math.floor(Math.random() * (255 + 1));
  return randomNum;
}
