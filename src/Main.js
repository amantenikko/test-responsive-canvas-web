import UserInterface from "./UserInterface.js";

class Main {
  constructor(config) {
    this.element = config.element;
  }

  setupCanvas() {
    const root = this.element;

    const container = document.createElement("div");
    container.className = "canvas-container";

    const canvas = document.createElement("canvas");
    canvas.height = 198;
    canvas.width = 352;

    this.resizeCanvas(container);
    window.addEventListener(
      "resize",
      () => {
        this.resizeCanvas(container);
      },
      false
    );

    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    container.append(canvas);
    root.append(container);
  }

  resizeCanvas(container) {
    return window.innerWidth > window.innerHeight * 1.78
      ? container.classList.add("base-width")
      : container.classList.remove("base-width");
  }

  async init() {
    this.setupCanvas();
    this.userInterface = new UserInterface();

    const background = new Image();
    background.src = "/src/DemoLower.png";
    background.onload = () => {
      this.context.drawImage(background, 0, 0);
    };
  }
}

export default Main;
