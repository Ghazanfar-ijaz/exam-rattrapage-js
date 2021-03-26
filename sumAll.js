
const somme = (tab) => {
  let sum = 0
  for (const elem of tab) {
    sum += elem
  }
  return sum / tab.length
}

console.log(somme([3, 5, 6, 9, 7]))