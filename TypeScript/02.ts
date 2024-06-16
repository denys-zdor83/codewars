export function lovefunc(flower1: number, flower2: number): boolean {
  // Do we love each other?
  return !(((flower1 & 1) === 0) === ((flower2 & 1) === 0) )
}

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(0, 0));