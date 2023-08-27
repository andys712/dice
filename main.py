def on_button_pressed_a():
    global LoopCount
    if ok:
        LoopCount += -1
        basic.show_string("" + str((LoopCount)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def RollDice():
    global ok
    if ok:
        ok = False
        music.play(music.builtin_playable_sound_effect(soundExpression.twinkle),
            music.PlaybackMode.IN_BACKGROUND)
        for index in range(LoopCount):
            basic.show_icon(IconNames.SQUARE)
            basic.show_icon(IconNames.CHESSBOARD)
        music.stop_all_sounds()
        basic.show_number(randint(1, 6))
        ok = True

def on_button_pressed_b():
    global LoopCount
    if ok:
        LoopCount += 1
        basic.show_string("" + str((LoopCount)))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    RollDice()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    RollDice()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

LoopCount = 0
ok = False
ok = True
LoopCount = 2