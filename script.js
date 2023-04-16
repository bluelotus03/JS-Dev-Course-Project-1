const canvas = document.getElementById('canvas1');

// You could also pass webgl to get access to a different set of methods
const ctx = canvas.getContext('2d');

console.log(ctx);

// Global size variables
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// Bring image into the JS project (built in Image class constructor)
// This Image class will create an image element
const playerImage = new Image();

playerImage.src = 'shadow_dog.png';

// If take entire file and divide width by the number of columns --> get width of 1 frame
// This sprite sheet is 6876px wide and has 12 columns --> 573px (going to use 575px for now - last frame is a bit smaller and margin isn't perfect)
const spriteWidth = 575;

// Divide height of sprite sheet (5230px) by number of rows (10) to get height of 1 frame --> 523px 
const spriteHeight = 523;


function animate() { 

    ctx.fillStyle = 'black';

    // Clear previous drawing for each animation frame
    // Takes in args to specify what area we want to clear, here we are clearing entire area
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // ctx.fillRect(0, 50, 100, 100);

    // For working with sprite animations - most interested in canvas drawImage() method
    // You can pass it 3, 5, or 9 args depending on how much control you want to have over the image 

    // If passing 5 args (Second - Fifth args are used to position and stretch entire image):
        // First arg - the image you want to draw
        // Second & Third args - x and y coordinates 
        // Fourth & Fifth args (if passing 5 args instead of 3) - width and height of the image
        // EXAMPLE: ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // If passing 9 args:
        // First arg - the image you want to draw 
        // Second - Fifth args (src info/cropping) - determine rectangular area we want to cut out from the src image (x, y, width, height)
        // Sixth - Ninth args (canvas destination info) - where on canvas to draw that cropped part of the image (x, y, width, height)
        // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

    
    ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    requestAnimationFrame(animate);
}

animate();


