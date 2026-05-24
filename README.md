# MIN-Tube-Slim

「MIN-Tube-Slim」は、YouTube や動画視聴をより快適にするための Web アプリです。  
ブラウザからすぐにアクセスでき、PC・スマホ問わず軽量に動作することを目指しています。
Min-Tube-Proの独自派生です

### デモ


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
### ver1.3.0
- 🔔 通知ベルボタンを追加 — 登録チャンネルの新着動画をリアルタイム通知
- 登録チャンネル新着動画通知 API `/api/channel-latest` を追加
- すべての「MIN-Tube-Pro」表記を「MIN-Tube-Slim」に変更
- 再生方法から STUDY2525 (DL-Pro) と K-tube を削除
- 読み込み高速化: 静的ファイルへの Cache-Control ヘッダー最適化
- Service Worker のキャッシュ戦略を改善

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
