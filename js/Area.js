function showShape() {
    var selectedShape = document.getElementById("figures").value;
    var shapes = ['rectangle', 'square', 'circle', 'triangle'];
    for (var i = 0; i < shapes.length; i++) {
        var shapeContainer = document.querySelector('.' + shapes[i] + '-container');
        if (shapes[i] === selectedShape) {
            shapeContainer.style.display = '';
        } else {
            shapeContainer.style.display = 'none';
            document.querySelector('.result').style.display = 'none';
        }
    }
}

function calculateAreaRectangle() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var area = length * width;
    displayResult(area);
}

function calculateAreaSquare() {
    var side = parseFloat(document.getElementById("side").value);
    var area = side * side;
    displayResult(area);
}

function calculateAreaCircle() {
    var radius = parseFloat(document.getElementById("radius").value);
    var area = Math.PI * radius * radius;
    displayResult(area);
}

function calculateAreaTriangle() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);
    var area = 0.5 * base * height;
    displayResult(area);
}

function displayResult(area) {
    document.getElementById("result").innerText = area.toFixed(2);
    document.querySelector('.result').style.display = '';
}