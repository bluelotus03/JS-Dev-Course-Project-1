const canvas = document.getElementById('canvas1');

// You could also pass webgl to get access to a different set of methods
const ctx = canvas.getContext('2d');

console.log(ctx);

// For working with sprite animations - most interested in canvas drawImage() method

// Global size variables
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// Bring image into the JS project (built in Image class constructor)
// This Image class will create an image element
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
let x = 0;

function animate() { 

    ctx.fillStyle = 'black';

    // Clear previous drawing for each animation frame
    // Takes in args to specify what area we want to clear, here we are clearing entire area
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.fillRect(x, 50, 100, 100);
    x++; // creates movement

    requestAnimationFrame(animate);
}

animate();
