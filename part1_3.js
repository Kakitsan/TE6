let number = 8;

let canvas = "";

for (let y = 0; y < number; y++) {
  for (let x = 0; x < number; x++) {
    if ((x + y) % 2 == 0) {
      canvas += " ";
    } else {
      canvas += "#";
    }
  }
  canvas += "\n";
}

console.log(canvas);
