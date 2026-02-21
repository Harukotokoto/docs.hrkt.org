---
title: /module コマンド詳細
description: モジュールの有効化・無効化で、サーバーごとに機能のON/OFFを切り替えます。
---

# /module コマンド詳細 {#module}

`/module` は、Mikuの**機能単位（モジュール）**をサーバーごとに有効・無効にするコマンドです。使わない機能はオフにすることで、挙動をシンプルにできます。

## 概要

| 項目 | 内容 |
|------|------|
| **コマンド** | `/module` |
| **必要権限** | サーバー管理（ManageGuild） |
| **サブコマンド** | `enable`（有効化） / `disable`（無効化） |

## 使い方

1. `/module enable` または `/module disable` を選択
2. **module** で対象モジュールを選ぶ
3. 実行すると、そのサーバーでそのモジュールがONまたはOFFになります

::: tip
設定はサーバーごとです。別サーバーではデフォルトの状態のままです。
:::

## モジュール一覧

以下のモジュールを有効化・無効化できます。

| モジュールID | 説明 |
|--------------|------|
| **leveling** | レベル・経験値（XP）の付与。メッセージ・リアクションでXPが入り、`/rank`・`/leaderboard` などが有効になります。オフにするとレベルは増えません。 |
| **role_keeper** | ロールキーパー。メンバーが退出したときに付与されていたロールを記録し、再参加時に自動で付け直します。 |
| **up_notification** | **Up通知**。Disboard 等でサーバーを「Up」したときに感謝メッセージを送り、2時間後に「Upの時間です」と通知します。通知を止めたい場合は `bump_notification` とあわせて無効化できます。 |
| **bump_notification** | **Bump通知**。Bump が実行されたときに感謝メッセージを送り、2時間後に「Bumpの時間です」と通知します。 |
| **dm_disabler** | **DM無効化**。有効にすると、そのサーバーではBotからのDMが一定期間無効になります（Discordのサーバー設定「DMを無効にする」に連動します）。 |
| **twitter_paster** | **Twitter/X リンクの貼り替え**。`twitter.com` / `x.com` のリンクを `fxtwitter.com` に置き換え、プレビューがきれいに表示されるようにします。 |
| **message_expand** | **メッセージの展開**。Discordのメッセージリンク（`discord.com/channels/...`）が投稿されたとき、そのメッセージ内容を展開して表示します。 |
| **login** | **ログイン記録**。`/login` で設定したチャンネルに、メンバーのログイン（メッセージ送信等）を記録します。オフにするとログイン記録は行われません。別途チャンネルの設定を行う必要があります ([/loginを参照](/docs/commands/moderation.html#login)) |

## 注意事項

- **dm_disabler** を有効にすると、その時点でサーバーの「DMを無効にする」が翌日まで有効になる設定が行われます。
- **up_notification** と **bump_notification** は、Disboard 等の Bot が送る特定のメッセージに反応します。それらの Bot を導入していないサーバーでは、ON/OFF による見た目の変化はありません。
- モジュールを無効にしても、**既に保存されているデータ**（レベル・ログイン履歴など）は消えません。再度有効にすると続きから利用できます。

## 関連コマンド

- [管理コマンド一覧](/docs/commands/moderation#module) — `/module` の簡易説明
- [ログイン設定](/docs/commands/moderation#login) — `login` モジュールで使う `/login` の設定

---

[← コマンドリファレンストップ](/docs/commands/) | [管理コマンド一覧へ](/docs/commands/moderation#module)
