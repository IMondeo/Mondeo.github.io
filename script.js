let clockface;
let clockhands;
function draw_clockface(){
   
    let R = 300 / 2;
    let canvas = document.getElementById("clock");
    context = canvas.getContext("2d");
    context.clearRect(0, 0, 300, 300);
    clockface = new Path2D();
    clockface.arc(R, R, R-1, 0, 2*Math.PI);
   
    for(let d =0; d < 60; ++d){
        let angle = (d / 60) * (2 * Math.PI);
let pX = Math.cos(angle) * R;
let pY = -Math.sin(angle) * R;
        let qX = 0.9 *pX;
        let qY = 0.9 *pY;
        pX += R; pY +=R;
        qX += R; qY +=R;
        clockface.moveTo(qX, qY);
        clockface.lineTo(pX, pY);
    }
    
    context.stroke(clockface)
    let date = new Date();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    
    let hoursAngle = Math.PI / 2 - (((hours % 12) / 12) * (2 * Math.PI));
    let secondsAngle = Math.PI / 2 - ((seconds / 60)*(2 * Math.PI));
    let minutesAngle = Math.PI / 2 - ((minutes / 60)*(2 * Math.PI));
    
    let hX = Math.cos(hoursAngle) * R / 2 + R;
    let hY = -Math.sin(hoursAngle) * R / 2 + R;
    let sX = Math.cos(secondsAngle) * R / 4 * 3 + R;
    let sY = -Math.sin(secondsAngle) * R / 4 * 3 + R; 
    let mX= Math.cos(minutesAngle) * R / 3 * 2 +R;
    let mY= -Math.sin(minutesAngle) * R / 3 * 2 +R;
    
    clockhands = new Path2D();
    clockhands.moveTo(R, R);
    clockhands.lineTo(hX, hY);
    clockhands.moveTo(R, R);
    clockhands.lineTo(sX, sY);
    clockhands.moveTo(R, R);
    clockhands.lineTo(mX, mY);
    
    context.stroke(clockhands);
    setTimeout(draw_clockface, 1000);
}

draw_clockface();