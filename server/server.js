const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Middleware pour vérifier l'heure de la requête
const checkWorkingHours = (req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
  const hour = date.getHours();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
    next(); // Continuer vers la prochaine fonction de middleware ou l'itinéraire
  } else {
    res.send('L\'application n\'est disponible que pendant les heures de travail (du lundi au vendredi, de 9 à 17 heures).');
  }
};

// Middleware pour vérifier les heures de travail pour toutes les routes
app.use(checkWorkingHours);

// Servir les fichiers statiques de l'application React
app.use(express.static(path.join(__dirname, 'client/build')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Écouter le port spécifié
app.listen(port, () => {
  console.log(`L'application est disponible sur http://localhost:${port}`);
});
