# PROTO7YPE Events - Underground Sound Sessions

🎵 **Work hard, play hard rave energy at PROTO7YPE** 🎵

A Next.js 14+ website for your underground sound sessions in San Francisco, built for people who move with the music.

## 🔥 Features

- **Underground Aesthetic**: Dark theme with strobing orange accents and rave energy
- **Tito Integration**: Secure ticketing with tiered pricing ($30/$40/$50)
- **Secret Location**: Address revealed only after ticket purchase
- **Responsive Design**: Looks badass on all devices
- **Electronic Music Focus**: Trap • House • Bass • Techno vibes
- **Component Architecture**: Modular and extensible for future events

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local .env.local.example
   # Edit .env.local with your Tito account details
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 🎛️ Configuration

### Environment Variables (.env.local)

```env
NEXT_PUBLIC_SITE_URL="https://proto7ype.events"
NEXT_PUBLIC_TITO_ACCOUNT_SLUG="proto7ype"
NEXT_PUBLIC_TITO_EVENT_SLUG_CURRENT="proto7ype/sound-session-jan-2025"
```

### Event Configuration (config/events.ts)

Update the `currentEvent` object to change:
- Event title and tagline
- Date and time
- Music genres
- Features and pricing
- Gallery images

## 🎤 Tito Setup Required

1. **Create Tito Account**: Sign up at tito.io
2. **Connect Stripe**: In Tito dashboard, connect your Stripe account
3. **Create Event**: Set up your sound session with 3 ticket tiers:
   - Early Bird GA: $30 (quantity: 100)
   - Regular GA: $40 (quantity: 100)  
   - Late GA: $50 (quantity: remaining capacity)
4. **Configure Location**: Add PROTO7YPE address in Tito (hidden until purchase)
5. **Email Templates**: Customize confirmation emails with venue details

## 📁 Project Structure

```
proto7ype-events/
├─ app/
│  ├─ layout.tsx          # Global layout with header/footer
│  ├─ page.tsx            # Landing page
│  ├─ tickets/page.tsx    # Ticket purchase page
│  └─ globals.css         # Dark rave aesthetic
├─ components/
│  ├─ HeroSection.tsx     # Landing hero with pure energy
│  ├─ PromoGallery.tsx    # Photo grid for past events
│  └─ TitoWidget.tsx      # Ticketing integration
├─ config/
│  └─ events.ts           # Event metadata system
└─ public/
   ├─ tito.css            # Tito widget theming
   └─ images/             # Event photos
```

## 🎨 Styling

- **Dark Theme**: Deep black (#050509) with orange accents (#f97316)
- **Rave Effects**: Pulsing borders, strobing text, gradient overlays
- **Typography**: System fonts with uppercase tracking for energy
- **Responsive**: Mobile-first design with hover effects

## 🎫 Payment Flow

1. **User Experience**: 
   - Browse event on landing page
   - Click "Get Your Tickets Now" → /request-arcade
   - Select ticket tier → Tito checkout
   - Complete payment via Stripe

2. **Post-Purchase**:
   - QR ticket emailed immediately
   - Venue address revealed in email
   - Check-in via QR scan at door

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Connect to Vercel
npx vercel

# Set environment variables in Vercel dashboard
# Deploy
npx vercel --prod
```

### Custom Domain
- Point DNS to Vercel
- Update NEXT_PUBLIC_SITE_URL in environment variables

## 🎵 Content Guidelines

**Copy Style**: Direct, energetic, underground culture
**Imagery**: Crowd shots, DJ setups, lighting, sound equipment
**Tone**: "Built for people who move with the music"

## 🛠️ Customization

- **New Events**: Update `config/events.ts`
- **Styling**: Modify `app/globals.css` and `public/tito.css` 
- **Components**: Add new sections in `components/`
- **Pages**: Create new routes in `app/`

## ⚡ Underground Culture

This is electronic music for people who understand that rhythm is more than beats. PROTO7YPE is the experimental side of Frontier Makerspace where sound, hardware, and energy get prototyped in real time.

**Respect the room. Respect the people. Move with the music.**

---

Built with ❤️ for the underground electronic music scene in San Francisco.
