const quotesARR = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "It is never too late to be what you might have been. - George Eliot",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You can never plan the future by the past. - Edmund Burke",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It’s not the years in your life that count, it’s the life in your years. - Abraham Lincoln",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Everything you can imagine is real. - Pablo Picasso"
  ]

//   continuous changing quotes

    function generateQuote(){

    const index = Math.floor(Math.random()*quotesARR.length);

    const text = document.getElementById('quote');
    text.textContent = quotesARR[index];
    }
    setInterval(generateQuote,3000);

// continuous changing background color

const color = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Cyan",
    "Magenta",
    "Silver",
    "Black",
    "White",
    "Gray",
    "Orange",
    "Dark Green",
    "Indigo",
    "Deep Pink",
    "Forest Green",
    "Saddle Brown",
    "Steel Blue",
    "Tomato",
    "Plum",
    "Bisque"
  ]
  

//   const index2 = Math.floor(Math.random()*color.length);

//   const color1 = document.getElementsById('general');
//   color1.style.backgroundColor = color[0];

const colors = [
    [255, 0, 0],    // Red
    [0, 255, 0],    // Green
    [0, 0, 255],    // Blue
    [255, 255, 0],  // Yellow
    [0, 255, 255],  // Cyan
    [255, 0, 255],  // Magenta
    [192, 192, 192],// Silver
    [0, 0, 0],      // Black
    [255, 255, 255],// White
    [128, 128, 128],// Gray
    [255, 165, 0],  // Orange
    [0, 128, 0],    // Dark Green
    [75, 0, 130],   // Indigo
    [255, 20, 147], // Deep Pink
    [34, 139, 34],  // Forest Green
    [139, 69, 19],  // Saddle Brown
    [70, 130, 180], // Steel Blue
    [255, 99, 71],  // Tomato
    [221, 160, 221],// Plum
    [255, 228, 196] // Bisque
];

let index = 0;

function changeBackgroundColor() {
    // Get the current color
    const color = colors[index];
    // Set the background color using RGB format
    document.body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    
    // Update index for the next color
    index = (index + 1) % colors.length;
}

// Change the background color every 3 seconds
setInterval(changeBackgroundColor, 3000);