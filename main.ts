input.onGesture(Gesture.Shake, function () {
    if (ok) {
        ok = false
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.InBackground)
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Square)
            basic.showIcon(IconNames.Chessboard)
        }
        music.stopAllSounds()
        basic.showNumber(randint(1, 6))
        ok = true
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (ok) {
        ok = false
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.InBackground)
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Square)
            basic.showIcon(IconNames.Chessboard)
        }
        music.stopAllSounds()
        basic.showNumber(randint(1, 6))
        ok = true
    }
})
let ok = false
ok = true
