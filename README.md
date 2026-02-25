# lovable

Games and tools made with [Lovable](https://lovable.dev), served locally to avoid CORS issues.

## Quick start

```bash
# Install dependencies
npm install

# Start the server
npm start
```

Then open **http://localhost:3000** in your browser to see the games gallery.

## Adding a game

1. Export / download your Lovable game as a static site (HTML + assets).
2. Place all the files in a new sub-folder inside `games/`:

   ```
   games/
   └── my-cool-game/
       ├── index.html
       └── assets/
   ```

3. Refresh the browser — the game will appear automatically in the gallery.

## Why local?

Lovable games often load external resources. When opened directly from the
filesystem (`file://`) or from a different origin, browsers block those
requests with a CORS error. Running this local server ensures every asset is
served from the **same origin** (`http://localhost:3000`), so no CORS errors
occur.

## Development

Use `npm run dev` to start the server with **nodemon** so it restarts
automatically whenever you change `server.js`.

## Project structure

```
.
├── games/          # Put your exported Lovable game folders here
├── public/
│   └── index.html  # Game gallery landing page
├── server.js       # Express server
└── package.json
```
