# Push this project to GitHub

1. **Create a new repo on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `weather-fullstack`
   - Leave "Add a README", ".gitignore", and "License" **unchecked** (we already have them)
   - Click **Create repository**

2. **Connect and push** (run in this folder, replace `YOUR_USERNAME` with your GitHub username):

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/weather-fullstack.git
   git branch -M main
   git push -u origin main
   ```

   If GitHub shows you different commands (e.g. with your username already in the URL), you can use those instead.
