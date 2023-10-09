// Function helps to calculate the genders selected //
function countTrueFalseKeys(obj) {
  let trueCount = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === true) {
        trueCount++;
      }
    }
  }

  trueCount = trueCount == 0 ? "" : `(${trueCount})`;
  return trueCount;
}

export default countTrueFalseKeys;
