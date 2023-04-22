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

// Allow us to have movement (move a frame left/right or up/down), setting starting frame to the first one (top left)
// X -> travels through sprite sheet horizontally
let frameX = 0; 
// Y -> travels through sprite sheet vertically
let frameY = 0;

// Used to count frame rate and work with staggerFrames in the animate() function
gameFrame = 0;

// Will slow down animation by that amount -- higher the number, the slower the animation will be 
const staggerFrames = 5;

function animate() { 

    // Clear previous drawing for each animation frame
    // Takes in args to specify what area we want to clear, here we are clearing entire area
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Cycle through horizontal sprite sheets
    // Math.floor - get rid of decimal points, 6 - last number in idle animation frames currently being used
    // gameFrame is an ever increasing number, and staggerFrames is always 5
    let position = Math.floor(gameFrame / staggerFrames) % 6;

    // position will cycle between 0 and the number specified last (6)
    frameX = spriteWidth * position;

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

    // Multiplying spriteWidth and spriteHeight by a number allows you to use a different frame in that row or column
        // 0 * the width or height is the first sprite on the sheet
        // 1 * the width or height is the second sprite on the sheet, and so on
        // EXAMPLE: 0 * spriteWidth, 0 * spriteHeight is the sprite in first row and column (top left)
        // EXAMPLE: 0 * spriteWidth, 1 * spriteHeight is the sprite in second row and first column (left and first down)
        
        // We can remove * spriteWidth from frameX now because it is getting calculated previously
        ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();


