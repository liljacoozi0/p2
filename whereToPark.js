function whereToPark(s) {
  if (s == "student" || s == "Student") {
    return "Lot B";
  } else if (s == "employee" || s == "Employee") {
    return "Lot A";
  } else {
    return "Lot C";
  }
}
console.log(whereToPark("student"));
console.log(whereToPark("bystander"));
console.log(whereToPark("Employee"));
