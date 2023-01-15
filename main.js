import "./style.css";
import tileset from "/tileset.png";
import { drawCanvas } from "./canvas";

document.querySelector("#app").innerHTML = `
  <div>
  <h1>Tileset</h1>
  <canvas id="canvas"></canvas>
  </div>
`;

drawCanvas(document.querySelector("#canvas"));
