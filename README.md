# { KODEIA } – Webbplats (React + Vite + Express)

Det här projektet innehåller:
- Modern React-webbplats med SEO (React Router + react-helmet-async), service-sidor, premium-karusell (swipe på mobil + animationer)
- “Kontakta oss”-sida med formulär (validering + spam-skydd) + tack-sida
- Mobil hamburger-meny med slide-in
- Email-koppling via backend (Express + Nodemailer)
- React Bits-inspirerade komponenter (Floating Lines, Text Type, Count Up)

> Logo finns i `client/public/kodeia-logo.png`.

## 1) Förutsättningar
- Node.js 18+ (rekommenderat 20+)

## 2) Installera
```bash
npm install
```

## 3) Konfigurera email (SMTP)
Skapa `.env` i projektroten (du kan kopiera `.env.example`):

```bash
cp .env.example .env
```

Fyll i:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `TO_EMAIL` (vart meddelandet ska skickas)

## 4) Starta utveckling
```bash
npm run dev
```
- Frontend: http://localhost:5173
- Backend API: http://localhost:5174

## 5) Bygg & kör i produktion
```bash
npm run build
npm start
```

## 6) Spam-skydd (kort)
- Honeypot-fält (ska vara tomt)
- Minimum tid (t.ex. 3s) mellan att formuläret laddas och skickas
- Enkel IP-rate limit i minnet (kan bytas mot Redis vid behov)

## Struktur
- `client/` Vite + React + Tailwind
- `server/` Express API + Nodemailer
