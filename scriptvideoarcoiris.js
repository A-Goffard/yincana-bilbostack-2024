let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d"); 
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "BILBOSTACK BILBOSTACK";
let matrix = str.split("");
let font = 5;
let col = width / font;
let arr = [];
const customColors = ["#E129FF", "#0019FF", "#00E0FF", "#21E800", "#E7D000", "#FF8A00", "#EE0000"];

for (let i = 0; i < col; i++) {
    arr[i] = 1;
}

const getRandomColor = () => {
    return customColors[Math.floor(Math.random() * customColors.length)];
};

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        let color = getRandomColor();

        ctx.fillStyle = color;
        ctx.font = "${font}px system-iu";
        ctx.fillText(txt, i * font, arr[i] * font);

        if (arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;      
        }

        arr[i]++;
    }
};

setInterval(draw, 20);

window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    col = width / font;
    arr = [];
    for (let i = 0; i < col; i++) {
        arr[i] = 1;
    }
    draw();
});
