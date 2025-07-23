const shapeSelector = document.getElementById("shape");
const inputFields = document.getElementById("inputFields");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");
const shapeFormula = document.getElementById("shapeFormula");

const shapeData = {
    square: {
        formula: "A = a²",
    },
    rectangle: {
        formula: "A = l × w",
    },
    triangle: {
        formula: "A = (1/2) × b × h",
    },
    circle: {
        formula: "A = πr²",
    },
};


shapeSelector.addEventListener("change", () => {
    const shape = shapeSelector.value;
    let html = "";

    switch (shape) {
        case "square":
            html = `<input type="number" id="side" placeholder="Side Length (a)" required>`;
            break;
        case "rectangle":
            html = `
                <input type="number" id="length" placeholder="Length (l)" required>
                <input type="number" id="width" placeholder="Width (w)" required>`;
            break;
        case "triangle":
            html = `
                <input type="number" id="base" placeholder="Base (b)" required>
                <input type="number" id="height" placeholder="Height (h)" required>`;
            break;
        case "circle":
            html = `<input type="number" id="radius" placeholder="Radius (r)" required>`;
            break;
        
    }

    inputFields.innerHTML = html;
    shapeFormula.textContent = shapeData[shape].formula;
});

// Function to calculate volume (same as before)
calculateBtn.addEventListener("click", () => {
    const shape = shapeSelector.value;
    let volume = 0;

    switch (shape) {
        case "square":
    const sideSquare = parseFloat(document.getElementById("side").value);
    volume = Math.pow(sideSquare, 2); // area
    break;
case "rectangle":
    const lengthRect = parseFloat(document.getElementById("length").value);
    const widthRect = parseFloat(document.getElementById("width").value);
    volume = lengthRect * widthRect; // area
    break;
case "triangle":
    const baseTriangle = parseFloat(document.getElementById("base").value);
    const heightTriangle = parseFloat(document.getElementById("height").value);
    volume = 0.5 * baseTriangle * heightTriangle; // area
    break;
case "circle":
    const radiusCircle = parseFloat(document.getElementById("radius").value);
    volume = Math.PI * Math.pow(radiusCircle, 2); // area
    break;

    }

    resultDiv.textContent = `Volume: ${volume.toFixed(2)}`;
});