from PIL import Image, ImageFilter

before = Image.open("bridge.jpeg")
after = before.filter(ImageFilter.FIND_EDGES)
after.save("out.jpeg")