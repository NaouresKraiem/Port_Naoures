# Naoures Kraiem - Portfolio Website

A modern, responsive portfolio website for Frontend Engineer Naoures Kraiem, built with React and TailwindCSS.

## Features

- ✨ Modern and clean design with smooth animations
- 📱 Fully responsive (mobile-friendly)
- 🎨 Smooth scrolling and advanced animations
- 🧭 Navigation bar with active section highlighting
- 📋 Sections: About Me, Skills, Experience, Projects, Contact
- 🔗 Social media links (LinkedIn, GitHub)
- ⚡ Fast and optimized with Vite
- 🖼️ Profile photo support with fallback

## Tech Stack

- React 18
- Vite
- TailwindCSS
- React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your profile photo:
   - Place your profile photo in the `public` folder
   - Name it `profile-photo.jpg` (or update the image path in components)
   - Recommended size: 800x800px or larger, square format works best
   - If no photo is provided, the portfolio will show initials "NK" as a fallback

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio_naoures/
├── public/
│   └── profile-photo.jpg (add your photo here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

To customize the portfolio:

1. **Profile Photo**: Add your photo to `public/profile-photo.jpg`
2. **Personal Information**: Edit the content in each component file in `src/components/`
3. **Colors**: Modify the color scheme in `tailwind.config.js`
4. **Styling**: Adjust styles in individual component files or `src/index.css`
5. **GitHub Link**: Update the GitHub URL in `Footer.jsx` and `Contact.jsx` (currently placeholder)

## Animations

The portfolio includes various animations:
- Typing effect in Hero section
- Floating background elements
- Fade-in and slide-up animations
- Hover effects on cards and buttons
- Smooth scroll transitions

## License

This project is open source and available under the MIT License.
