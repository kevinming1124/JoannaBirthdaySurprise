# Joanna Birthday Surprise

送給 Joanna 的手機優先互動式生日網站。完整需求與互動規格請參考 [Structure.md](./Structure.md)。

## 本機執行

### 這台電腦直接啟動

專案依賴已經安裝完成，不需要輸入 `npm` 或 `pnpm`。在 PowerShell 執行：

```powershell
cd "D:\BirthDay Project"
.\start-local.cmd
```

也可以在檔案總管中直接雙擊 `start-local.cmd`。

啟動後會自動開啟瀏覽器；若沒有自動開啟，請前往：

```text
http://localhost:5173/JoannaBirthdaySurprise/
```

停止網站時，在啟動網站的視窗按下 `Ctrl + C`。

### 使用一般 Node.js 環境

如果未來將專案移到其他電腦，請先安裝包含 npm 的 Node.js 20.19 以上版本，接著在專案資料夾執行：

```powershell
npm install
npm run dev
```

終端機會顯示本機網址，通常為：

```text
http://localhost:5173/JoannaBirthdaySurprise/
```

按住 `Ctrl` 再點擊網址，或將網址貼到瀏覽器即可開啟。

停止網站時，在終端機按下 `Ctrl + C`。

## 正式建置與本機預覽

```powershell
npm run build
npm run preview
```

正式檔案會產生在 `dist` 資料夾。預覽網址通常為：

```text
http://localhost:4173/JoannaBirthdaySurprise/
```

## 替換測試照片

目前測試圖片位於：

```text
public/images/placeholders/
```

正式照片請先裁切成直式 9:16（例如 900 × 1600 或 1080 × 1920），再放進 `public/images`。接著只需要修改：

```text
src/data/content.js
```

`photoAssets.destinations` 是第三題的三張照片；`photoAssets.carousel` 是最後的照片跑馬燈。圖片路徑從 `public` 資料夾內部開始，例如：

```js
asset("images/amusement-park.jpg")
```

第三題照片與照片跑馬燈都會使用 9:16 直式容器顯示。網站只會依螢幕尺寸等比例縮放，不會裁切、壓縮或套用濾鏡。

## 替換生日卡片內容

開啟 `src/data/content.js`，修改 `letterContent`：

```js
export const letterContent = {
  heading: "給最可愛的 Joanna",
  paragraphs: [
    "第一段想說的話。",
    "第二段想說的話。",
  ],
  signature: "Kevin",
};
```

第四題選擇的約會內容會由程式自動放在信紙左下角，不需要手動加入。

## GitHub Pages

專案已包含 `.github/workflows/deploy-pages.yml`。建立名為 `JoannaBirthdaySurprise` 的 GitHub repository 並推送到 `main` 分支後：

1. 進入 repository 的 **Settings → Pages**。
2. 在 **Build and deployment** 將 Source 設為 **GitHub Actions**。
3. 推送到 `main` 後，工作流程會自動建置並發布網站。

Vite 已設定 GitHub Pages 基礎路徑 `/JoannaBirthdaySurprise/`。
