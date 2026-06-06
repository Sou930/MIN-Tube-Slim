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

### v1.4.1（最新）

- プレイリストの連続再生でエラー（例: `152 - 5`）が出て動画を再生できないバグを修正しました。
  - 1 つの再生方法で失敗しても、別の方法に自動で切り替えて再生を続けるようにしました。

### v1.4.0

- 再生リストの動画を続けて自動再生できる「連続再生」ページを追加しました。
- 動画の再生画面から、その動画を再生リストに「保存」できるボタンを追加しました。
- コメントの返信が見られるようになり、投稿時期も「◯分前」のように表示されます。
- アプリの更新内容を確認できる「更新履歴」ページを追加しました。
- ホームの「すべて（おすすめ）」と、動画の下に出る関連動画の精度を改善しました。
  以前は関係のない動画が多く混ざっていましたが、見ている内容に近い動画が出やすくなりました。
- 再生画面のデザインを見やすく整えました。

過去のバージョンを含む詳しい変更点は [CHANGELOG.md](./CHANGELOG.md) をご覧ください。

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
