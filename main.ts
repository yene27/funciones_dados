input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    dibujar()
})
function imagenes () {
    lista = [
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    ]
}
input.onGesture(Gesture.Shake, function () {
    dibujar()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 6))
})
function dibujar () {
    lista[randint(0, 5)].showImage(0)
}
let lista: Image[] = []
imagenes()
