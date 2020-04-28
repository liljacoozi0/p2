function isWeekday(n) {
  if (n >= 1 && n <= 5) {
    return true;
  } else {
    return false;
  }
}
console.log(isWeekday(3));
console.log(isWeekday(6));
