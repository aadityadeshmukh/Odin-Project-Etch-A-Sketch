//button to clear current deck

//Adding a 16x16 square grid
//Create a base div
baseDiv = document.createElement("div");
baseDiv.setAttribute("id", "container");
document.body.append(baseDiv);
//run a loop for creating a 16x16 matrix
for (i = 0; i < 16; i++) {
  rowDiv = document.createElement("div");
  rowDiv.setAttribute("id", `row${i + 1}`);
  rowDiv.setAttribute("class", "row");
  for (j = 0; j < 16; j++) {
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
    console.log(e.target);
    e.target.style.backgroundColor = "brown";
  });
});

innerDivs.forEach(iDiv => {
  iDiv.addEventListener("mouseout", function(e) {
    console.log(e.target);
    e.target.style.backgroundColor = "";
  });
});
