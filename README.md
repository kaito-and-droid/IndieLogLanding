# IndieLog Landing Page

Beautiful, modern landing page for IndieLog - the open-source build-in-public automation tool.

## Features

- 🎨 Modern gradient design with dark theme
- ✨ Smooth animations and transitions
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and lightweight (no frameworks)
- 🎯 Conversion-optimized layout
- 💻 Interactive terminal demo
- 🔥 Copy-to-clipboard code snippets
- 🌊 Smooth scrolling navigation

## Structure

```
landing_indielog/
├── index.html          # Main landing page
├── css/
│   └── style.css      # All styles
├── js/
│   └── script.js      # Interactive features
├── images/            # (Add your images here)
└── README.md          # This file
```

## Sections

1. **Hero** - Eye-catching headline with animated terminal
2. **Features** - 6 key features with hover effects
3. **How It Works** - 3-step process explanation
4. **Demo** - Visual before/after transformation
5. **Get Started** - Installation steps with copy buttons
6. **Footer** - Links and resources

## Local Development

Simply open `index.html` in your browser:

```bash
open index.html
# or
python -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Set source to `main` branch
4. Your site will be at `https://yourusername.github.io/landing_indielog`

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

Drag and drop the folder to [Netlify](https://app.netlify.com/drop)

## Customization

### Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary: #6366f1;     /* Main brand color */
    --secondary: #8b5cf6;   /* Secondary accent */
    --accent: #ec4899;      /* Highlight color */
}
```

### Content

Edit `index.html` to change:
- Hero headline and subtitle
- Feature descriptions
- Step-by-step guide
- Call-to-action buttons
- Links and URLs

### Images

Add images to the `/images` folder and reference them:

```html
<img src="images/screenshot.png" alt="Description">
```

## Performance

- No external dependencies (except Google Fonts)
- Optimized CSS with minimal reflows
- Lazy-loaded animations
- ~50KB total size

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Analytics (Optional)

Add Google Analytics or Plausible:

```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## SEO Optimization

Already included:
- Meta descriptions
- Semantic HTML
- Proper heading hierarchy
- Alt text placeholders

To improve:
1. Add Open Graph tags for social sharing
2. Add sitemap.xml
3. Add robots.txt
4. Optimize images with proper compression

## License

MIT - Same as IndieLog project

## Credits

Built for [IndieLog](https://github.com/kaito-and-droid/IndieLog) by the community.
