from PIL import Image

image_path = 'C:/Users/balas/.gemini/antigravity-ide/brain/6afc5090-7d7c-4c94-b84b-626493158738/media__1786102935190.png'
img = Image.open(image_path)
print("Image Dimensions:", img.size)
w, h = img.size

# Crop icon 1: Shield with laurels and checkmark
icon1 = img.crop((int(w * 0.05), int(h * 0.05), int(w * 0.45), int(h * 0.65)))
icon1.save('e:/black tattoo/src/assets/badge-certified.png')

# Crop icon 2: Crossed tattoo guns
icon2 = img.crop((int(w * 0.55), int(h * 0.05), int(w * 0.95), int(h * 0.65)))
icon2.save('e:/black tattoo/src/assets/badge-experts.png')

print("Successfully saved badge-certified.png and badge-experts.png!")
