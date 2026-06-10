# Landing page artisans — Alexandre Ziba

Landing page React + Vite + Tailwind pour présenter une offre de système d'acquisition pour artisans.

## 1. Lancer le projet en local

Ouvre le dossier dans VS Code, puis dans le terminal :

```bash
npm install
npm run dev
```

Puis ouvre l'adresse affichée par Vite, souvent :

```bash
http://localhost:5173
```

## 2. À modifier avant publication

Dans `src/App.jsx`, remplace :

```js
const PHONE_NUMBER = "33600000000";
const EMAIL = "alexandre.ziba.pro@gmail.com";
const CALENDLY_LINK = "#contact";
```

Par tes vraies informations.

Attention pour WhatsApp : le numéro doit être au format international sans `+`.

Exemple :

```js
const PHONE_NUMBER = "33612345678";
```

## 3. Publier sur GitHub Pages

### Étape A — Créer un repo GitHub

Crée un repository sur GitHub, par exemple :

```txt
landing-artisans
```

### Étape B — Envoyer le projet sur GitHub

Dans le terminal VS Code :

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/landing-artisans.git
git push -u origin main
```

Remplace `TON-USERNAME` par ton pseudo GitHub.

### Étape C — Déployer

Dans le terminal :

```bash
npm run deploy
```

### Étape D — Activer GitHub Pages

Sur GitHub :

1. Va dans ton repo
2. Settings
3. Pages
4. Source : `Deploy from a branch`
5. Branch : `gh-pages`
6. Folder : `/root`
7. Save

Ton site sera ensuite disponible à une adresse du type :

```txt
https://TON-USERNAME.github.io/landing-artisans/
```

## 4. Conseil important

Ne passe pas 2 semaines à modifier le design.

Objectif :

1. Mettre ton vrai mail
2. Mettre ton vrai WhatsApp
3. Publier sur GitHub Pages
4. Envoyer tes premiers mails de prospection

