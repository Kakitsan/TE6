for (let a = 1; a <= 100; a++) {
  let b = "";
  if (a % 3 == 0) b += "Fizz";
  if (a % 5 == 0) b += "Buzz";
  console.log(b || a);
}
