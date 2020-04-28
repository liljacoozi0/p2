var frozenMercury = function(t) {
  if (t <= -38.83) {
    return true;
  } else {
    return false;
  }
};
console.log(frozenMercury(-40));
console.log(frozenMercury(0));
