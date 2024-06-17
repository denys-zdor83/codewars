function strCount(str: string, letter: string): number {
  return !str ? 0 : str.toLowerCase().split('').filter(s => s === letter).length
}



console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('',      'z'), 0);