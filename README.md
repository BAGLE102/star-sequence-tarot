# 星序 Tarot

一個無廣告、無追蹤、可直接部署到 GitHub Pages 的繁體中文塔羅抽牌網站。

[![Deploy GitHub Pages](https://github.com/BAGLE102/star-sequence-tarot/actions/workflows/pages.yml/badge.svg)](https://github.com/BAGLE102/star-sequence-tarot/actions/workflows/pages.yml)

**線上網站：<https://bagle102.github.io/star-sequence-tarot/>**

## 功能

- 78 張 Rider–Waite–Smith 完整牌組
- 兩種可切換的抽牌體驗：
  - **快速翻牌**：洗牌後直接進入翻牌
  - **完整儀式**：進入自由牌桌後自動散牌，再手動洗牌；從完整牌列選擇精確切牌位置，最後逐張選牌
- 切牌與選牌皆完整展開 78 張牌，依螢幕寬度自動排成多行，不隱藏牌張
- 9 種牌陣：一張指引、兩張對話、時間之流、身心靈、五張洞察、關係之鏡、二擇一、馬蹄鐵、凱爾特十字
- 僅大阿爾克納、僅正位設定
- 使用瀏覽器 `crypto.getRandomValues()` 洗牌
- 全部翻牌後可下載結果 PNG，或直接複製結果圖片到剪貼簿
- 洗牌時可像操作實體牌一樣，在桌面上按住牌堆來回推動；牌背會獨立散開、旋轉並重新收攏
- 支援滑鼠、觸控與鍵盤操作；支援裝置時提供輕微震動回饋
- 完全靜態，沒有後端、Cookie、分析或第三方程式碼
- 手機、平板與桌面響應式版面

## GitHub Pages 部署

repository 內含 `.github/workflows/pages.yml`。第一次部署請到 **Settings → Pages**，將 **Source** 設為 **GitHub Actions**；之後推送到 `main` 就會自動部署，不需建置工具或伺服器。

也可以直接雙擊 `index.html` 在本機預覽。

## 圖像來源與授權

牌面採用 Pamela Colman Smith 為 1909 年 Rider–Waite–Smith Tarot 所繪製的經典圖像。本專案使用 [luciellaes 整理的 CC0 彩色牌組](https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0)，經由 [yunruse/tarot](https://github.com/yunruse/tarot) 專案取得；後者亦以 CC0 釋出。

原始牌面在美國、英國以及一般著作權期限為作者逝世後 70 年或更短的地區屬公版。若你在其他司法管轄區發布或商用，仍應自行確認當地法規。網站的中文短解讀為本專案原創文字。

## 自訂

- 網站名稱與文字：`index.html`
- 色彩與版面：`styles.css` 最上方的 CSS 變數
- 牌義與牌陣：`app.js`
