window.onload = function () {
    var stage = document.getElementById('stage')
    var ctx = stage.getContext('2d')
    document.addEventListener("keydown", keyPush)

    var jogo = setInterval(game, 120)
    var parar = false

    var velocidade = 1

    var velocidadeX = velocidadeY = 0
    var posicaoX = 10
    var posicaoY = 15
    var tamPeca = 25
    var quantPeca = 20
    var posicMacaX = posicMacaY = 15

    var calda = []
    var tamCalda = 5

    var audio = new Audio('./som/audio.mp3')

    function game() {
        posicaoX += velocidadeX
        posicaoY += velocidadeY

        if (posicaoX < 0) {
            posicaoX = quantPeca - 1
        }
        if (posicaoX > quantPeca - 1) {
            posicaoX = 0
        }
        if (posicaoY < 0) {
            posicaoY = quantPeca - 1
        }
        if (posicaoY > quantPeca - 1) {
            posicaoY = 0
        }

        function criarTabuleiro() {
            ctx.fillStyle = '#455A64'
            ctx.fillRect(0, 0, stage.width, stage.clientHeight)
        }

        function criarSnake() {
            ctx.fillStyle = '#119688'  
            for (var i = 0; i < calda.length; i++) {
                ctx.fillRect(calda[i].x * tamPeca, calda[i].y * tamPeca, tamPeca - 2, tamPeca - 2)

                if (calda[i].x == posicaoX && calda[i].y == posicaoY) {
                    velocidadeX = velocidadeY = 0
                    tamCalda = 5
                }

            }
        }

        function criarMaca() {
            ctx.beginPath() 
            ctx.fillStyle = "#FF5252"
            ctx.arc(posicMacaX * tamPeca + 12, posicMacaY * tamPeca + 12, 12, 0, 2 * Math.PI)
            ctx.fill()
        }
        
        criarTabuleiro()
        criarSnake()
        criarMaca()

        //contador
        ctx.fillStyle = 'white'
        ctx.font = "28px Arial"
        ctx.fillText(tamCalda - 5, 20, 40)

        calda.push({ x: posicaoX, y: posicaoY })
        while (calda.length > tamCalda) {
            calda.shift()
        }

        if (posicMacaX == posicaoX && posicMacaY == posicaoY) {

            tamCalda++
            posicMacaX = Math.floor(Math.random() * quantPeca)
            posicMacaY = Math.floor(Math.random() * quantPeca)
            audio.play()
        }

    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 37: // left
                velocidadeX = -velocidade
                velocidadeY = 0
                break

            case 38: // up
                velocidadeX = 0
                velocidadeY = -velocidade
                break

            case 39: // rigth
                velocidadeX = velocidade
                velocidadeY = 0
                break

            case 40: // down
                velocidadeX = 0
                velocidadeY = velocidade
                break
            case 32:
                if (parar == false) {
                    velocidadeX = 0
                    velocidadeY = 0
                    parar = true
                } else {
                    posicaoX += velocidadeX
                    posicaoY += velocidadeY
                    parar = false
                }

                break

        }

    }

}