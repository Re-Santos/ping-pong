const canvasE1=document.querySelector("canvas"),
      canvasCtx=canvasE1.getContext("2d")

const lineWidth = 15

function setup(){
    canvasE1.width = window.innerWidth
    canvasCtx.width = window.innerWidth
    canvasE1.height = window.innerHeight
    canvasCtx.height = window.innerHeight
}
//Desenha o campo
function draw(){
    canvasCtx.fillStyle ="#286047"
    canvasCtx.fillRect(0,0,window.innerWidth,window.innerHeight)

    canvasCtx.fillStyle = "#ffffff"

    const x = window.innerWidth/2 - lineWidth/2
    const y = 0
    const w = lineWidth
    const h = window.innerHeight

    canvasCtx.fillRect(x, y, w, h)

//Desenha a raquete esquerda

    canvasCtx.fillRect(10,100,lineWidth,200)

//Desenha a raquete direita

    canvasCtx.fillRect(window.innerWidth-lineWidth-10,200,lineWidth,200)

}

setup()
draw()