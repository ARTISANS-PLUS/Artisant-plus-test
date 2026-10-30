# Artisans+ 🛠️ — MVP de mise en relation avec des artisans

Application web (MVP / prototype fonctionnel) permettant de mettre en relation des **clients** avec des **artisans géolocalisés** (menuisier, électricien, plombier, frigoriste, maçon, etc.) au Togo, Bénin, Côte d'Ivoire, Sénégal, Burkina Faso, Mali et Rwanda.

⚠️ **Important — ceci est un MVP frontend de démonstration.** Il n'y a pas de vrai serveur/backend : les données (comptes, tâches, portefeuilles) sont stockées dans le `localStorage` du navigateur, et les paiements (abonnements, mobile money) sont **simulés**. Voir la section « Passer en production » plus bas pour brancher un vrai backend et de vraies clés API (FedaPay, CinetPay…).

## 🚀 Démo rapide

Ouvrez simplement `index.html` dans un navigateur, ou déployez-le (voir plus bas). Comptes de test déjà créés :

| Rôle | Email | Mot de passe |
|---|---|---|
| Administrateur | `admin@artisansplus.africa` | `Admin@2026` |
| Client (démo) | `client.demo@artisansplus.africa` | `demo1234` |
| Artisan (démo, menuisier à Lomé) | `kossi.menuisier@demo.tg` | `demo1234` |
| Artisan (démo, frigoriste à Abidjan) | `yao.frigoriste@demo.ci` | `demo1234` |

Vous pouvez aussi créer de nouveaux comptes client/artisan directement depuis l'application.

## ✅ Fonctionnalités incluses dans ce MVP

- **Trois profils** : Client, Artisan, Administrateur, avec authentification par email/mot de passe.
- **Inscription artisan** avec téléphone préfixé par l'indicatif du pays (7 pays), positionnement GPS de l'atelier/bureau, sélection des métiers exercés et prix minimum du service (frais de retrait inclus).
- **Plus de 70 métiers de l'artisanat** répertoriés, classés par catégorie (bâtiment, électricité/froid, mécanique, textile, artisanat d'art, beauté, services domestiques…).
- **Abonnements** : Client (essai 3 mois à 1 500 FCFA, puis annuel à 7 000 FCFA) et Artisan (essai 3 mois à 2 000 FCFA, puis annuel à 10 000 FCFA).
- **Recherche géolocalisée** : le client recherche un métier, sa position GPS est captée, et l'application classe les artisans disponibles du plus proche au plus loin (calcul de distance réel, formule de Haversine).
- **Cycle de vie complet d'une mission** : demande → acceptation par l'artisan → trajet suivi en temps réel sur une carte (Leaflet/OpenStreetMap) → bouton « Notifier mon arrivée » → confirmation client → paiement via portefeuille virtuel → clôture + notation par étoiles.
- **Portefeuille virtuel** avec recharge/retrait simulés via mobile money (Mixx by Yas/Moov, Orange Money, MTN Mobile Money, Wave, LemFi, SoliMi) et carte bancaire.
- **Tableau de bord administrateur** : statistiques (revenus abonnements, revenus commissions, répartition par pays), gestion des utilisateurs (suspension), suivi de toutes les tâches.
- **Fonctionnalités additionnelles pensées pour se différencier** : badge « artisan vérifié », système de parrainage, notifications in-app, bouton d'appel direct (`tel:`), historique complet, disponibilité activable/désactivable par l'artisan, commission plateforme transparente (10 % affichée sur chaque paiement).

## 💡 Idées pour aller plus loin (roadmap suggérée)

- Chat en temps réel client ↔ artisan (texte + photos du besoin).
- Vérification d'identité (KYC) avec upload de pièce d'identité et badge « vérifié » validé par un administrateur.
- Système d'urgence/SOS avec contact des secours ou d'un numéro de sécurité pendant une mission.
- Assurance ou garantie satisfaction sur certaines prestations.
- Multi-langue (français / anglais / langues locales) et mode hors-ligne (PWA installable, déjà préparé avec `manifest.json`).
- Application mobile native (React Native / Flutter) réutilisant la même API.
- Tarification dynamique selon l'urgence (mission « express » à prix majoré).
- Programme de fidélité pour les clients récurrents.

## 🏗️ Structure du projet

```
/
├── index.html          → L'application complète (HTML + CSS + JS en un seul fichier)
├── manifest.json        → Manifeste PWA (icône, nom, couleurs)
├── netlify.toml          → Configuration de déploiement Netlify
├── assets/
│   └── img/
│       └── logo.svg      → Logo vectoriel de la marque
└── README.md             → Ce fichier
```

`index.html` est **autonome** : tout le CSS et le JavaScript sont inclus dans le fichier (à l'exception des polices Google Fonts et de la librairie de cartographie Leaflet, chargées via CDN). Cela simplifie au maximum le déploiement.

## 📦 Déploiement sur GitHub Pages

1. Créez un nouveau dépôt GitHub (ex. `artisans-plus`).
2. Déposez tous les fichiers de ce projet à la racine du dépôt (`index.html` doit être à la racine).
3. Allez dans **Settings → Pages**.
4. Sous « Build and deployment », choisissez **Deploy from a branch**, branche `main`, dossier `/ (root)`.
5. Après quelques minutes, votre site sera disponible à `https://<votre-utilisateur>.github.io/artisans-plus/`.

## 🌐 Déploiement sur Netlify

**Option A — Glisser-déposer :**
1. Allez sur [app.netlify.com](https://app.netlify.com), section « Sites ».
2. Glissez-déposez le dossier du projet directement dans la zone de dépôt.
3. Netlify génère immédiatement une URL de type `https://nom-aleatoire.netlify.app`.

**Option B — Depuis GitHub :**
1. Poussez le projet sur GitHub (voir ci-dessus).
2. Sur Netlify : **Add new site → Import an existing project → GitHub**, sélectionnez le dépôt.
3. Build command : laissez vide. Publish directory : `.` (déjà configuré dans `netlify.toml`).
4. Cliquez sur **Deploy site**.

## 🔐 Passer en production (brancher un vrai backend et de vraies clés API)

Ce MVP est volontairement 100 % frontend pour permettre un test immédiat sans serveur. Pour une vraie mise en production, il faudra :

1. **Un backend** (Node.js/Express, Django, Laravel…) avec une vraie base de données (PostgreSQL/MongoDB) pour remplacer le `localStorage` — recherchez `// TODO API` dans `index.html` pour repérer les points d'intégration (inscription, paiements, mise à jour de position GPS en temps réel via WebSocket).
2. **Un agrégateur de paiement mobile money**, par exemple [FedaPay](https://fedapay.com) (couvre Togo, Bénin, Côte d'Ivoire, Sénégal, etc.) ou CinetPay, avec vos clés API secrètes côté serveur (jamais côté client).
3. **Notifications push réelles** (Firebase Cloud Messaging) pour prévenir un artisan d'une nouvelle demande même application fermée.
4. **Suivi GPS en temps réel** via WebSocket ou Firebase Realtime Database, et un vrai calcul d'itinéraire (OSRM, Mapbox Directions, Google Directions API) pour remplacer la simulation linéaire actuelle.
5. **Modération et vérification d'identité** des artisans par un administrateur avant l'attribution du badge « vérifié ».

## ⚖️ Note

Toutes les données de démonstration (artisans, clients, montants) sont fictives. Aucun paiement réel n'est traité par cette version.
