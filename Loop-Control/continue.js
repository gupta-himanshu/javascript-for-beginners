var x = 1;
document.write("Entering the loop<br/>");
while(x < 20) {
  x = x + 1;
  if(x == 5) {
    continue;
  }
  document.write(x + "<br/>");
}
document.write("Exiting the loop!<br/>");
