basic.forever(function () {
    if (input.lightLevel() >= 200) {
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # . # #
            # . # . #
            . # # # .
            `)
    }
})
