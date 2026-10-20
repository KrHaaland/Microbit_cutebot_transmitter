radio.setGroup(23)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("A")
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("B")
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("AB")
    }
    if (!(input.buttonIsPressed(Button.B)) && (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.AB)))) {
        radio.sendString("0")
    }
})
