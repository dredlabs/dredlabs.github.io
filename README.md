# DredLabs - Tech Company Portfolio Website

A modern, responsive portfolio website for a technology company. Built with HTML5, CSS3, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Smooth scrolling navigation
- Interactive service cards
- Portfolio showcase
- Contact form
- Animated sections on scroll
- Mobile-friendly navigation
- Social media integration

## File Structure

```
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── main.js        # JavaScript functionality
└── images/            # Image assets (not included)
```

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/dredlabs.github.io.git
   ```

2. Add your images to the `images` directory:
   - `about-image.jpg` for the about section
   - `portfolio-1.jpg`, `portfolio-2.jpg`, `portfolio-3.jpg` for portfolio items

3. Customize the content:
   - Update text in `index.html`
   - Modify colors in `css/style.css` (see CSS Variables section)
   - Configure form submission in `js/main.js`

## Customization

### CSS Variables

The website uses CSS variables for easy customization. Find them at the top of `style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --light-background: #f3f4f6;
    --border-color: #e5e7eb;
}
```

### Adding Portfolio Items

To add a new portfolio item, copy and paste this structure in the portfolio section:

```html
<div class="portfolio-item">
    <img src="images/your-image.jpg" alt="Project Name" loading="lazy">
    <div class="portfolio-info">
        <h3>Project Name</h3>
        <p>Project Description</p>
    </div>
</div>
```

### Adding Services

To add a new service, copy and paste this structure in the services section:

```html
<div class="service-card">
    <i class="fas fa-icon-name"></i>
    <h3>Service Name</h3>
    <p>Service Description</p>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or concerns, please contact us at contact@dredlabs.com
