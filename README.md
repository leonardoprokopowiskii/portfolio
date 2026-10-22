# Leonardo Prokopowiski — Portfolio

Personal portfolio of **Leonardo Prokopowiski**, Full-Stack Developer focused on **React, TypeScript, Node.js, Python, Flask, and RESTful APIs**, based in Curitiba, Brazil.

Built with **React 18 + TypeScript + Vite** and **pure CSS Modules** (zero CSS frameworks).

---

## ✨ Features

- **Bilingual (PT-BR / EN):** Instant language toggle with `localStorage` persistence and browser language detection.
- **Pure CSS Architecture:** Design tokens (`tokens.css`), global keyframes (`animations.css`), and scoped CSS Modules (`*.module.css`).
- **Interactive UI:**
  - Animated 3-line hero headline & `developer.ts` Vesper code window
  - Infinite animated gradient tech marquee with custom SVGs
  - Mouse-tracking radial spotlight on project & stack cards
  - Scroll progress bar & IntersectionObserver reveal animations
- **Resume & Contact:**
  - Direct PDF resume download (`/Curriculo_Leonardo_Prokopowiski.pdf`)
  - Validated contact form supporting [Web3Forms](https://web3forms.com/) API with automatic `mailto:` fallback

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server (accessible on LAN as well)
npm run dev

# 3. Build for production
npm run build
```

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── layout/      # Navbar, ScrollProgress, Footer
│   ├── sections/    # Hero, Projects, Experience, Stack, Contact
│   └── ui/          # Button, Card, CodeWindow, TechMarquee
├── data/            # Typed data for projects, experience, and tech stack
├── hooks/           # Custom hooks (scroll progress, reveal observer, card spotlight)
├── i18n/            # PT/EN dictionaries and LanguageContext
├── services/        # Contact form submission service (Web3Forms + mailto fallback)
└── styles/          # CSS tokens, reset, and global animations
```
