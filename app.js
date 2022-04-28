var player;

var distance = 20;

function startGame() {
  myGameArea.start();
  player = new component(30, 30, "red", 10, 120);
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1260;
    this.canvas.height = 584;
    this.context = this.canvas.getContext("2d");
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = myGameArea.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

document.body.onkeydown = function (event) {
  console.log(event.key);
  if (player.x >= 1200) {
    console.log("win!");
  }
  if (event.key === "d") {
    player.x += distance;
  }
};

function updateGameArea() {
  myGameArea.clear();
  player.update();
}
