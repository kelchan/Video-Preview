console.log("page loaded...");

function videoPlay( element ) {
    
    element.play();
}

function videoPause( element ) {
    element.pause();
    element.currentTime = 0;
}