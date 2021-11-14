var blk = document.querySelector(".border");
for (var i = 0; i < 36; i++) {
  if (i % 2 == 0) {
    let black = document.createElement("span");
    black.className = "black";
    blk.appendChild(black);
  } else {
    let white = document.createElement("span");
    white.className = "white";
    blk.appendChild(white);
  }
}
