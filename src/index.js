import Template from "@templates/template";
import "@styles/main.css";
console.log("hola");

(async function App() {
  const main = null || document.getElementById("main");
  main.innerHTML = await Template();
})();
