# Becky's Garden

A beautiful, responsive website for a professional gardening and landscaping business. This site showcases services, products, and provides a way for customers to get in touch.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Beautiful garden-themed design with smooth animations
- **Service Showcase** - Display gardening and landscaping services with imagery
- **Product Shop** - Browse and view available plants and garden products
- **Contact Form** - Integrated with Formspree for easy customer inquiries
- **Parallax Effects** - Animated fireflies on hero section for visual appeal
- **Smooth Navigation** - Hamburger menu for mobile, smooth scrolling
- **Portfolio Section** - Display before/after garden transformations
- **Testimonials** - Customer reviews and feedback
- **FAQ Section** - Answer common customer questions

## Project Structure

```
bEKY Garden/
├── index.html          # Main HTML file
├── script.js           # JavaScript for interactivity and animations
├── styles.css          # CSS styling
├── hero-bg.png         # Hero section background image
├── pictures/           # Folder containing project images
│   ├── About Beky's Garden.jpg
│   ├── Landscaping.jpg
│   ├── Flower Arrangement.jpg
│   ├── Lawn Maintenance.jpg
│   └── [other images]
└── README.md          # This file
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side setup required - this is a static website

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd "bEKY Garden"
   ```

2. **Open in browser**
   - Simply double-click `index.html` to open in your default browser

## Configuration

### Contact Form Setup

The contact form uses **Formspree** for email delivery:

1. **Create a Formspree account** at [formspree.io](https://formspree.io)
2. **Create a new form** and get your Form ID
3. **Update the form in `index.html`** (line ~423):
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

When users submit the form, emails are sent to the email address associated with your Formspree account.

### Customization

#### Update Business Information
Edit the following sections in `index.html`:

- **Company Name** (line 19): Change "Becky's Garden" 
- **Contact Info** (lines ~443-456): Phone, email, address
- **Navigation Links** (lines ~27-32): Modify menu items

#### Styling
Edit `styles.css` to customize:
- Colors and color scheme
- Fonts and typography
- Spacing and layout
- Animations and transitions

#### Content
Update the following in `index.html`:
- Hero section text
- Service descriptions
- Product information
- Testimonials
- FAQ questions and answers

## Design Features

### Color Scheme
- Primary Green: `#1a5a2a` (forest green)
- Accent Colors: Various greens and earth tones

### Fonts
- **Headings**: Playfair Display, Poppins
- **Body**: Montserrat
- **Decorative**: Caveat

### Animations
- Parallax firefly effects on scroll
- Section fade-in animations
- Smooth navigation transitions
- Service card hover effects

## Responsive Breakpoints

- **Mobile**: Up to 768px
- **Tablet**: 768px to 1024px
- **Desktop**: 1024px and above

## Email Integration

**Current Setup**: Formspree (free tier available)

**Benefits**:
- No backend required
- Easy to set up
- Reliable email delivery
- Free for up to 50 submissions/month (Free tier)

**Alternative Services** (if you want to switch):
- EmailJS
- Netlify Forms
- AWS SES
- SendGrid

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling, Grid, Flexbox
- **JavaScript (Vanilla)** - No frameworks, lightweight and fast
- **Formspree API** - Email form handling
- **Google Fonts** - Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Contact Form Not Working
- Verify your Formspree Form ID is correct in `index.html`
- Check that your Formspree account is active
- Look for CORS errors in browser console (F12)
- Ensure you're connected to the internet

### Images Not Loading
- Verify image files exist in the `pictures/` folder
- Check file paths in `index.html` are correct
- Ensure file names match exactly (case-sensitive on some systems)

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try opening in an incognito/private window
- Ensure `styles.css` is in the same directory as `index.html`

### Mobile Menu Not Working
- Check that JavaScript is enabled in your browser
- Verify `script.js` is loading (check browser console for errors)

## License

This project is property of Becky's Garden. Modify and use as needed for the business.

## Developer Notes

### Key JavaScript Functions
- `toggleFaq()` - Opens/closes FAQ accordion items
- `animateStatNumbers()` - Animates counter statistics on scroll
- Smooth scroll navigation for all hash links
- Intersection Observer for scroll animations

### Performance Tips
- Optimize images before uploading to reduce load time
- Use CSS Grid/Flexbox for responsive layouts (already implemented)
- Minimize JavaScript on mobile devices
- Cache static assets

## Support

For issues or questions about the website:
1. Check the FAQ section in the website
2. Review this README for common solutions
3. Contact the development team

---

**Last Updated**: April 20, 2026
**Version**: 1.0
