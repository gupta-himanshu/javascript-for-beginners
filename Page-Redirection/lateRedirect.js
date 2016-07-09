function Redirect() {
  window.location="http://www.tutorialspoint.com";
}

document.write("You will be redirected to our main page in 10 seconds!");

setTimeout('Redirect()', 10000);
