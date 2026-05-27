# MIN-Tube-Slim

「MIN-Tube-Slim」は、YouTube や動画視聴をより快適にするための Web アプリです。  
ブラウザからすぐにアクセスでき、PC・スマホ問わず軽量に動作することを目指しています。
MIN-Tube の独自派生です

### デモ
https://min-tube-slim.duckdns.org

## デプロイ

ワンクリックで自分の環境にデプロイできます。

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Sou930/MIN-Tube-Slim)

### Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Sou930/MIN-Tube-Slim)

### Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?templateUrl=https://github.com/Sou930/MIN-Tube-Slim)

---

## 更新履歴
### v1.4.0
**✨ 新機能**
- コメントの投稿時期を相対時刻で表示
- コメントの返信を見られる機能を追加
### v1.3.3
**⚡ 改善**
- 検索バックエンドに **Study2525 (2525)** を並列ソースとして再導入
  - `youtube-search-api` と Study2525 (Invidious 互換) を **同時並列リクエスト**
  - **Promise.race** ベースの戦略で、先に返って来た結果を即座にユーザーへ返却（体感速度の大幅向上）
  - 後発の結果はバックグラウンドでマージし、5 分キャッシュに蓄積（次回アクセス時の精度向上）
  - 片方のバックエンドが落ちていても継続動作する耐障害設計
  - 複数ミラー (`study2525.glitch.me`, `yt.chocolatemoo53.com`) でフェイルオーバー

**🎨 ANIME Viewer のデザインを大幅刷新**
- カラーパレットを「アニメ・ノワール」テーマに刷新（紫→ピンク→オレンジのグラデーション）
- 浮遊する Orb アニメーション・グリッドオーバーレイ・ノイズテクスチャによる没入感のある背景
- ヘッダーをスティッキー化し、スクロール時にシャドウ・透明度を変化させる
- お気に入り / 履歴をモーダルではなく **タブビュー** に変更（件数バッジ付き）
- ジャンルチップ（人気・新作・バトル・ラブコメ・ファンタジー・SF・日常・スポーツ）でワンタップ検索
- カードに「♥お気に入り済み」バッジ・グラデーションボーダーを追加
- 検索履歴を 10 件まで保存・クリアボタン付きドロップダウン
- 視聴履歴を 30 件まで拡張、相対時刻表示（◯分前 / ◯時間前 / ◯日前）
- モバイル UI を全面的に再設計（小型端末でも 2 カラムで快適）
- `prefers-reduced-motion` 対応で動作軽減モードに配慮

### v1.3.2
- APIレスポンスキャッシュを改善
- スケルトンUIを改善
- フィルター位置をYouTube準拠に改善
### v1.3.1
**改善点**
- モバイル UI の改善
  
**以下の問題を修正**
- 「新しい再生リストを作成」ボタンの文字が見にくい問題
- チャンネルアイコンの上にイニシャル 1 文字が表示されるバグ
### v1.3.0
**✨ 新機能**
- 登録チャンネルの新着動画通知システムを追加
- 自動で次の動画を再生する機能を追加
- シアターモードを追加
- 検索フィルターを追加
- 関連ハッシュタグ表示に対応
- ダウンロードリンク生成機能を追加
- ジャンルやキーワードから自動でプレイリストを作成する機能を追加
  
**⚡ 改善**
- 読み込み速度を改善
- API機能を強化
- デザインを改善
- ローディング画面（土星で「Mino」と表示される画面）を削除
  
**🧹 削除・整理**
- 再生方法の選択肢から「2525」と「K-Tube」を削除
- Elixirプロキシを削除
- SystemCheckを削除
- Abyssを削除
  
以下のゲームを削除
- 人狼
- Deep Miner
- SnowBall.io
- SnowRide
- Terraria
- 2048 (PC)
- Undertale (Sans Fight)
- 「ANIME」と「Game」カテゴリーを統合
- Ktubeを削除
### ver1.2.0
- 動画一覧ページにチャンネルの画像が表示されずに簡易表示されてしまうバグを修正
- MinTube での偽装ページ / ローディング表示 (humanVerified 確認画面) を削除
- 検索結果にチャンネルとプレイリストを表示するよう追加
- Elixirプロキシを削除
- 読み込みを最大限高速化
### ver1.1.0
- 12アプリを削除
### ver1.0.0
MinTubeの派生プロジェクトとしてSlimが開始

---

## 必要要件

- **Node.js** (推奨: LTS)
- **npm** または **yarn**

---

## ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm start
# または
node index.js
```

---


</div>
