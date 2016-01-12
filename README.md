# AnotherCurrencyShop.js

## 概要

ショップにおいて、ゴールドに加え、変数の値でアイテムが購入できるようにする拡張プラグインです。  


## スクリーンショット

* 変数の値で購入

![スクリーンショット](http://www.rinscript.sakura.ne.jp/tkool/mv/github_images/another_currency_shop_plugin_on_02_shop01.png)

![スクリーンショット](http://www.rinscript.sakura.ne.jp/tkool/mv/github_images/another_currency_shop_plugin_on_02_shop02.png)

* 通常のゴールドで購入も可能

![スクリーンショット](http://www.rinscript.sakura.ne.jp/tkool/mv/github_images/another_currency_shop_plugin_on_02_shop03.png)

## デモ

[AnotherCurrencyShop](http://rinscript.sakura.ne.jp/tkool/mv/Project4/)


## サンプルプロジェクトについて

このリポジトリ自体がサンプルプロジェクトとなっております。  
「Download ZIP」より、ファイルをダウンロードして、RPGツクールMVで開いてください。


## 使い方

1.  AnotherCurrencyShop.jsをダウンロードし、```ツクールプロジェクト/js/plugins/```に配置します
2.  以下の画像のように、プラグインを有効にします  

   ![never_watch_picture.png](http://www.rinscript.sakura.ne.jp/tkool/mv/github_images/another_currency_shop_plugin_on.png)

    |パラメーター名|説明|
    |:--|:----|
    |Currency Name|ゴールドウィンドウの通貨名称です。Ｇの代わりに表示する文字を指定します|
    |Variable Number|お金の代わりに利用する値を格納した変数の番号を指定します|
    |Buy Command Name|アイテムを購入する際に表示するコマンド文字列です。|
    |Sell Command Name|アイテムを売却する際に表示するコマンド文字列です。|

3.  以下画像のように ```プラグインコマンド``` を指定します

   ![never_watch_picture.png](http://www.rinscript.sakura.ne.jp/tkool/mv/github_images/another_currency_shop_plugin_on_02.png)

   ```
   // お金の代わりに変数（初期値：1番目の変数)を利用するように設定
   AnotherCurrencyShop on

   // ショップの処理

   // ショップをお金を利用するように戻す
   AnotherCurrencyShop off

   ```


### ライセンスについて

このプラグインはMITライセンスのもとで公開されています。  
詳細については、LICENSE.txtをご覧ください。
