export function setAlarm(employed: boolean, vacation: boolean): boolean {
  return employed === vacation ? false : employed
}

console.log("setAlarm(true, true)");
console.log("setAlarm(false, true)");
console.log("setAlarm(true, false)");
console.log("setAlarm(false, false)");