# Al Quadrifoglio Blu - Menu Digitale

Menu digitale mobile-first per Al Quadrifoglio Blu, Francavilla di Sicilia.

## Stack

- Next.js 15 + TypeScript
- Tailwind CSS 3 + autoprefixer
- Font: Cormorant Garamond + Jost (Google Fonts)

## Setup locale

```bash
npm install
npm run dev
```

## Deploy su Vercel

1. Crea repo su GitHub: `al3xf3r/alquadrifoglioblu-manji`
2. Push di tutti i file
3. Importa su Vercel → dominio: `alquadrifoglioblu-manji.vercel.app`

## Immagini categorie

Inserire nella cartella `public/` i seguenti file `.webp`:

| File | Categoria |
|------|-----------|
| `pizze.webp` | Pizze Tradizionali |
| `bianche.webp` | Pizze Bianche |
| `speciali.webp` | Pizze Speciali |
| `pan.webp` | Panpizza e Panini |
| `insalata.webp` | Insalatone |
| `antip.webp` | Antipasti e Stuzzicheria |
| `piatti.webp` | Primi, Secondi e Contorni |
| `bevande.webp` | Bevande |

## Logo e Favicon

- `public/logo.png` → logo quadrifoglio (già fornito)
- `public/og-quadrifoglio.jpg` → Open Graph image (già fornita)
- `public/favicon.ico` → favicon (copia `logo.png` rinominata o .ico dedicata)

## Struttura

```
src/
  app/
    layout.tsx        # metadata + Google Fonts
    page.tsx          # entry point
    globals.css       # reset + scrollbar
  components/
    MenuApp.tsx       # orchestratore principale
    IntroLoader.tsx   # splash screen prima apertura (sessionStorage)
    TopBar.tsx        # header sticky con logo, back, search, lang toggle
    HomeView.tsx      # griglia categorie 2x2
    CategoryView.tsx  # lista piatti per categoria + supplementi
    SearchOverlay.tsx # ricerca globale con highlight
    Footer.tsx        # footer blu con orari, social, CTA
    FadeImage.tsx     # img con fade-in su onLoad
  data/
    menu.ts           # tutti i dati tipizzati
```
