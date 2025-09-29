# 3AM Digital Labs Portfolio

A modern, responsive portfolio website built with React, Vite, and Framer Motion.

## Features

- **Modern Design**: Clean, professional layout with glassmorphism effects
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Multi-slide**: Hero, About, Mission & Vision, Services, Projects, Why Us, and Contact slides
- **Red Theme**: Consistent red gradient color scheme throughout

## Tech Stack

- React 18
- Vite
- Framer Motion
- React Icons
- CSS3 with modern features

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

### Prerequisites
1. Create a GitHub repository named `portfolio`
2. Push your code to the repository

### Deploy
```bash
# Deploy to GitHub Pages
npm run deploy
```

The site will be available at: `https://yourusername.github.io/portfolio/`

### Manual Deployment
1. Run `npm run build`
2. Copy the contents of the `dist` folder
3. Go to your GitHub repository settings
4. Navigate to Pages section
5. Select "Deploy from a branch"
6. Choose "gh-pages" branch
7. Save

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   └── slides/
│       ├── HeroSlide.jsx
│       ├── AboutSlide.jsx
│       ├── MissionVisionSlide.jsx
│       ├── ServicesSlide.jsx
│       ├── CompetenciesSlide.jsx
│       ├── ProjectsSlide.jsx
│       ├── WhyUsSlide.jsx
│       └── ContactSlide.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Customization

- **Colors**: Update the red gradient colors in `src/App.css`
- **Content**: Modify slide components in `src/components/slides/`
- **Animations**: Adjust Framer Motion animations in component files
- **Styling**: Update CSS in `src/App.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to 3AM Digital Labs.