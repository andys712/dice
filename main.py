def on_gesture_shake():
    global ok
    if ok:
        ok = False
        music.play(music.builtin_playable_sound_effect(soundExpression.twinkle),
            music.PlaybackMode.IN_BACKGROUND)
        for index in range(2):
            basic.show_icon(IconNames.SQUARE)
            basic.show_icon(IconNames.CHESSBOARD)
        music.stop_all_sounds()
        basic.show_number(randint(1, 6))
        ok = True
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    global ok
    if ok:
        ok = False
        music.play(music.builtin_playable_sound_effect(soundExpression.twinkle),
            music.PlaybackMode.IN_BACKGROUND)
        for index2 in range(2):
            basic.show_icon(IconNames.SQUARE)
            basic.show_icon(IconNames.CHESSBOARD)
        music.stop_all_sounds()
        basic.show_number(randint(1, 6))
        ok = True
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

ok = False
ok = True