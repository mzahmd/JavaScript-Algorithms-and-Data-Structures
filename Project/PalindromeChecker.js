function palindrome(str) {
  str = str.replace(/\s/g, "").toLowerCase();

  for(let i = 0, firstIndex = 0, lastIndex = str.length-1; i<str.length/2; i++, firstIndex++, lastIndex--) {
    while(!(/[a-zA-Z0-9]/).test(str[firstIndex])) {
      firstIndex++;
    }

    while(!(/[a-zA-Z0-9]/).test(str[lastIndex])) {
      lastIndex--;
    }

    if(str[firstIndex] !== str[lastIndex]) {
      return false;
    }
  }
  
    return true;
  }

  
  console.log(palindrome("eye"));
  console.log(palindrome("_eye"))
  console.log(palindrome("race car"))
  console.log(palindrome("A man, a plan, a canal. Panama"))
  console.log(palindrome("never odd or even"))
  console.log(palindrome("My age is 0, 0 si ega ym."))
  console.log(palindrome("0_0 (: /-\ :) 0-0"))
