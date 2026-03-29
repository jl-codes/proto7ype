# PROTO7YPE — Open-Source Arcade Game Studio

🕹️ **Indie arcade games, built in the open** 🕹️

A Next.js 16 site for PROTO7YPE, an open-source arcade game studio and collective. Original titles, community mods, and a free engine — built by players, for players.

## 🔥 Features

- **Arcade-Rave Aesthetic**: Dark theme with pink neon, glitch effects, and grid backgrounds
- **Playable Games**: Embedded browser arcade via iframe (`/games`)
- **Request an Arcade**: Lead-gen form for custom cabinet installations (`/request-arcade`)
- **Learn — Vibe XR 101**: Course page for the AI-native game & XR development series (`/learn`)
- **Responsive Design**: Mobile-first, looks great on all devices
- **Open Source**: All games and this site are free and open-source

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
proto7ype/
├─ app/
│  ├─ layout.tsx              # Global layout with header/footer
│  ├─ page.tsx                # Landing page (hero, video, CTAs)
│  ├─ globals.css             # Rave aesthetic, glitch effects, utilities
│  ├─ games/
│  │  ├─ page.tsx             # Games page (metadata)
│  │  └─ ArcadeEmbed.tsx      # Full-viewport arcade iframe
│  ├─ request-arcade/
│  │  ├─ page.tsx             # Request an Arcade page
│  │  └─ RequestArcadeForm.tsx # Contact form (Formspree)
│  └─ learn/
│     └─ page.tsx             # Vibe XR 101 course page
├─ components/
│  ├─ HeaderNav.tsx           # Fixed header navigation
│  ├─ HeroSection.tsx         # Landing hero with glitch title & genre chips
│  └─ VideoSection.tsx        # Gameplay footage & studio pillars
└─ public/
   ├─ arcade/                 # Static arcade build (git submodule)
   └─ images/                 # Logos, promo video, course art
```

## 🎨 Styling

- **Dark Theme**: Deep black (#050509) with pink neon (#ec4899) accents
- **Rave Effects**: Glitch text, pulsing borders, strobing animations, grid background
- **Typography**: Audiowide (Google Font) with uppercase tracking
- **Responsive**: Mobile-first with Tailwind CSS v4

## 🚀 Deployment

### Vercel (Recommended)

```bash
npx vercel --prod
```

### Custom Domain
- Point DNS to Vercel
- Site lives at [proto7ype.events](https://proto7ype.events)

## 🛠️ Customization

- **Styling**: Modify `app/globals.css`
- **Components**: Add new sections in `components/`
- **Pages**: Create new routes in `app/`
- **Arcade Games**: Update the `public/arcade/` submodule

## 🤝 Contributing

All PROTO7YPE games are free and open-source. Contributions welcome!

- **This site**: [github.com/jl-codes/proto7ype](https://github.com/jl-codes/proto7ype)
- **Arcade games**: [github.com/Frontier-Makerspace/proto7ype-arcade](https://github.com/Frontier-Makerspace/proto7ype-arcade)

Fork it. Mod it. Play it. Ship it.

---

Built with ❤️ by the PROTO7YPE collective in San Francisco.
