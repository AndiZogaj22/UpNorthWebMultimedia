// hide preloader when page is loaded
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("#loader-wrapper").style.display = "block";
  } else {
    document.querySelector("#loader-wrapper").style.display = "none";
  }
};
