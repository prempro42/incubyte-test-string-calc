export function add(numbers: string) {
  // to handle the case where the input is an empty string
  if (numbers === "") {
    return 0;
  }

  //to split input based on ',' or '\n' separator and convert to numeric strings to numbers
  const numArray = numbers.split(/,|\n/).map((num) => parseInt(num, 10));

  // to add all numbers in the array & return
  return numArray.reduce((sum, num) => sum + num, 0);
}
