var browserName = navigator.appName;
if(browserName == "Netscape") {
  window.location = "http://www.location.com/ns.htm";
} else if(browserName == "Microsoft Internet Explorer") {
  window.location = "http://www.location.com/ie.htm";
} else {
  window.location="http://www.location.com/other.htm";
}
