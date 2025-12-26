# Richard Stallman Portfolio Website

A minimalist, retro-inspired single-page portfolio website dedicated to Richard Stallman, founder of the GNU Project and the Free Software Foundation. This project showcases his contributions to software freedom through a clean, responsive design with smooth interactions.

![Portfolio Preview](assets/preview.png)

## 🌟 Features

- **Fully Responsive Design** - Works seamlessly on mobile, tablet, desktop, and 4K displays
- **Minimalist Retro Aesthetic** - White background with teal and burnt orange accents
- **Smooth Animations** - Subtle scroll-triggered fade-ins and interactive hover effects
- **Accessible** - ARIA attributes, semantic HTML, and keyboard navigation support
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **No Build Required** - Pure HTML, CSS, and vanilla JavaScript—just clone and open
- **GitHub Pages Ready** - Deploy in seconds

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with proper document structure
- **CSS3** - Modern layout with Flexbox and Grid, CSS variables, animations
- **Vanilla JavaScript** - Lightweight interactivity without dependencies
- **Google Fonts** - Inter (body text) and Space Mono (headings/monospace)

## 📂 Project Structure

```
2ite-web-stallman-richard/
├── index.html          # Main HTML document
├── css/
│   └── styles.css      # All styles with CSS variables
├── js/
│   └── main.js         # Interactive functionality
├── assets/
│   ├── images/         # Placeholder for images
│   └── icons/          # Placeholder for icons
├── README.md           # Project documentation
└── LICENSE             # GPL-3.0 License
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/2ite-web-stallman-richard.git
   cd 2ite-web-stallman-richard
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

That's it! No build process, no npm install, no configuration needed.

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be live at `https://yourusername.github.io/2ite-web-stallman-richard/`

3. **Wait a few minutes**
   - GitHub Pages typically takes 1-3 minutes to deploy
   - Check the Actions tab to see deployment progress

## 📋 Sections Overview

### 1. Hero Section
Large, centered introduction with name, tagline, and call-to-action buttons. Features a subtle gradient background overlay.

### 2. About Section
Two-column layout with biographical information on the left and a decorative SVG placeholder on the right. Includes a timeline of key milestones with styled markers.

### 3. Skills Section
Grid of skill cards highlighting Richard Stallman's areas of expertise:
- Software Freedom
- GPL & Licensing
- GNU Project
- FSF Leadership

Each card includes an icon, title, and description.

### 4. Projects Section
Showcases six major projects with clickable cards:
- GNU Operating System
- GNU Compiler Collection (GCC)
- GNU Emacs
- GNU General Public License (GPL)
- Free Software Foundation (FSF)
- GNU Debugger (GDB)

Clicking any card opens a modal with detailed information and links.

### 5. CV Section
Two-column curriculum vitae with:
- Key positions and roles
- Major achievements
- Education
- Awards and recognition
- Download button (placeholder)

### 6. Quotes Section
Three notable quotes from Richard Stallman about software freedom, presented in styled quote cards.

### 7. Contact Section
Two-column layout with:
- Contact form (client-side validation, no backend)
- Social/resource links with icons

### 8. Footer
Copyright notice and links to GitHub repository.

## 💡 JavaScript Features Explained

All JavaScript is vanilla and well-commented. Here's what each function does:

### `initNavToggle()`
Handles the mobile hamburger menu:
- Toggles menu visibility when clicking the button
- Animates the hamburger icon into an X
- Closes menu when a link is clicked
- Updates ARIA attributes for screen readers

### `initSmoothScroll()`
Implements two features:
1. **Smooth scrolling** - When you click a navigation link, the page smoothly scrolls to that section
2. **Active link highlighting** - As you scroll, the current section's link in the navigation is highlighted

### `initScrollEffects()`
Adds visual polish during scrolling:
1. **Sticky header shadow** - Adds a subtle shadow to the header when you scroll down past 50px
2. **Fade-in animations** - Elements with the `.fade-in` class fade in and slide up when they come into view

### `initModal()`
Creates an interactive modal for project details:
- Opens when clicking any project card
- Displays detailed information from the `projectData` object
- Closes when clicking the X, clicking outside, or pressing Escape
- Prevents background scrolling while modal is open

### `initFormValidation()`
Validates the contact form:
- Checks that name, email, and message fields are filled
- Validates email format using regex
- Shows/hides error messages dynamically
- Provides real-time validation on blur (when you leave a field)

## 🎨 Design Principles

### Color Palette
- **White (#FFFFFF)** - Clean background
- **Charcoal (#222222)** - Body text
- **Teal (#0f9d9a)** - Primary accent, links, highlights
- **Burnt Orange (#d97706)** - Secondary accent, dates, emphasis
- **Light Gray (#f3f4f6)** - Section backgrounds, cards

### Typography
- **Inter** - Modern, readable sans-serif for body text
- **Space Mono** - Monospaced font for headings and retro elements

### Responsive Breakpoints
- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (adjusted grids)
- **Desktop**: 1024px - 1920px (default layout)
- **4K**: > 1920px (larger max-width, increased font size)

## 🔍 SEO & Accessibility

### SEO Features
- ✅ Semantic HTML5 structure
- ✅ Meta description and keywords
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Person schema)
- ✅ Descriptive alt text for all images
- ✅ Clean, descriptive URLs (once deployed)

### Accessibility Features
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Sufficient color contrast ratios
- ✅ Skip to content functionality
- ✅ Screen reader friendly

## 🎯 What I'm Proud Of

1. **Pure Vanilla JavaScript** - No dependencies means faster load times and easier maintenance
2. **Smooth Animations** - Subtle, professional animations that don't distract
3. **Responsive Grid Layouts** - Modern CSS Grid and Flexbox for flexible layouts
4. **Accessible Modal** - Proper focus management and keyboard controls
5. **Clean Code Structure** - Well-organized, commented, and easy to understand
6. **Performance** - Fast loading with minimal HTTP requests
7. **One-File Simplicity** - All CSS in one file, all JS in one file—easy to navigate

## 🔧 Customization Guide

### Changing Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --color-accent-teal: #0f9d9a;    /* Change primary color */
    --color-accent-orange: #d97706;  /* Change secondary color */
}
```

### Adding Projects
Add new project data in `js/main.js` inside the `projectData` object:
```javascript
newproject: {
    title: 'Project Title',
    description: 'Description...',
    features: ['Feature 1', 'Feature 2'],
    link: 'https://example.com'
}
```

Then add a new project card in `index.html`:
```html
<div class="project-card fade-in" data-project="newproject">
    <!-- Card content -->
</div>
```

### Modifying Content
All content is in `index.html`. Each section is clearly marked with comments. Simply find the section you want to edit and update the text.

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

In the spirit of Richard Stallman's philosophy, this code is free software: you can redistribute it and/or modify it under the terms of the GNU GPL as published by the Free Software Foundation.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📞 Contact

For questions or feedback about this project, please use the contact form on the website or open an issue on GitHub.

---

**Built with ❤️ and respect for software freedom**

*"Free software is a matter of liberty, not price. To understand the concept, you should think of 'free' as in 'free speech,' not as in 'free beer.'"* - Richard Stallman