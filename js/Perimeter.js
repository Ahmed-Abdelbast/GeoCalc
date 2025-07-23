function showShape() {
    var selectedShape = document.getElementById("figures").value;
    var shapes = ['rectangle', 'square', 'parallelogram', 'triangle'];
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

function calculateParallelogram() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
    var perimeter = 2 * (base + height);
    displayResult(perimeter);
}

function calculateTriangle() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);
    var perimeter = sideA + sideB + sideC;
    displayResult(perimeter);
}

function calculateRectangle() {
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var perimeter = 2 * (length + width);
    displayResult(perimeter);
}

function calculateSquare() {
    var a = parseFloat(document.getElementById('a').value);
    var perimeter = 4 * a;
    displayResult(perimeter);
}

function displayResult(perimeter) {
    document.getElementById('result').textContent = perimeter;
    document.querySelector('.result').style.display = '';
}