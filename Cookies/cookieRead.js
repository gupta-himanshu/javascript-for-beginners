function ReadCookie() {
  var allCookies = document.cookie;
  document.write("All Cookies : " + allCookies);

  // Get all cookies pairs in an array
  cookieArray = allCookies.split(';');

  // Now take key value pair out of this array
  for(var i=0; i<cookieArray.length; i++) {
    name = cookieArray[i].split('=')[0];
    value = cookieArray[i].split('=')[1];
    document.write("Key is : " + name + " and Value is : " + value);
  }
}
