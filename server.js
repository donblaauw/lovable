const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static game files from the games/ directory under /games
app.use('/games', express.static(path.join(__dirname, 'games')));

// Serve the public landing page
app.use(express.static(path.join(__dirname, 'public')));

// List all available games as JSON
app.get('/api/games', (req, res) => {
  const fs = require('fs');
  const gamesDir = path.join(__dirname, 'games');
  try {
    const entries = fs.readdirSync(gamesDir, { withFileTypes: true });
    const games = entries
      .filter((e) => e.isDirectory())
      .map((e) => ({
        name: e.name,
        url: `/games/${e.name}/index.html`,
      }));
    res.json(games);
  } catch {
    res.json([]);
  }
});

app.listen(PORT, () => {
  console.log(`Lovable game server running at http://localhost:${PORT}`);
});
