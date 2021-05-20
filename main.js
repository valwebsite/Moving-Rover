canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
background_image = "mars.jpg";
rover_image = "rover.png";
function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;
    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src = rover_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown); 
function my_keydown(e) {
     keypress = e.keyCode;
    console.log(keypress);
    if(keypress == "38") {
        console.log("up pressed");
        up();
    }
    if(keypress == "40") {
        console.log("down pressed");
        down();
    }
    if(keypress == "37") {
        console.log("left pressed");
        left();
    }

    if(keypress == "39") {
        console.log("right pressed");
        right();
    }
   function up() {
       if(rover_y >= 0) {
           rover_y = rover_y - 10;
           console.log("value of x axis is " + rover_x + "and of y is ");
           uploadbackground();
           uploadrover();
       }
   }
   
   function down() {
   if(rover_y <= 500) {
       rover_y = rover_y + 10;
       console.log("value of x axis is " + rover_x + "and of y is ");
       uploadbackground();
       uploadrover(); 
   }
}

function right() {
    if(rover_x <= 500) {
        rover_x = rover_x + 10;
        console.log("value of x axis is " + rover_x + "end of y is");
        uploadbackground();
        uploadrover();
    }
}

function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("value of x axis is " + rover_x + "end of y is");
        uploadbackground();
        uploadrover();
    }
}
}
