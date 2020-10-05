# Created by: Mikayla Barthelette
# Created on: Oct. 2020
# 
# This program is showing how a traffic light works


from microbit import *
import neopixel

np=neopixel.NeoPixel(pin16, 4)
np.clear()
np.show()
display.show(Image.YES)
sleep(500)

count = 0
while (count < 4):
    count = count + 1
    np[2] = (0,128,0)
    np.show()
    sleep(1000)
    np.clear()
    np.show()
    sleep(1000)
    np[1] = (255,165,0)
    np.show()
    sleep(1000)
    np.clear()
    np.show()
    sleep(1000)
    np[0] = (255,0,0)
    np.show()
    sleep(1000)
    np.clear()
    np.show()
    sleep(1000)





