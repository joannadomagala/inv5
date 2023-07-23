basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, Math.abs(input.acceleration(Dimension.Y)))
})
