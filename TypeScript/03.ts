export const summation = (num:number)=> { 
//   throw new Error('The method or operation is not implemented.')
  return Array.from(Array(num), (a,b) => b + 1).reduce((acc, next) => acc + next , 0)
}

console.log(summation(1), 1)
console.log(summation(8), 36)