const canvasE1=document.querySelector("canvas"),
      canvasCtx=canvasE1.getContext("2d")

function setup(){
    canvasE1.width = window.innerWidth
    canvasCtx.width = window.innerWidth
    canvasE1.height = window.innerHeight
    canvasCtx.height = window.innerHeight
}
function draw(){
    canvasCtx.fillStyle="#286047"
    canvasCtx.fillRect(0,0,window.innerWidth,window.innerHeight)
}

setup()
draw()