input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    basic.clearScreen()
    if (Type < 6) {
        Type = 6
    } else if (Type < 8) {
        Type = 8
    } else if (Type < 10) {
        Type = 10
    } else if (Type < 12) {
        Type = 12
    } else if (Type < 20) {
        Type = 20
    } else if (Type < 100) {
        Type = 100
    } else {
        Type = 4
    }
    basic.showNumber(Type)
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    Roll = 1
})
input.onGesture(Gesture.Shake, function () {
    led.stopAnimation()
    Roll = 1
})
function drawDice (num: number) {
    if (Type == 6) {
        if (num == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (num == 2) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                `)
        } else if (num == 3) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                `)
        } else if (num == 4) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
        } else if (num == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
        } else if (num == 6) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
        } else {
        	
        }
    } else {
        if (Type == 10) {
            basic.showNumber(num - 1)
        } else if (Type == 100) {
            basic.showNumber(num % 10 * 10)
        } else {
            basic.showNumber(num)
        }
    }
}
let Type = 0
let Roll = 0
Roll = 0
let Dice = 0
Type = 6
basic.showString("JVSoft")
basic.showArrow(ArrowNames.West)
basic.showString(" Select")
basic.forever(function () {
    while (Roll > 0) {
        Roll = Roll - 1
        Dice = randint(1, Type)
        drawDice(Dice)
    }
})
