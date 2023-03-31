const canvasE1=document.querySelector("canvas"),
      canvasCtx=canvasE1.getContext("2d"),
      gapX=10

const lineWidth = 15

const campo={
    w:window.innerWidth,
    h:window.innerHeight,
    draw:function(){
        //Desenha o campo
        canvasCtx.fillStyle ="#286047"
        canvasCtx.fillRect(0,0,this.w,this.h)
    }
}

const linha={
    w:15,
    h:campo.h,
    draw:function(){
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillRect(campo.w/2 - this.w/2,0 ,this.w,this.h )
    }
}

const raqueteEsquerda={
    x:gapX,
    y:100,
    w:lineWidth.w,
    h:200,
    draw:function(){
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillRect(this.x,this.y,this.w,this.h)

    }
}
const raqueteDireita={
    x:campo.w-linha.w-gapX,
    y:100,
    w:line.w,
    h:200,
    draw:function(){
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillRect(this.x,this.y,this.w,this.h)

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
    linha.draw()
    raqueteEsquerda.draw()
    raqueteDireita.draw()



 
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