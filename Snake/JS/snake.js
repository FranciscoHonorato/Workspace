window.onload = function () {
    var stage = document.getElementById('stage')
    var ctx = stage.getContext('2d')
    document.addEventListener("keydown", keyPush)

    var jogo = setInterval(game, 120)
    var parar = false

    var vel = 1

    var velX = velY = 0  //velocidade x, y
    var posX = 10      //posição x
    var posY = 15      // posição y
    var tamP = 25      //tam peça
    var quantP = 20      //quant peças
    var macX = macY = 15 //posição maça

    var trail = []   //calda
    tail = 5         // tam calda

    var audio = new Audio('./som/audio.mp3')
  
    function game() {
        posX += velX
        posY += velY

        if (posX < 0) {
            posX = quantP - 1
        }
        if (posX > quantP - 1) {
            posX = 0
        }
        if (posY < 0) {
            posY = quantP - 1
        }
        if (posY > quantP - 1) {
            posY = 0
        }


        ctx.fillStyle = '#455A64' //tabuleiro
        ctx.fillRect(0, 0, stage.width, stage.clientHeight)

        ctx.beginPath() //maca circulo
        ctx.fillStyle = "#FF5252"
        ctx.arc(macX * tamP + 12, macY * tamP + 12, 12, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = '#119688'  //snake
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tamP, trail[i].y * tamP, tamP - 2, tamP - 2)

            if (trail[i].x == posX && trail[i].y == posY) {
                velX = velY = 0
                tail = 5
            }

        }
        //contador
        ctx.fillStyle = 'white'
        ctx.font = "28px Arial"
        ctx.fillText(tail - 5, 20, 40)

        trail.push({ x: posX, y: posY })
        while (trail.length > tail) {
            trail.shift()
        }

        if (macX == posX && macY == posY) {

            tail++
            macX = Math.floor(Math.random() * quantP)
            macY = Math.floor(Math.random() * quantP)
            audio.play()
        }

    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 37: // left
                velX = -vel
                velY = 0
                break

            case 38: // up
                velX = 0
                velY = -vel
                break

            case 39: // rigth
                velX = vel
                velY = 0
                break

            case 40: // down
                velX = 0
                velY = vel
                break
            case 32:
                if (parar == false) {
                    velX = 0
                    velY = 0
                    parar = true
                } else {
                    posX += velX
                    posY += velY
                    parar = false
                }

                break

        }

    }

}