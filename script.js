const canvasE1=document.querySelector("canvas"),
      canvasCtx=canvasE1.getContext("2d")

const lineWidth = 15

const campo={
    w:window.innerWidth,
    h:window.innerHeight,

    draw:function(){
        //Desenha o campo
        canvasCtx.fillStyle ="#286047"
        canvasCtx.fillRect(0,0,window.innerWidth,window.innerHeight)
    }

}

function setup(){
    canvasE1.width = campo.w
    canvasCtx.width = campo.w
    canvasE1.height = campo.h
    canvasCtx.height = campo.h
}

function draw(){
   
    campo.draw()

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

//Desenha bolinha

    canvasCtx.beginPath()
    canvasCtx.arc(200,300,20,0,2*Math.PI,false)
    canvasCtx.fill()

//Desenha o placar

    canvasCtx.font = "bold 72px Arial"
    canvasCtx.textAlign = "center"
    canvasCtx.textBaseline = "top"
    canvasCtx.fillStyle = "#01341D"
    canvasCtx.fillText("3", window.innerWidth / 4,50)
    canvasCtx.fillText("1", window.innerWidth / 4 + window.innerWidth / 2,50)

}

setup()
draw()