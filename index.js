const MatrixRain    = document.getElementById("backgroundMatrix");
const MatrixContext = MatrixRain.getContext('2d');

MatrixRain.width  = window.innerWidth;
MatrixRain.height = window.innerHeight;

const katakana  = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin     = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
const numerical = '0123456789';

const drops =  katakana + latin + numerical;    // chars which will be the drop of the rain;

const fontSize = 13;                            // size of the rain drop;
const columns  = MatrixRain.width/fontSize;     // number of columns to rain;

const rainDrops = new Array(Math.ceil(columns)).fill(1);    /* The index of each element index of the array rainDrops is the x coordinate and each element is the y coordinate,
                                                             filling the array with 1 is the same as setting all inital point at y=1 (top of the page is y=0);*/

// Function to draw the rain;
const drawRain = () => {
    MatrixContext.fillStyle = 'rgba(0, 0, 0, 0.05)';                    // black background for the canavs;
    MatrixContext.fillRect(0, 0, MatrixRain.width, MatrixRain.height);  // translucent backgroup to show the trail;

    MatrixContext.fillStyle = '#0F0';                       // green text;
    MatrixContext.font = fontSize + 'px times new roman';   //

    // Looping over the columns, so the effect is perpetual;
    for (let index = 0; index < rainDrops.length; index++)
    {
        const char = drops[Math.floor(Math.random()*drops.length)];                 // pick a random drop(char);
        MatrixContext.fillText(char, index*fontSize, rainDrops[index]*fontSize);    // write the char on the screen, x=index*fontSize, y=rainDrops[index]*fontSize;

        rainDrops[index] = rainDrops[index]*fontSize > MatrixRain.height && Math.random() > 0.975 ? 0 : rainDrops[index];   // Adding some randomness to the end of the drop;
        rainDrops[index]++; // incrementing y coordinate;
    }
};

setInterval(drawRain, 42);