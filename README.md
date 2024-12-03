# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring a dark theme and smooth animations.

## 🚀 Features

- **Responsive Design**: Mobile-first approach ensuring perfect display across all devices
- **Dark Theme**: Sleek dark mode design with yellow accent colors
- **Smooth Navigation**: Section-based navigation with smooth scrolling
- **Interactive UI**: 
  - Frosted glass effect in navigation
  - Animated section transitions
  - Active section highlighting
  - Mobile-friendly navigation menu
- **Contact Form**: 
  - Rate-limited form submissions
  - Spam prevention with honeypot
  - Form validation and error handling
  - Success/error notifications
- **Performance Optimized**:
  - Intersection Observer for efficient section tracking
  - Optimized event handling
  - Minimal re-renders

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/)
  - Custom animations
- **UI Components**:
  - [Lucide React](https://lucide.dev/) for icons
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [Framer Motion](https://www.framer.com/motion/) for animations
- **Form Handling**: 
  - [GetForm](https://getform.io/) for form submissions
  - Client-side validation
- **Development Tools**:
  - TypeScript for type safety
  - ESLint for code quality
  - Prettier for code formatting

## 📦 Project Structure

```
portfolio-web/
├── app/                # Next.js app directory
├── components/         # React components
│   ├── home/          # Page-specific components
│   └── layout/        # Shared layout components
├── public/            # Static assets
└── styles/           # Global styles
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/zibrasismail/personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```env
   NEXT_PUBLIC_GET_FORM_KEY=your_getform_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Design Features

- Minimalist, modern interface
- Dark theme with yellow accents
- Frosted glass effects
- Smooth transitions and animations
- Circular design elements
- Responsive typography

## 🔒 Security Features

- Form submission rate limiting
- Honeypot fields for spam prevention
- No sensitive data stored client-side
- Secure form handling

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Adaptive navigation menu

## 🔧 Future Improvements

- [ ] Enhanced SEO optimization
- [ ] Image lazy loading
- [ ] Expanded animation effects
- [ ] Accessibility improvements
- [ ] Performance monitoring
- [ ] Internationalization support

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
