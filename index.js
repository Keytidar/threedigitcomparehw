let inputdigits = prompt('Enter a three-digit number: ').trim();
inputdigits = Math.round(Number(inputdigits));
if (isNaN(inputdigits) || inputdigits < 100 || inputdigits > 999) {
  alert('Please, enter a proper three-digit number');
} else {
  const inputdigitsArray = Array.from(String(inputdigits), Number);
  function checkArray(inputdigitsArray) {
    let matches = 0;
    if (inputdigitsArray[0] === inputdigitsArray[1]) matches++;
    if (inputdigitsArray[0] === inputdigitsArray[2]) matches++;
    if (inputdigitsArray[1] === inputdigitsArray[2]) matches++;
    alert(`${matches} Matches found`);
  }

  checkArray(inputdigitsArray);
}
