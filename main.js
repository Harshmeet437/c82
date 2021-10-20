var mouseE = "empty";
var Lx
var Ly

canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 5;

canvas.addEventListener("mousedown",MD);

function MD(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    mouseE= "mousedown";
}

canvas.addEventListener("mousemove",MV);

function MV(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseE == "mousedown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
    
            console.log("Last position of x and y coordinates = ");
            console.log("x = " + Lx + "y = " + Ly);
            ctx.moveTo(Lx, Ly);
    
            console.log("Current position of x and y coordinates = ");
            console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();
            }
           Lx = current_position_of_mouse_x; 
        Ly = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseE = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseE = "mouseleave";
    }


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}