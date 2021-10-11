{let lol = 8;

let canvas = "";

for (let y = 0; y < lol; y++) {
  for (let x = 0; x < lol; x++) {
    if ((x + y) % 2 == 0) {
      canvas += " ";
    } else {
      canvas += "#";
    }
  }
  canvas += "\n";
}

console.log(canvas);
}
