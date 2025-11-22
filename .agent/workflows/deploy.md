---
description: Deploy the website to GitHub Pages
---

1.  **Ensure all changes are committed**:
    ```bash
    git add .
    git commit -m "Your commit message"
    ```

2.  **Run the deploy script**:
    ```bash
    npm run deploy
    ```
    This command will:
    - Build the project (`npm run build`).
    - Push the `dist` folder to the `gh-pages` branch on GitHub.

3.  **Visit your site**:
    - Your site should be live at `https://mohananup.github.io/anishmohanphotography/` (it may take a minute or two to update).
