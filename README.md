# Nihongo Sprint Pro (PWA)
日常溝通 × 旅遊會話的零基礎日語學習網站（PWA）。支援離線與「加到主畫面」。

## GitHub Pages 部署
1. 在 GitHub 建立新 Repository（例：`nihongo-sprint-pro`）。
2. 上傳本專案所有檔案到 `main` 分支根目錄。
3. 進入 **Settings → Pages**：
   - Build and deployment：選 **GitHub Actions**（本 repo 已附 `.github/workflows/pages.yml`）。
4. Push 後 Actions 會自動部署，網址會出現在 **Environments → github-pages**。

### 替代方案：Deploy from a branch
- Settings → Pages → Build and deployment → **Deploy from a branch**
- Branch: `main` / 根目錄 `/`
