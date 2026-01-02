# 🚀 Commandes Git pour Publier EvoCore

## 📋 Étapes Complètes

### 1. Clone le Repo GitHub

```bash
# Clone le repo vide
git clone https://github.com/ali-staifi/Evocore-AGI.git
cd Evocore-AGI
```

### 2. Copie les Fichiers

```bash
# Copie tous les fichiers du dossier evocore-public vers le repo
# (Fais ça manuellement ou avec la commande ci-dessous)

# Sur Windows (PowerShell)
Copy-Item -Path "C:\Users\ro\Desktop\nouveau evocore\evocore-public\*" -Destination "." -Recurse

# Ou copie manuellement les fichiers :
# - README.md
# - LICENSE
# - PHILOSOPHY.md
# - package.json
# - .gitignore
# - core/
# - examples/
```

### 3. Vérifie les Fichiers

```bash
# Liste les fichiers
dir

# Tu devrais voir :
# - README.md
# - LICENSE
# - PHILOSOPHY.md
# - package.json
# - .gitignore
# - core/
# - examples/
# - MESSAGES-LANCEMENT.md (optionnel, peut rester local)
```

### 4. Ajoute Tout au Git

```bash
# Ajoute tous les fichiers
git add .

# Vérifie ce qui va être commité
git status
```

### 5. Commit Initial

```bash
# Commit avec un message clair
git commit -m "Initial commit: EvoCore v1.0 - Open source alternative to Google Agent Mode

- Added core architecture with BaseAgent
- Added EchoAgent example
- Added comprehensive documentation
- Added BUSL 1.1 license
- Added philosophy and vision
- Ready for community contributions"
```

### 6. Push vers GitHub

```bash
# Push vers la branche main
git push origin main

# Ou si c'est master :
git push origin master
```

---

## ✅ Vérification

Après le push, va sur :
**https://github.com/ali-staifi/Evocore-AGI**

Tu devrais voir :
- ✅ README.md affiché sur la page d'accueil
- ✅ Tous les fichiers et dossiers
- ✅ LICENSE visible
- ✅ Structure complète du projet

---

## 🎯 Prochaines Étapes Après Publication

### 1. Ajoute une Description sur GitHub

Sur la page du repo, clique "About" (⚙️) et ajoute :

**Description** :
```
Open source alternative to Google Agent Mode - Cybernetic multi-agent system
```

**Website** :
```
https://linkedin.com/in/evo-evocore-0b5105395
```

**Topics** (tags) :
```
ai, agents, multi-agent, cybernetics, open-source, agi, automation, intelligent-systems, google-alternative, machine-learning
```

### 2. Crée les Issues/Discussions

Active les Discussions :
- Settings → Features → Discussions → ✅

Crée quelques issues initiales :
- "Welcome! Introduce yourself"
- "Feature requests"
- "Bug reports"

### 3. Ajoute un README Badge

Le README a déjà les badges, ils s'afficheront automatiquement !

---

## 🔄 Pour les Mises à Jour Futures

```bash
# Modifie des fichiers
# ...

# Ajoute les changements
git add .

# Commit
git commit -m "Description des changements"

# Push
git push origin main
```

---

## 🆘 En Cas de Problème

### Erreur : "Permission denied"
```bash
# Configure ton identité Git
git config --global user.email "ali-staifi@hotmail.fr"
git config --global user.name "Ali Staifi"
```

### Erreur : "Branch diverged"
```bash
# Pull d'abord
git pull origin main --rebase

# Puis push
git push origin main
```

### Erreur : "Large files"
```bash
# Vérifie la taille des fichiers
git ls-files -s

# Supprime les gros fichiers du commit si nécessaire
```

---

## 📝 Checklist Finale

Avant de publier, vérifie :

- [ ] README.md est complet avec tes liens
- [ ] LICENSE contient ton nom
- [ ] package.json a les bonnes infos
- [ ] .gitignore exclut les fichiers privés
- [ ] Aucun fichier sensible (clés API, etc.)
- [ ] Le code fonctionne (teste `npm run example:echo`)
- [ ] Tous les liens sont corrects

---

**Prêt à publier ? Suis les étapes ci-dessus ! 🚀**
