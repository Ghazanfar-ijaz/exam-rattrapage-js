const reversePodium = (tab) => {
  let bad3 = tab
    .sort((a, b) => {
      return a - b
    })
    .slice(0, 3)
  console.log(bad3[0])
  console.log(bad3[1])
  console.log(bad3[2])
}


let notes = [2, 4, 67, 45, 12, 23, 9]
const reversed = notes.reverse();

reversePodium(notes)