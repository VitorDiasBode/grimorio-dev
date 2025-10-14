from PIL import Image, ImageFilter

before = Image.open("bridge.jpeg")
after = before.filter(ImageFilter.BoxBlur(1))
after.save("out.jpeg")
