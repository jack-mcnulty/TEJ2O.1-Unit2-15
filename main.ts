/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack
 * Created on: Nov 2025
 * This program moves the pixels along the edge of the microbit
*/

// variables
let sprite: game.LedSprite = null
let loopCounter1 = 0
let loopCounter2 = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// A button pressed, moves the pixels cw
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    loopCounter1 = 0
    basic.pause(500)
    while (loopCounter1 < 4) {
        loopCounter1 = loopCounter1 + 1
        loopCounter2 = 0
        while (loopCounter2 < 4) {
            sprite.move(1)
            basic.pause(500)
            loopCounter2 = loopCounter2 + 1
        }
        sprite.turn(Direction.Right, 90)
    }
    sprite.delete()
    basic.showIcon(IconNames.Yes)
})
