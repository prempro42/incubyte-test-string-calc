export function add(numbers: string) {
  // to handle the case where the input is an empty string
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/; // default delimiters: comma or newline

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const customDelimiter = parts[0].slice(2); // Extract the custom delimiter

    // Escape special characters in the delimiter for regex
    delimiter = new RegExp(
      customDelimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    );

    numbers = parts[1]; // The remaining string after the delimiter definition
  }

  //to split input based on delimiter variable and convert numeric strings to numbers
  const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

  // to add all numbers in the array & return
  return numArray.reduce((sum, num) => sum + num, 0);
}
