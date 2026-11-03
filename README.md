# 🚀 Developer Portfolio Website

A sleek, responsive, modern portfolio website built for Full-Stack Software Engineers. Features a dark-mode glassmorphic theme with glowing ambient accents, interactive project filtering, career timeline, tech stack categories, and a contact form.

---

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand icons
- **Fonts**: Plus Jakarta Sans & JetBrains Mono

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and SVG icons
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx      # Glassmorphic header with scroll spy & mobile menu
│   │   ├── Hero.jsx        # Animated roles, introduction, CTA buttons & code card
│   │   ├── Stats.jsx       # Numerical impact metrics
│   │   ├── About.jsx       # Bio, quick facts & engineering pillars
│   │   ├── Skills.jsx      # Categorized skills with proficiency badges & filters
│   │   ├── Projects.jsx    # Filterable project showcase with metrics & links
│   │   ├── Experience.jsx  # Career timeline & achievements
│   │   ├── FAQ.jsx         # Collapsible accordion for client/recruiter FAQs
│   │   ├── Contact.jsx     # Interactive contact form & 1-click email copy
│   │   ├── Footer.jsx      # Back-to-top button, links & copyright
│   │   └── SocialIcons.jsx # Standalone SVG icons (GitHub, LinkedIn, Twitter/X)
│   ├── data/
│   │   └── portfolioData.js # ⭐️ Centralized file to customize all your details!
│   ├── App.jsx             # Main layout composition
│   ├── index.css           # Tailwind directives & glassmorphic styling
│   └── main.jsx            # React root mount
├── index.html              # HTML shell with Google Fonts & metadata
├── tailwind.config.js      # Color tokens and animation keyframes
└── package.json            # Scripts and dependencies
```

---

## 🎨 How to Customize With Your Own Information

All your personal details, project descriptions, skills, and links are kept in one single location:

👉 **[`src/data/portfolioData.js`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/portfolio/src/data/portfolioData.js)**

Simply edit that file to replace:
- **`personal`**: Your name, titles, bio, location, email, and social links.
- **`stats`**: Your years of experience, completed projects count, and metrics.
- **`skillCategories`**: Add or remove technologies, proficiency levels, and categories.
- **`projects`**: Add your own project titles, tags, live URLs, GitHub repositories, and preview images.
- **`experiences`**: Add your past job titles, companies, years, and achievements.
- **`faqs`**: Customize questions and answers.

---

## 🛠️ Development & Deployment

### Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Create Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### Deploy in 1 Click
- **Vercel**: Import the project folder or GitHub repository into Vercel (preset: `Vite`).
- **Netlify**: Connect repository or drag-and-drop the `dist` folder.
- **GitHub Pages**: Deploy via `gh-pages` or GitHub Actions.
