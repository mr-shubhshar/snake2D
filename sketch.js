var s;

function setup() {
    createCanvas(700, 600);
    s = new Snake();
}

function draw() {
    background(51);
    s.update();
    s.show();
}

