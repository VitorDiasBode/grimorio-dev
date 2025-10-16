import os
import qrcode

img = qrcode.make("https://www.youtube.com/")
img.save("qr.png", "PNG")