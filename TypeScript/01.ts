function evenOrOdd(n:number):string {
  return (n % 2) === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(1), "Odd");
console.log(evenOrOdd(2), "Even");
console.log(evenOrOdd(-1), "Odd");
console.log(evenOrOdd(-2), "Even");
console.log(evenOrOdd(0), "Even");