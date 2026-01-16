# BaTLorriH - Namibia's Logistics Platform

## Overview

BaTLorriH is a modern logistics and transport booking platform designed for Namibia. It provides a user-friendly interface for customers to book transportation services and for businesses to manage their logistics operations.

## Features

- **Vehicle Booking System**: Easy-to-use booking interface for various vehicle types
- **Multiple Vehicle Options**: Support for different vehicle types (5-ton trucks, bakkies, flatbeds, refrigerated units, tankers)
- **Real-time Database Integration**: Uses Supabase for data storage and management
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Secure Authentication**: JWT-based authentication with Supabase

## Project Structure

```
BatLorriH/
├── index.html                 # Homepage
├── about.html                 # About Us page
├── contact.html               # Contact page
├── drivers.html               # Drivers/Fleet page
├── how-it-works.html          # How It Works guide
├── book.html                  # Booking page
├── vehicles.html              # Vehicles catalog
├── test.html                  # Testing page
│
├── js/
│   └── main.js               # Main JavaScript logic
│
├── Styles/
│   └── main.css              # Main stylesheet
│
├── assets/                    # Images and media
│   ├── logo.png
│   ├── backg.jpeg
│   ├── BatLogo.png
│   ├── 5-ton-truck.jpg
│   ├── Bakkie.jpeg
│   ├── flatbed.jpg
│   ├── refrigirated.png
│   ├── tanker.jpg
│   └── ...
│
├── config.js                 # Supabase configuration
├── supabase-client.js        # Supabase client initialization
├── database.js               # Database operations module
│
└── SSH Keys (for deployment)
    ├── ndafaenongomwatile@gmail.com
    └── ndafaenongomwatile@gmail.com.pub
```

## Technology Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid layouts
- **JavaScript (ES6+)**: Core functionality and interactivity
- **Font Awesome**: Icon library (v6.4.0)
- **Google Fonts**: Inter font family

### Backend & Database
- **Supabase**: Backend-as-a-Service for real-time database
- **PostgreSQL**: Database engine (via Supabase)
- **Authentication**: JWT-based token authentication

## Key Pages

### 1. **index.html** - Homepage
- Hero section with brand introduction
- Feature highlights and statistics
- Call-to-action sections
- Navigation to other pages

### 2. **about.html** - About Us
- Company background and mission
- Team information
- Company values and achievements

### 3. **book.html** - Booking System
- Booking form with the following fields:
  - Pickup location
  - Delivery location
  - Customer name
  - Contact information
  - Vehicle type selection
  - Date and time scheduling
- Real-time form validation
- Integration with Supabase database

### 4. **vehicles.html** - Vehicle Fleet
- Catalog of available vehicles
- Vehicle specifications and images
- Pricing information
- Vehicle availability

### 5. **drivers.html** - Fleet Management
- Driver profiles and information
- Fleet statistics
- Service areas

### 6. **how-it-works.html** - Guide
- Step-by-step booking process
- FAQ section
- Service information

### 7. **contact.html** - Contact Page
- Contact form
- Business information
- Location and contact details

### 8. **test.html** - Testing Page
- Development and testing utilities
- Connection diagnostics

## JavaScript Modules

### **main.js** - Core Functionality
```javascript
// Mobile menu toggle
// Navigation active link highlighting
// Scroll animations with Intersection Observer
// Parallax effects
// Smooth scrolling
// Animation persistence using localStorage
```

### **supabase-client.js** - Database Client
```javascript
// Supabase client initialization
// Connection testing
// Error handling with specific troubleshooting
```

### **database.js** - Database Operations
```javascript
// saveBooking() - Store booking data in Supabase
// getAllBookings() - Retrieve all bookings
// Data validation and error handling
```

### **config.js** - Configuration
```javascript
// Supabase URL and API key configuration
// Environment-specific settings
```

## Database Schema

### Bookings Table
The platform stores booking data in a `bookings` table with the following key fields:
- `pickup_location` (required): Starting point for transport
- `delivery_location` (required): Destination point
- `customer_name` (required): Customer's full name
- `created_at`: Timestamp of booking creation
- Additional fields for contact info, vehicle type, etc.

**Required Field Validation**: The system validates that all required fields are present before saving to prevent incomplete bookings.

## Styling & Design

### Color Scheme
- **Primary Blue**: `#0056B3` (used as primary accent)
- **Green Primary**: `#00A859` (sustainability theme)
- **Orange Accent**: `#FF6B35` (highlights)
- **Background**: White with subtle gradients

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Animations
- **Gradient Shift**: 15s ease-in-out infinite animation for background gradients
- **Fade In Effects**: Elements animate into view on scroll
- **Parallax Scrolling**: Hero section background moves at different speed than content
- **Mobile Menu**: Smooth toggle animation for navigation

## Getting Started

### Installation
1. Clone the repository or download the project files
2. Ensure all files are in the correct directory structure
3. No build process required - it's a client-side application

### Running Locally
1. Open `index.html` in a web browser
2. Or use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
3. Navigate to `http://localhost:8000`

### Testing Database Connection
1. Open browser console (F12)
2. Navigate to `test.html` or check console for connection messages
3. The system will automatically test the Supabase connection
4. Connection status will appear in the browser console

## Supabase Setup

### Prerequisites
1. Supabase account (https://supabase.com)
2. Project created in Supabase

### Configuration Steps
1. Update `config.js` with your Supabase credentials:
   ```javascript
   export const SUPABASE_CONFIG = {
       URL: 'your-supabase-url',
       ANON_KEY: 'your-anon-key'
   };
   ```

2. Create the `bookings` table in Supabase with columns:
   - `id` (UUID, auto-generated)
   - `pickup_location` (text)
   - `delivery_location` (text)
   - `customer_name` (text)
   - `created_at` (timestamp, default: now())
   - Other custom fields as needed

3. Enable Row Level Security (RLS) for the table

4. Create RLS policies to allow:
   - INSERT for authenticated users or public access
   - SELECT for retrieving booking data

## Troubleshooting

### Database Connection Issues

**Error: "Table 'bookings' does not exist"**
- Create the bookings table in Supabase dashboard
- Ensure the table name matches exactly (lowercase)

**Error: "RLS policy issue"**
- Check Row Level Security policies in Supabase
- Ensure policies allow INSERT and SELECT operations
- Add policy: `(role = 'authenticated')` or `(role = 'anon')`

**Error: "Authentication issue" or "JWT error"**
- Verify the ANON_KEY in config.js is correct
- Check that the key hasn't expired
- Regenerate keys in Supabase if needed

**Connection test in console**
- Open browser console and look for ✅ or ❌ icons
- Messages will indicate success or specific error

## Development Tips

### Mobile Menu Behavior
The mobile menu automatically toggles when clicking the hamburger icon and features:
- Smooth animations
- Backdrop blur effect
- Gradient border

### Animation Persistence
Animations are saved to localStorage to prevent re-triggering on page reload:
```javascript
localStorage.getItem('animatedIds')
```

### Active Navigation Links
The navigation automatically highlights the current page based on the URL pathname.

### Parallax Effect
The hero background has a parallax effect that moves slower than the page scroll:
```javascript
hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
```

## Performance Considerations

- Lazy loading of images for faster page load
- CSS animations use `transform` and `opacity` for smooth 60fps performance
- Supabase connection is tested asynchronously
- LocalStorage used for animation state persistence to reduce re-renders

## Security Notes

⚠️ **Important**: The Supabase ANON_KEY in `config.js` is currently exposed in the public code. For production:

1. Move API keys to environment variables
2. Use a backend proxy for sensitive operations
3. Implement proper Row Level Security (RLS) policies
4. Validate all data server-side, never trust client-side validation alone
5. Implement rate limiting to prevent abuse

## Deployment

### Recommended Hosting Platforms
- **Netlify**: Excellent for static sites with built-in CI/CD
- **Vercel**: Great performance and automatic deployments
- **GitHub Pages**: Free hosting for public projects
- **Firebase Hosting**: Google's hosting solution

### Basic Deployment Steps (Netlify)
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Deploy with one click
4. Configure environment variables in Netlify settings

### Environment Setup for Production
```bash
SUPABASE_URL=your-production-url
SUPABASE_ANON_KEY=your-production-key
```

## Maintenance

### Regular Tasks
- Monitor Supabase usage and quotas
- Check for broken links and images
- Update Font Awesome and other dependencies
- Review browser console for errors
- Backup database regularly

### Monitoring
- Check browser console for JavaScript errors
- Monitor Supabase dashboard for query performance
- Review booking data for anomalies
- Test responsive design on various devices

## Contact & Support

For issues, feature requests, or contributions:
- Review the documentation above
- Check Supabase documentation for database issues
- Test connection using the test.html page
- Check browser console for detailed error messages

## License

[Add appropriate license information]

## Version History

- **v1.0** (Current) - Initial launch with booking system, vehicle catalog, and Supabase integration

---

**Last Updated**: January 16, 2026
