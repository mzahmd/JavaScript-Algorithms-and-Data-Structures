const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rot13(str) {
  let result = "";
  const shift = 13;
  let index = 0;
  let newIndex;

  for (let i = 0; i < str.length; i++) {
    if(str[i] === " " || /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(str[i])) {
      result += str[i];
      continue;
    }

    index = alphabet.indexOf(str[i]);
    newIndex = index + shift;
    if (newIndex >= alphabet.length) {
      newIndex = newIndex - alphabet.length;
    }
    result += alphabet[newIndex];
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
console.log(rot13("SERR YBIR?")); // FREE LOVE?