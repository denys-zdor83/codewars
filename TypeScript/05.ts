export function maps(x: number[]): number[]{
  return x.map(i => i * 2);
}

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 