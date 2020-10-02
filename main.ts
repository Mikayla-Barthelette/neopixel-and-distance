// Created by: Mikayla Barthelette
// Created on: Oct. 2020
// 
// This program uses a sonar to light up neopixels
let range4: neopixel.Strip = null
let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
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
    strip = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)
    if (distance < 4) {
        range = strip.range(3, 4)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance == 3) {
        range2 = strip.range(2, 3)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (distance == 2) {
        range3 = strip.range(1, 2)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (distance == 1) {
        range4 = strip.range(0, 1)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (distance == 0) {
        range4 = strip.range(3, 4)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
