var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  if (XHR.readyState == 4) {
    if (XHR.status == 200) {
      console.log(XHR.responseText);
    } else {
      console.log("There was a problem!");
    }
  }
};

XHR.open("GET", "https://api.github.com/zen");
XHR.send();


// The following is
// Another Example



var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

//listen for clicks
btn.addEventListener("click", function() {
  //make the request
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      var url = data.message;
      img.src = url;
    }
  };
  var RequesteUrl = "https://dog.ceo/api/breeds/image/random";
  XHR.open("GET", RequesteUrl);
  XHR.send();
});
