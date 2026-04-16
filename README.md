# Híres Tudósok Enciklopédiája

Egy modern, responsív weboldal a világ legkiválóbb tudósairól és fölfedezéseiről.

## 📋 Tartalom

- **Tudósok** - Böngéssz a híres tudósok között, szűrj név, szakterület vagy ország alapján
- **Tudományos ismeretterjesztés** - Nézd meg vagy töltsd le a tudományos PDF dokumentumokat
- **Részletes profil** - Ismerd meg a tudósok felfedezéseit és publikációit

## 🎨 Dizájn Jellemzők

- **Modern UI**: Sötét téma, glassmorphism hatások, sima animációk
- **Teljes responsivitás**: Optimalizálva mobilon, tableten és asztali számítógépen
- **PDF Viewer**: Beágyazott PDF néző folytonos görgetéssel, nagyítással és teljes képernyős móddal
- **Interaktív keresés**: Valós idejű szűrés és rendezés

## 📱 Responsive Design

- **Mobil (0-480px)**: Kompakt elrendezés, függőleges stack
- **Tablet (481-1024px)**: 2 oszlopos grid, optimalizált nyomások
- **Asztali (1025px+)**: Teljes 3+ oszlopos grid, párhuzamos PDF nézegető

## 🚀 GitHub Pages-re való feltöltés

### 1. Git Repository Létrehozása

```bash
# Inicializáld a git repositoryt
git init

# Adj hozzá minden fájlt
git add .

# Commit az első verzióval
git commit -m "Initial commit: Modern scientist encyclopedia website"
```

### 2. GitHub Pages Beállítása

1. A GitHub-on hozz létre egy új repository-t: `<username>.github.io`
2. vagy egy meglévő repository-hoz a Settings → Pages alatt válaszd a `main` brancht
3. A mappa lehet a root vagy a `/docs` mappa

### 3. Feltöltés GitHub-ra

```bash
git remote add origin https://github.com/<username>/<repository>.git
git branch -M main
git push -u origin main
```

Az oldal 1-2 perc múlva elérhető lesz az alábbi címen:
- `https://<username>.github.io` (ha `<username>.github.io` a repository neve)
- `https://<username>.github.io/<repository>` (ha más a repository neve)

## 📝 Fájl Struktúra

```
├── index.html          # Tudósok listája
├── details.html        # Tudós részletes oldala
├── pdf.html           # PDF dokumentumok nézegető
├── tudosok.js         # Tudósok adatok
├── pdfs.js            # PDF dokumentumok adatok
├── css/
│   └── style.css      # Modern, egységes CSS
├── uploads/           # Tudósok képei
├── pdf/               # PDF dokumentumok
├── favicon.svg        # Modern logó/ikon
└── background.jpg     # (Opcionális) Háttérkép

```

## 🎯 Háttérkép Hozzáadása (Opcionális)

Ha szeretnél egyedi háttérképet használni:

1. Helyezz el egy `background.jpg` fájlt az alkönyvtárban
2. Javasolt méret: 1920x1080px vagy nagyobb
3. Nyisd meg a `css/style.css` fájlt és kommenteld ki a sorokat:
   ```css
   /* background-image: url('../background.jpg'); */
   ```

## 🔧 Testreszabás

### Szín Séma Módosítása

A `css/style.css` fájlban módosítsd a CSS változókat:

```css
:root {
    --primary-color: #4f90ff;      /* Elsődleges szín */
    --secondary-color: #8b5cf6;    /* Másodlagos szín */
    --success-color: #10b981;      /* Sikeres állapot */
    --danger-color: #ef4444;       /* Hiba állapot */
    /* ... további szín változók ... */
}
```

### Betűtípus Módosítása

Módosítsd a `body` stílust a CSS-ben:
```css
font-family: 'A te betűtípusod', sans-serif;
```

## 🌐 Böngésző Kompatibilitás

- Chrome/Edge: 100%
- Firefox: 100%
- Safari: 100%
- Mobil böngészők: 100%

## 📊 Teljesítmény

- Nulla függőség: Csak natív HTML/CSS/JS
- Gyors betöltés: Sötét téma csökkenti az energiafogyasztást
- CDN támogatás: PDF.js az jsDelivr-ből töltődik

## 🔐 Adatvédelem

Az oldal teljesen statikus - nincsenek szerveroldalas feldolgozások.
Minden adat helyileg tárolódik a böngészőben (localStorage nem használt).

## 🤝 Közreműködés

Az adatok módosításához:
- `tudosok.js` - Tudósok adataira
- `pdfs.js` - PDF dokumentumok adataira

## 📄 Licenc

Szabad felhasználásra és módosításra.

---

**Készült** egy modern, nyitott forráskódú megoldás a tudományterjesztéshez.
