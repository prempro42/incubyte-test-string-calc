export function add(numbers: string): number {
  // to handle the case where the input is an empty string
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/; // default delimiters: comma or newline

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const customDelimiter = parts[0].slice(2); // Extract the custom delimiter

    const escapedRegex = customDelimiter.replace(
      /[-/\\^$*+?.()|[\]{}]/g,
      "\\$&"
    );

    // Escape special characters in the delimiter for regex
    delimiter = new RegExp(escapedRegex);

    numbers = parts[1]; // The remaining string after the delimiter definition
  }

  //to split input based on delimiter variable and convert numeric strings to numbers
  const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

  // Check for negative numbers
  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  const resNumArr = handleCubing(numArray);

  return delimiter.test("*")
    ? resNumArr.reduce((product, num) => product * num)
    : resNumArr.reduce((sum, num) => sum + num, 0);
}

function handleCubing(numArray: number[]) {
  const resArr: number[] = [];
  const countObj: Record<string, number> = {};
  for (const num of numArray) {
    if (countObj[num] == null) {
      countObj[num] = 1;
    } else {
      countObj[num] += 1;
    }
  }

  for (const num in countObj) {
    const numCount = countObj[num];
    if (numCount >= 3) {
      const cubedNum = Math.pow(Number(num), 3);
      resArr.push(cubedNum);
    } else {
      resArr.push(Number(num) * numCount);
    }
  }

  return resArr;
}
