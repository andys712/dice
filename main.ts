input.onButtonPressed(Button.A, function () {
    if (ok) {
        LoopCount += -1
        basic.showString("" + LoopCount)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 9; index++) {
        led.plotBarGraph(
        index,
        11,
        false
        )
        basic.pause(50)
        basic.clearScreen()
    }
    for (let index = 0; index <= 9; index++) {
        led.plotBarGraph(
        1,
        index,
        false
        )
        basic.pause(100)
        basic.clearScreen()
    }
})
function RollDice () {
    if (ok) {
        ok = false
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.InBackground)
        for (let index = 0; index < LoopCount; index++) {
            basic.showIcon(IconNames.Square)
            basic.showIcon(IconNames.Chessboard)
        }
        music.stopAllSounds()
        basic.showNumber(randint(1, 6))
        ok = true
    }
}
input.onButtonPressed(Button.B, function () {
    if (ok) {
        LoopCount += 1
        basic.showString("" + LoopCount)
    }
})
input.onGesture(Gesture.Shake, function () {
    RollDice()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RollDice()
})
let LoopCount = 0
let ok = false
ok = true
LoopCount = 2
