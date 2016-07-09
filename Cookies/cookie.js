function WriteCookie() {
  if(document.myForm.customer.value == "") {
    alert("Enter some value!");
    return;
  }

  cookieValue = escape(document.myForm.customer.value) + ";";
  document.cookie = "name=" + cookieValue;
  document.write("Setting Cookies : name=" + cookieValue);
}
