function WriteCookie() {
  var now = new Date();
  now.setMonth(now.getMonth() + 1);
  cookieValue = escape(document.myForm.customer.value) + ";"
  document.cookie = "name=" + cookieValue;
  document.cookie = "expires=" + now.toUTCString() + ";"
  document.write("Setting Cookies : name=" + cookieValue);
}
