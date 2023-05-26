const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rot13(str) {
  let result = "";
  const shift = 13;
  let index = 0;
  let char;
  let newIndex;

  for (let i = 0; i < str.length; i++) {
    if(str[i] === " " || /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(str[i])) {
      result += str[i];
      continue;
    }
    char = str[i];
    index = alphabet.indexOf(char);
    newIndex = index + 13;
    if (newIndex >= alphabet.length) {
      newIndex = newIndex - alphabet.length;
    }
    result += alphabet[newIndex];
  }

  // console.log(result);

  return result;
}

rot13("SERR PBQR PNZC"); // FREE CODE CAMP
rot13("SERR CVMMN!"); // FREE PIZZA!
rot13("SERR YBIR?"); // FREE LOVE?