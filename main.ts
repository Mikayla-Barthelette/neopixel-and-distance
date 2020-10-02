// Created by: Mikayla Barthelette
// Created on: Oct. 2020
// 
// This program uses a sonar to light up neopixels
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let distance = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance)
    strip = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)
    if (distance > 4) {
        range = strip.range(3, 4)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance == 3) {
        range = strip.range(2, 3)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (distance == 2) {
        range = strip.range(1, 2)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (distance == 1) {
        range = strip.range(0, 1)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (distance == 0) {
        range = strip.range(3, 4)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
