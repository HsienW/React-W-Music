# React W.Music

> 技術：React16、Redux、React-Router、Webpack、Babel、ESLint

> UI：[Ant Design](https://ant.design/index-cn)

> API：[Spotify Web API](https://developer.spotify.com/web-api/)

## 說明： 
#### W.Music 是一個串接 Spotify Web API 所完成的音樂播放器，主要由以下四塊 Model 所組成

- **Auth** ： 登入相關、Spotify 獲取帳號授權；
- **LeftMenu** ： 切換音樂類型列表、搜尋音樂、歌手、專輯；
- **Content** ： 顯示音樂列表、各種搜尋的內容呈現；
- **PlayBar** ： 顯示播放音樂內容、歌曲播放控制、音量控制；

## Demo：

![img](https://github.com/HsienW/React-W-Music/blob/master/React-W-Music-Demo.gif)

## 功能:
#### LeftMenu: 音樂分類
  - Featured: 該期精選音樂
  - Genres: 曲風分類 (流行樂、嘻哈、浪漫、鄉村等等)
  - New Release: 最新發行的單曲、專輯
  - Search Bar: 搜尋歌手、專輯、歌曲

#### Content: 內容顯示
  - PlayList: 顯示各種音樂類型、曲風播放列表、專輯的詳細歌曲
  - Search Content: 顯示搜尋內容
    - Artists: 相關歌手的熱門歌曲、歷年專輯列表、粉絲人數
    - Albums: 相關專輯與詳細音樂
    - Tracks: 各類有關的音樂作品、有關的音軌
    
#### PlayBar: 歌曲內容控制
  - PlaySong: 顯示當前播放歌曲的專輯封面、歌曲名稱、專輯名稱
  - PlayTool: 上一首、下一首、播放、暫停
  - PlayProgress: 當前播放進度、可快轉、倒退
  - PlayVolume: 音量控制
  
## 結構
```
.
├── dist
├── node_modules
├── src
│   ├── app.js
│   ├── index.html
└── app
    ├── App.jsx
    ├── index.html
    ├── ReduxStore.js
    ├── ApiCenter (管理全部 API Method、Respond)
    │   ├── ApiCenter.js
    │   ├── Album
    │   ├── Artist
    │   ├── Browse
    │   ├── PlayList
    │   ├── Search
    ├── Modules (管理全部 Component)
    │   ├── Album  專輯內容
    │   ├── Artist 歌手資料
    │   ├── Audio  處理音訊元件
    │   ├── Auth  登入頁、授權頁
    │   ├── Error 錯誤提示
    │   ├── Featured 精選歌曲列表
    │   ├── Genres  曲風分類
    │   ├── LeftMenu  音樂類型列表
    │   ├── Main  主頁元件
    │   ├── NewRelease  新發行內容
    │   ├── PlayBar  播放器主元件
    │   ├── PlayBarTool  播放器控制按鈕
    │   ├── PlayList  播放列表元件
    │   ├── PlayListContent  當前播放歌曲的播放列表或專輯內容元件
    │   ├── PlayProgress  當前播放歌曲的進度
    │   ├── PlaySong   當前播放歌曲的資料顯示
    │   ├── PlayVolume  播放音量控制
    │   ├── Portal  處理 URL Path 元件
    │   ├── SearchAlbums  搜尋專輯內容
    │   ├── SearchArtists  搜尋歌手內容
    │   ├── SearchBar  搜尋欄元件
    │   ├── SearchContent  搜尋主元件
    │   ├── SearchTracks  搜尋歌曲內容
    ├── StyleCenter (管理主要風格設定)
    │   ├── StyleCenter.js
    └── WebStorage (管理 Storage Method)
        ├── WebStorage.js
        └── WebStorageKeys

```
