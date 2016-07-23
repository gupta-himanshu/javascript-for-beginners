function showValue() {
  var dayOfMonth = 50;

  if(dayOfMonth < 1 || dayOfMonth > 31) {
    dayOfMonth = Number.NAN;

    alert("Day of the Month must be between 1 and 31.");
  }

  document.write("Value of dayOfMonth: " + dayOfMonth);
}
