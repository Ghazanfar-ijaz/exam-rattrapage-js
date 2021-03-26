const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']



// V1
for (let i = -1; i < tab.length; i++) {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}

/*
for (const elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}

// V3
tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}`)
})
*/