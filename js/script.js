alert("WELCOME TO SAMMEH'S KITCHEN ITEMS ONLINE STORE!");
let preveiwContainer = document.querySelector(".products-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

window.alert = function () {};
var defaultCSS = document.getElementById("bootstrap-css");
function changeCSS(css) {
  if (css)
    $("head > link")
      .filter(":first")
      .replaceWith(
        '<link rel="stylesheet" href="' + css + '" type="text/css" />'
      );
  else $("head > link").filter(":first").replaceWith(defaultCSS);
}
$(document).ready(function () {
  var iframe_height = parseInt($("html").height());
  window.parent.postMessage(iframe_height, "https://bootsnipp.com");
});
