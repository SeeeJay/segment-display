input.onButtonPressed(Button.A, function () {
    test_ON()
})
function test_ON () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function test_OFF () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
input.onButtonPressed(Button.B, function () {
    test_OFF()
})
basic.showIcon(IconNames.Heart)
