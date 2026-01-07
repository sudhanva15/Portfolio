# Git Remote Notes

No `origin` remote is configured in this repository (checked `.git/config`).

To connect this local repo to GitHub:

1. Create a new repository on GitHub (e.g., `https://github.com/<USERNAME>/<REPO_NAME>`).
2. From the project root, add the remote and push the `main` branch:

```bash
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
git branch -M main   # optional if you want main as the default branch
git push -u origin main
```

Replace `<USERNAME>/<REPO_NAME>` with your actual GitHub handle and repository name. After linking, every `git push` to `main` (or your chosen default branch) will sync changes to GitHub so Vercel can deploy from that source.
