var depth = 6
// levels of branches

var curl = Math.PI / 6

var breadth = 6
// how many branches each new brand will create

var spread = Math.PI / 6
// angel between each branch


function branch(d) {
    line(0,0,0,1)

    if (d > 1){
        translate(0,1)
        
        rotate(curl)

        scale(0.5)

        for (var i = 0; i < breadth; i++ ) {
            branch(d-1)

            rotate(spread)
        }
        rotate(-spread * breadth)

        rotate(-curl)

        scale(2)

        translate(0, -1)
    }
}

function setup() {
    createCanvas(400,400)
}

function draw() {
    curl = Math.PI * ((mouseX / width) * 2 - 1)
     // mouseX(mouse position)/width*2-1(-1 on he left side ans pi+ on the right)
    spread = Math.PI * ((mouseY / height) * 2 - 1 )

    background(50) // 0 background color = black

    stroke(255)

    translate(200 , 400)

    rotate(Math.PI)

    scale(200)

    strokeWeight(0.1)

    branch(depth)
}




var curl = Math.PI / 3




