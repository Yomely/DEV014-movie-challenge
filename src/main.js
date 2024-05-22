import connectApi from "./lib/connect";
import app from "./components/app";
import { renderItems } from "./components/renderFunction";
//import Header from "./components/header";

const HTMLResponse = document.querySelector("#app");

window.addEventListener("load", () => {
    HTMLResponse.appendChild(app());
})
connectApi().then(res => {
    HTMLResponse.appendChild(renderItems(res));
})




