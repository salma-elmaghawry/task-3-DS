# Pets App (Task 3)

Small static React app that lists pets and provides a simple form to add more. The project uses ESM React imports from `esm.sh` and runs without a bundler.

How to run

1. Open PowerShell in this folder (where `index.html` is located).
2. Run the simple static server:

```powershell
python -m http.server 8000
```

3. Open `http://localhost:8000` in your browser.

Notes
- The app uses `https://esm.sh` to load React and ReactDOM as modules. Ensure your machine can reach that CDN.
- No build step is required; files are plain ESM modules.
