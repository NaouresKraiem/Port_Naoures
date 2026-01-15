# Project Images

Place your project screenshots/images in this folder.

## Recommended Image Specifications:
- **Format**: JPG or PNG
- **Aspect Ratio**: 16:9 or 4:3 (landscape)
- **Size**: 1200x675px or larger
- **File Size**: Under 500KB for optimal performance

## Naming Convention:
Use descriptive names like:
- `linkefoot.jpg`
- `ranktip.jpg`
- `tresovista.jpg`
- `takiacademy.jpg`
- `rentcar.jpg`
- `leavemetry.jpg`

## How to Add Images:

1. Place your image files in this folder
2. In `Projects.jsx`, import the images at the top:
   ```javascript
   import linkefootImage from '../assets/projects/linkefoot.jpg'
   import ranktipImage from '../assets/projects/ranktip.jpg'
   ```
3. Replace `null` with the imported image variable in each project object:
   ```javascript
   {
       title: 'LinkeFoot | Football Social Media Platform',
       image: linkefootImage, // Replace null with the imported image
       // ... rest of project data
   }
   ```

The images will automatically display at the top of each project card with a hover effect.
