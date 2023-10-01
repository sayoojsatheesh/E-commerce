 // Function Formates Price Accordingly//
 function formatNumberWithSpaces(number) {
    // Convert the number to a string
    const numberString = number?.toString();

    // Split the string into groups of three digits from the end
    const groups = [];
    let i = numberString?.length;
    while (i > 0) {
      groups.unshift(numberString?.substring(Math.max(0, i - 3), i));
      i -= 3;
    }

    // Join the groups with a space and return the formatted string
    return groups.join(" ");
  }

  export default formatNumberWithSpaces;