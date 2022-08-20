function setDicePatterns () {
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
function rollDice () {
    lista[randint(0, 5)].showImage(0)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    rollDice()
})
input.onGesture(Gesture.Shake, function () {
    rollDice()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 6))
})
let lista: Image[] = []
setDicePatterns()
rollDice()
