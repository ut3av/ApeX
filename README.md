# ApeX — Student Technology Community
### LNCT University, Bhopal (MCA Building)

A premium, minimalist digital identity card and connection portal built for **ApeX**, styled with an **Apple Liquid Glass × Minimal Developer Community** aesthetic.

---

## ⚡ Key Highlights
- **Dual Founder Profiles**: High-resolution studio portraits for **Ut3av** and **Co-Lead** with role badges, taglines, and direct channels (LinkedIn, GitHub, Discord).
- **100% Mobile Optimized**: Designed specifically for the 390×844 iPhone viewport for students scanning QR codes during LNCT campus interactions.
- **Apple Liquid Glass UI**: Multi-layered `backdrop-filter: blur(28px)`, subtle specular borders, and frosted glass refractions.
- **Fluid Mouse & Touch Interactions**: Real-time cursor spotlight and specular reflection tracking on cards, with smooth spring-damped background lighting.
- **Zero Heavy Dependencies**: Lightweight React 19 + Vite + Tailwind CSS + Lucide Icons.

---

## 🚀 Quick Deployment Options

### Option 1: Vercel (1-Click)
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository. Framework preset will automatically detect **Vite**.
4. Click **Deploy**.

### Option 2: Netlify (Drag & Drop or Git)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### Option 3: GitHub Pages
The `vite.config.ts` has `base: './'`, which allows static serving from any root or sub-directory (such as `username.github.io/apex`).
1. Run `npm run build`.
2. Push the contents of the `dist/` directory to your `gh-pages` branch.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build
```

---

## ⚙️ Configuration
All profile details, photo paths, and social links are centralized in:
[`src/config/socials.ts`](./src/config/socials.ts)

You can easily replace usernames, avatar photos, and community URLs at any time.

---

Made with lot many lob from **Ut3av** ❤️  
© 2026 ApeX • LNCT University, Bhopal • MCA Building
