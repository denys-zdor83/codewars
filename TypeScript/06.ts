function sumArray(array: number[] | null) : number {
  if (!array || array.length <= 1) return 0

  return array.sort((a, b) => a - b).slice(1, -1).reduce((acc, next) => acc + next ,0)
}


console.log(sumArray([ 6, 2, 1, 8, 10 ]), 16) // 16
console.log(sumArray([ 6, 0, 1, 10, 10 ]), 17) // 17