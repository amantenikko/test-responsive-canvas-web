import Main from "./src/Main.js";
import utils from "./src/utils.js";
utils.loadCSS("./index.css");

(function () {
  const main = new Main({
    element: document.querySelector("#root"),
  });
  main.init();
})();
