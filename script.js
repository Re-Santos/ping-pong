const canvasE1=document.querySelector("canvas"),
      canvasCtx=canvasE1.getContext("2d"),
      gapX=10

const mouse = {x:0, y: 0}

const campo={
    w:window.innerWidth,
    h:window.innerHeight,
    draw:function(){
        
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
    y:0,
    w:linha.w,
    h:200,
    _move: function (){
        this.y=mouse.y - this.h/2
    },
    draw:function(){
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillRect(this.x,this.y,this.w,this.h)
        this._move()
    },
}

const raqueteDireita={
    x:campo.w-linha.w-gapX,
    y:100,
    w:linha.w,
    h:200,
    speed:5,
    _move: function(){
        if(this.y+this.h/2<bola.y+bola.r){
            this.y += this.speed
        }else{
            this.y -+this.speed
        }
        this.y = bola.y
    },

    speedUp: function(){
        this.speed +=2
    },

    draw:function(){
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillRect(this.x,this.y,this.w,this.h)
        this._move()
    },
}

const placar={
    jogador:1,
    computador:2,
    acrescentaPontoJogador: function(){
        this.jogador ++
    },
    acrescentaPontoComputdor: function(){
        this.computador ++
    },
    draw:function(){
        canvasCtx.font = "bold 72px Arial"
        canvasCtx.textAlign = "center"
        canvasCtx.textBaseline = "top"
        canvasCtx.fillStyle = "#01341D"
        canvasCtx.fillText(this.jogador, window.innerWidth / 4,50)
        canvasCtx.fillText(this.computador, window.innerWidth / 4 + window.innerWidth / 2,50)
    
    }
}

const bola={
    x:300,
    y:200,
    r:20,
    velocidade:5,
    direcaoX:1,
    direcaoY:1,
    _calcposicao: function (){
        //Verifica se o jogador fez um ponto (x > que a largura do campo)
        if(this.x > campo.w - this.r-raqueteDireita.w-gapX){
        //Verifica se a raquete direita, está na posição y da bola.
            if(this.y + this.r > raqueteDireita.y && 
                this.y - this.r < raqueteDireita.y + raqueteDireita.h){
                    //rebate a bola revertendo o sinal de x
                this._reverseX()
            }else{
                //pontuar o jogador
                placar.acrescentaPontoJogador()
                this._centralizaBola()
            }
       
        }
         // verifica se o jogador fez um ponto
         if(this.x<this.r+raqueteEsquerda.w+gapX){
            //verifica se a raquete esquerda está na posiçãoy da bola
            if(this.y+this.r>raqueteEsquerda.y && 
            this.y-this.r<raqueteEsquerda.y+raqueteEsquerda.h){
                //rebate a bola invertendo o sinal de x
                this._reverseX()
            }else{
                //pontua o jogador
                placar.acrescentaPontoJogador()
                this._centralizaBola()
            }
         }
        //Verifica as laterais superior e inferior do campo
        if (
        (this.y - this.r <0 && this.direcaoY<0) ||
        (this.y>campo.h - this.r && this.direcaoY>0) ){
        // rebate a bola invertendo o sinal do eixo Y
            this._reverseY()
        }
    },
        //1 * -1 = -1
        //-1* -1 = 1
    _reverseX: function (){
        this.direcaoX *= -1
    },
        //1 * -1 = -1
        //-1* -1 = 1
    _reverseY: function (){
        this.direcaoY *= -1
    },
    
    _velocidadeBola: function(){
        this.velocidade += 2
    },

    _centralizaBola: function(){
        this._velocidadeBola()
        raqueteDireita.speedUp()

        this.x=field.w/2
        this.y=field.h/2

    },

    _move: function (){
        this.x += this.direcaoX * this.velocidade
        this.y += this.direcaoY * this.velocidade
    },

    draw:function (){
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.beginPath()
        canvasCtx.arc(this.x,this.y,this.r,0,2*Math.PI,false)
        canvasCtx.fill()
        
        this._calcposicao()
        this._move()
    },

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
    placar.draw()
    bola.draw()
    
}


window.animateFrame = (function (){
    return(
        window.requestAnimationFrame||
        window.webkitRequestAnimationFrame||
        window.mozRequestAnimationFrame||
        window.oRequestAnimationFrame||
        window.msRequestAnimationFrame||
        function (callback){
            return window.setInterval(draw, 1000/60)
        }

        
    )
})()

    function main(){
        animateFrame(main)
        draw()
    }

    setup()
    main()

    canvasE1.addEventListener("mousemove", function(e){
        mouse.x = e.pageX
        mouse.y = e.pageY

        
    })