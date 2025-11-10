# Setup e Deployment

Questa guida spiega come far partire il progetto in locale e come pubblicarlo online su GitHub Pages.

## Prerequisiti

- Node.js (versione 18 o superiore)
- npm o yarn
- Un account GitHub

## Installazione

1. Clona il repository:
```bash
git clone https://github.com/TommasoParodi/portfolio.git
cd portfolio
```

2. Installa le dipendenze:
```bash
npm install
```

## Sviluppo Locale

Per avviare il progetto in modalità sviluppo:

```bash
npm run dev
```

Il progetto sarà disponibile su `http://localhost:5173` (o un'altra porta se quella è occupata).

Vite abilita l'Hot Module Replacement (HMR), quindi le modifiche al codice si rifletteranno automaticamente nel browser.

## Build per Produzione

Per creare una build ottimizzata per la produzione:

```bash
npm run build
```

I file compilati saranno nella cartella `dist/`.

Per visualizzare in locale la build di produzione:

```bash
npm run preview
```

## Pubblicazione su GitHub Pages

### Primo Deploy

1. Assicurati che il repository sia configurato correttamente:
   - Il campo `homepage` in `package.json` deve puntare al tuo repository GitHub Pages
   - Esempio: `"homepage": "https://TommasoParodi.github.io/portfolio"`

2. Esegui il deploy:
```bash
npm run deploy
```

Questo comando:
- Esegue automaticamente `npm run build` (grazie allo script `predeploy`)
- Pubblica la cartella `dist/` sul branch `gh-pages` del repository

3. Abilita GitHub Pages nel repository:
   - Vai su Settings → Pages nel tuo repository GitHub
   - Seleziona il branch `gh-pages` come source
   - Salva

Il sito sarà disponibile su `https://TommasoParodi.github.io/portfolio` dopo qualche minuto.

### Deploy Successivi

Per aggiornare il sito online dopo aver fatto modifiche:

```bash
npm run deploy
```

## Struttura Scripts

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build di produzione
- `npm run lint` - Esegue il linter
- `npm run deploy` - Pubblica su GitHub Pages

## Note

- Il branch `gh-pages` viene creato automaticamente da `gh-pages` e contiene solo i file compilati
- Non committare la cartella `dist/` nel repository principale (è già nel `.gitignore`)
- Dopo ogni deploy, GitHub Pages può richiedere alcuni minuti per aggiornare il sito

