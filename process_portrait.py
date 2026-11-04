import numpy as np
from PIL import Image, ImageFilter, ImageOps

# Load image
img = Image.open('public/profile.png').convert('RGBA')
w, h = img.size
pixels = np.array(img, dtype=np.float32)

# Background color in the studio photo is light blue-grey: around [200, 208, 220]
# Calculate color distance to background
bg_ref = np.array([205.0, 212.0, 222.0], dtype=np.float32)
diff = np.sqrt(np.sum((pixels[:, :, :3] - bg_ref) ** 2, axis=-1))

# Foreground mask: where diff is significant
# Pixels close to bg_ref will have diff < 35
# Smooth transition between 25 and 45
alpha = np.clip((diff - 25.0) / 20.0, 0.0, 1.0)

# Bottom fade to black (shoulders fade into pure black #030303)
y_coords = np.linspace(0, 1, h)[:, None]
bottom_fade = np.clip((1.0 - y_coords) / 0.35, 0.0, 1.0)  # fade starting around 65% down

final_alpha = alpha * bottom_fade * 255.0

# Create mask image and blur slightly for smooth soft edges
mask = Image.fromarray(final_alpha.astype(np.uint8), mode='L')
mask = mask.filter(ImageFilter.GaussianBlur(radius=2))

# Create black background image #030303
bg = Image.new('RGBA', (w, h), (3, 3, 3, 255))
out = Image.composite(img, bg, mask)

# Save test result
out.save('public/profile-editorial.png')
print("Successfully generated public/profile-editorial.png")
