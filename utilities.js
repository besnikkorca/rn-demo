export function shuffleArray (array) {
  const newArray = [...array]
  for (let idx = newArray.length - 1; idx > 0; idx--) {
    const randomIndex = Math.floor(Math.random() * (idx + 1));
    const temp = newArray[idx]
    newArray[idx] = newArray[randomIndex]
    newArray[randomIndex] = temp;
  }
  return newArray;
};
