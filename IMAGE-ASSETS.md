# Image Assets Guide for Burger Club Website

## Required Images for /public folder

### Hero Section

- `burger-hero.png` - Main large burger image (with sesame seeds, cheese, lettuce visible)
- `burger-thumb-1.jpg` - Thumbnail 1 (classic burger)
- `burger-thumb-2.jpg` - Thumbnail 2 (double burger)
- `burger-thumb-3.jpg` - Thumbnail 3 (veggie burger)
- `burger-thumb-4.jpg` - Thumbnail 4 (special burger)

### Menu Section Cards

- `menu-new.jpg` - Chicken tenders/wings image
- `menu-burger.jpg` - Burger close-up
- `menu-sides.jpg` - Side dishes (fries, onion rings)
- `menu-fries.jpg` - Crispy fries
- `menu-desserts.jpg` - Coffee/desserts
- `menu-launch-offer.jpg` - Special combo meal
- `menu-wraps.jpg` - Wraps/sandwiches
- `menu-salads.jpg` - Fresh salad

### About Section (optional)

- `about-story.jpg`
- `restaurant-interior.jpg`

### Background Elements

- `lettuce-leaf.png` - Decorative element
- `tomato-slice.png` - Decorative element
- `sesame-seeds.png` - Small decorative particles

## Image Specifications

- **Format**: PNG for images with transparency, JPG for photos
- **Resolution**: At least 1920px width for hero images, 800px for menu cards
- **Optimization**: Compress images for web (use TinyPNG or similar)
- **Naming**: Use lowercase with hyphens (kebab-case)

## How to Add Images

1. Place all images in the `/public` folder
2. Reference them in components using `/image-name.jpg`
3. The public folder is served at the root URL

Example:

```tsx
<img src="/burger-hero.png" alt="Delicious burger" />
```
