# Strength Log

A personal strength-training log. Records what you lifted, on which machine, for how many
reps — and tells you when you've earned a heavier weight.

Runs entirely in the browser. No account, no server, no data leaving your phone.

## Put it online (about five minutes)

1. **Create the repo.** On github.com, click **+ → New repository**. Name it `gym-log`.
   Leave it empty — no README, no .gitignore.

2. **Upload these files.** On the new repo's page, click **uploading an existing file**,
   then drag in everything from this folder:

   ```
   index.html
   manifest.webmanifest
   sw.js
   icon-192.png
   icon-512.png
   icon-maskable-192.png
   icon-maskable-512.png
   ```

   Click **Commit changes**. `index.html` must sit at the top level of the repo,
   not inside a subfolder.

3. **Turn on Pages.** Go to **Settings → Pages**. Under *Build and deployment*,
   set **Source** to `Deploy from a branch`, **Branch** to `main` and folder to `/ (root)`.
   Click **Save**.

4. **Wait about a minute.** Refresh the Settings → Pages screen until it shows your live
   address: `https://<your-username>.github.io/gym-log/`

5. **Add it to your phone.** Open that address in Chrome on your phone, then
   **⋮ → Add to Home screen**. It installs as a full-screen app with its own icon.

## Where your data lives

In your phone's browser storage, on that device only. It is not uploaded anywhere and
it is not in the repo.

That has one consequence worth knowing: **clearing your browser data will erase your log.**
Use **Exercises → Export backup** every few weeks and keep the JSON file somewhere safe.
**Restore backup** on the same screen reads it back, and is also how you move your history
to a new phone.

Nothing in this repo is private, so the repo can be public without exposing your training.

## Changing the app later

Everything is in `index.html` — markup, styles, and logic in one file, no build step.
Edit it, upload the new version, and increment `CACHE` in `sw.js` from `strength-log-v1`
to `strength-log-v2`. Skip that last part and phones will keep showing the old version
from their offline cache.
