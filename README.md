# NexGen Tutors — Tutoring Website Template

A production-ready website template for online tutoring businesses. Built with Next.js, Tailwind CSS, and Docker. Designed to convert parents into trial bookings via WhatsApp — no backend, no database, no complexity.

---

## Features

- **Animated particle hero** — interactive network background (tsParticles)
- **Programs page** — showcase your subjects with curriculum tags
- **Transparent pricing** — per-session pricing cards with per-minute cost callout
- **WhatsApp CTA** — click-to-chat with pre-filled message, no form friction
- **Curriculum badges** — NCEA, Cambridge, IB, CBSE, ICSE (customisable)
- **Mobile responsive** — hamburger nav, stacked layouts
- **Docker + Nginx** — deploy to any VPS in minutes

---

## Customise for your tutoring business

### 1. Branding
Find and replace `NexGen Tutors` across the codebase with your business name:
```bash
grep -rn "NexGen Tutors" app/ components/
```

### 2. WhatsApp number
In `app/contact/page.tsx`:
```ts
const waNumber = "640000000000"; // replace with your WhatsApp Business number (no + or spaces)
const waMessage = encodeURIComponent("Hi! I'm interested in a free trial...");
```

### 3. Phone number (homepage)
In `app/page.tsx`, update:
```tsx
<a href="tel:+640000000000">+64 00 000 0000</a>
```

### 4. Programs
Edit the `programs` array in `app/programs/page.tsx` — each item has:
```ts
{
  icon: "➕",
  name: "Your Subject",
  levels: "Year 1 – Year 8",
  desc: "Short description",
  highlights: ["Feature 1", "Feature 2", "Feature 3"],
}
```

### 5. Pricing
Edit the `plans` array in `app/pricing/page.tsx`:
```ts
{
  name: "Starter",
  price: "$30",
  period: "/ 45 min session",
  perMin: "just $0.67/min",
  ...
}
```

### 6. Curriculum badges
Search for `NCEA / Cambridge / IB / CBSE / ICSE` in `app/` and update to match your target markets.

### 7. SEO metadata
In `app/layout.tsx`:
```ts
export const metadata = {
  title: "Your Business | Online Tutoring",
  description: "Your description here",
};
```

---

## Tech stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | tsParticles |
| Deployment | Docker + Nginx |
| Hosting | Any VPS (tested on Oracle Cloud) |

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to a VPS (Docker)

### 1. Clone and configure
```bash
git clone https://github.com/kmittal8/nexgen-tutors.git
cd nexgen-tutors
# edit your branding, WhatsApp number, pricing
```

### 2. Add SSH key to your server config
```bash
# ~/.ssh/config
Host myserver
    HostName YOUR_SERVER_IP
    User opc   # or ubuntu, ec2-user etc
    IdentityFile ~/.ssh/your_key
```

### 3. Copy files to server
```bash
rsync -az --exclude='node_modules' --exclude='.next' --exclude='.git' \
  -e "ssh -i ~/.ssh/your_key" \
  . user@YOUR_SERVER_IP:~/tutors/
```

### 4. Build and run
```bash
ssh user@YOUR_SERVER_IP
cd ~/tutors
sudo docker compose up -d --build
```

Site runs on port 80. Add SSL with Certbot:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

### Re-deploy after changes
```bash
rsync -az --exclude='node_modules' --exclude='.next' --exclude='.git' \
  -e "ssh -i ~/.ssh/your_key" . user@YOUR_SERVER_IP:~/tutors/ && \
ssh user@YOUR_SERVER_IP "cd ~/tutors && sudo docker compose up -d --build"
```

---

## Project structure

```
├── app/
│   ├── layout.tsx          # Nav, footer, metadata
│   ├── page.tsx            # Homepage (hero, programs overview, CTA)
│   ├── programs/page.tsx   # All programs listing
│   ├── pricing/page.tsx    # Pricing cards (NZD per session)
│   ├── contact/page.tsx    # WhatsApp CTA page
│   └── api/contact/        # (unused — replaced by WhatsApp)
├── components/
│   ├── Nav.tsx             # Sticky nav with mobile hamburger
│   └── ParticlesBg.tsx     # Animated particle network hero bg
├── Dockerfile
├── docker-compose.yml      # Next.js + Nginx services
└── nginx.conf              # Reverse proxy config
```

---

## Adapting for different markets

| Market | Change |
|--------|--------|
| Australia | Update currency to AUD, replace NCEA with ATAR/VCE |
| UK | Replace NCEA with GCSE/A-Level, currency GBP |
| India | Add INR pricing toggle (see git history), add UPI payment note |
| US/Canada | Replace with SAT/AP curriculum tags, USD |

---

## License

MIT — free to use, modify, and deploy for your own tutoring business.
