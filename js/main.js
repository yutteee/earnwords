{
    'use strict'

    const element = document.querySelector('#myText');
    element.addEventListener('change', handleChange);
    function handleChange(event) {
        const value = event.target.value;
        let changed =
        value.replace(/思う/g,'考える')
        .replace(/思った/g,'考えられた')
        .replace(/案/g,'アイディア')
        .replace(/思想/g,'イデオロギー')
        .replace(/惹句/g,'キャッチコピー')
        .replace(/依頼人/g,'クライアント')
        .replace(/最高潮/g,'クライマックス')
        .replace(/水晶/g,'クリスタル')
        .replace(/苦情/g,'クレーム')
        .replace(/事例/g,'ケース')
        .replace(/豪華/g,'ゴージャス')
        .replace(/会話/g,'コミュニケーション')
        .replace(/意思疎通/g,'コミュニケーション')
        .replace(/コーン/g,'とうもろこし')
        .replace(/木綿/g,'コットン')
        .replace(/合唱/g,'コーラス')
        .replace(/椀/g,'カップ')
        .replace(/カラフル/g,'色とりどり')
        .replace(/性格/g,'キャラクター')
        .replace(/人物/g,'キャラクター')
        .replace(/偽装/g,'カモフラージュ')
        .replace(/田舎/g,'カントリー')
        .replace(/専門家/g,'プロフェッショナル')
        .replace(/門/g,'ゲート')
        .replace(/にんにく/g,'ガーリック')
        .replace(/絨毯/g,'カーペット')
        .replace(/防御/g,'ガード')
        .replace(/守り/g,'ガード')
        .replace(/台所/g,'キッチン')
        .replace(/王/g,'キング')
        .replace(/国王/g,'キング')
        .replace(/女王/g,'クイーン')
        .replace(/経路/g,'コース')
        .replace(/杯/g,'グラス')
        .replace(/弩/g,'クロスボウ')
        .replace(/石弓/g,'クロスボウ')
        .replace(/外套/g,'オーバーコート')
        .replace(/貨幣/g,'コイン')
        .replace(/小銭/g,'コイン')
        .replace(/硬貨/g,'コイン')
        .replace(/金貨/g,'コイン')
        .replace(/銀貨/g,'コイン')
        .replace(/演奏会/g,'コンサート')
        .replace(/奉仕/g,'サービス')
        .replace(/おまけ/g,'サービス')
        .replace(/周期/g,'サイクル')
        .replace(/場面/g,'シーン')
        .replace(/光景/g,'シーン')
        .replace(/嫉妬/g,'ジェラシー')
        .replace(/紳士/g,'ジェントルマン')
        .replace(/設定/g,'シチュエーション')
        .replace(/都市/g,'シティ')
        .replace(/都会/g,'シティ')
        .replace(/町/g,'シティ')
        .replace(/街/g,'シティ')
        .replace(/飛躍/g,'ジャンプ')
        .replace(/飛ぶ/g,'ジャンプ')
        .replace(/宝石/g,'ジュエル')
        .replace(/公演/g,'ショー')
        .replace(/冗談/g,'ジョーク')
        .replace(/短剣/g,'ショットソード')
        .replace(/衝撃的/g,'ショッキング')
        .replace(/衝撃/g,'ショック')
        .replace(/買い物/g,'ショッピング')
        .replace(/店/g,'ショップ')
        .replace(/絹/g,'シルク')
        .replace(/銀/g,'シルバー')
        .replace(/同調/g,'シンクロ')
        .replace(/しょうが/g,'ジンジャー')
        .replace(/生姜/g,'ジンジャー')
        .replace(/簡素/g,'シンプル')
        .replace(/単純/g,'シンプル')
        .replace(/素朴/g,'シンプル')
        .replace(/お菓子/g,'スイーツ')
        .replace(/開始/g,'スタート')
        .replace(/始め/g,'スタート')
        .replace(/物語/g,'ストーリー')
        .replace(/大道芸/g,'ストリートパフォーマンス')
        .replace(/裸踊り/g,'ストリップ')
        .replace(/狙撃手/g,'スナイパー')
        .replace(/関者/g,'スパイ')
        .replace(/密偵/g,'スパイ')
        .replace(/香辛料/g,'スパイス')
        .replace(/演説/g,'スピーチ')
        .replace(/弁論/g,'スピーチ')
        .replace(/速度/g,'スピード')
        .replace(/速さ/g,'スピード')
        .replace(/精神/g,'スピリット')
        .replace(/さじ/g,'スプーン')
        .replace(/空間/g,'スペース')
        .replace(/空白/g,'スペース')
        .replace(/隙間/g,'スペース')
        .replace(/余地/g,'スペース')
        .replace(/専門家/g,'スペシャリスト')
        .replace(/不振/g,'スランプ')
        .replace(/不調/g,'スランプ')
        .replace(/傾斜路/g,'スロープ')
        .replace(/ごま/g,'セサミ')
        .replace(/小夜曲/g,'セレナーデ')
        .replace(/感覚/g,'センス')
        .replace(/腸詰/g,'ソーセージ')
        .replace(/剣/g,'ソード')
        .replace(/靴下/g,'ソックス')
        .replace(/対象/g,'ターゲット')
        .replace(/時間切れ/g,'タイムアウト')
        .replace(/金剛石/g,'ダイヤモンド')
        .replace(/下町/g,'ダウンタウン')
        .replace(/禁忌/g,'タブー')
        .replace(/塔/g,'タワー')
        .replace(/二枚舌/g,'ダブルスタンダード')
        .replace(/踊り子/g,'ダンサー')
        .replace(/舞踏/g,'ダンス')
        .replace(/舞踊/g,'ダンス')
        .replace(/乾酪/g,'チーズ')
        .replace(/鶏/g,'チキン')
        .replace(/鶏肉/g,'チキン')
        .replace(/挑戦者/g,'チャレンジャー')
        .replace(/好奇/g,'チャンス')
        .replace(/時期/g,'チャンス')
        .replace(/機会/g,'チャンス')
        .replace(/短衣/g,'チュニック')
        .replace(/主題/g,'テーマ')
        .replace(/宝冠/g,'ティアラ')
        .replace(/小冠/g,'ティアラ')
        .replace(/討論/g,'ディベート')
        .replace(/技術/g,'テクニック')
        .replace(/技巧/g,'テクニック')
        .replace(/意匠/g,'デザイン')
        .replace(/設計/g,'デザイン')
        .replace(/不利益/g,'デメリット')
        .replace(/欠点/g,'デメリット')
        .replace(/繊細/g,'デリケート')
        .replace(/縄張り/g,'テリトリー')
        .replace(/領土/g,'テリトリー')
        .replace(/出前/g,'デリバリー')
        .replace(/配達/g,'デリバリー')
        .replace(/天幕/g,'テント')
        .replace(/勝ち抜き戦/g,'トーナメント')
        .replace(/松明/g,'トーチ')
        .replace(/扉/g,'ドア')
        .replace(/戸/g,'ドア')
        .replace(/首位/g,'トップ')
        .replace(/首席/g,'トップ')
        .replace(/先頭/g,'トップ')
        .replace(/1番/g,'トップ')
        .replace(/一番/g,'トップ')
        .replace(/最高機密/g,'トップシークレット')
        .replace(/心的外傷/g,'精神的外傷')
        .replace(/トラウマ/g,'精神的外傷')
        .replace(/心の傷/g,'精神的外傷')
        .replace(/竜/g,'ドラゴン')
        .replace(/龍/g,'ドラゴン')
        .replace(/竜騎士/g,'ドラゴンライダー')
        .replace(/劇/g,'ドラマ')
        .replace(/芝居/g,'ドラマ')
        .replace(/演劇/g,'ドラマ')
        .replace(/劇的な/g,'ドラマチックな')
        .replace(/飲料/g,'ドリンク')
        .replace(/飲み物/g,'ドリング')
        .replace(/衣装/g,'ドレス')
        .replace(/隧道/g,'トンネル')
        .replace(/騎士/g,'ナイト')
        .replace(/番号/g,'ナンバー')
        .replace(/否定的/g,'ネガティブ')
        .replace(/首飾り/g,'ネックレス')
        .replace(/実録/g,'ノンフィクション')
        .replace(/版/g,'バージョン')
        .replace(/処女/g,'バージン')
        .replace(/生娘/g,'バージン')
        .replace(/宴会/g,'パーティー')
        .replace(/宴/g,'パーティー')
        .replace(/祝宴/g,'パーティー')
        .replace(/固い/g,'ハードな')
        .replace(/きつい/g,'ハードな')
        .replace(/相手/g,'パートナー')
        .replace(/配偶者/g,'パートナー')
        .replace(/薬草/g,'ハーブ')
        .replace(/香草/g,'ハーブ')
        .replace(/和声/g,'ハーモニー')
        .replace(/真珠/g,'パール')
        .replace(/桶/g,'バケツ')
        .replace(/手桶/g,'バケツ')
        .replace(/合言葉/g,'パスワード')
        .replace(/背景/g,'バックボーン')
        .replace(/恐慌/g,'パニック')
        .replace(/障壁/g,'バリア')
        .replace(/狩り/g,'ハンティング')
        .replace(/狩猟/g,'ハンティング')
        .replace(/男前/g,'ハンサム')
        .replace(/美男子/g,'ハンサム')
        .replace(/頂点/g,'ピーク')
        .replace(/野獣/g,'ビースト')
        .replace(/麦酒/g,'ビール')
        .replace(/英雄/g,'ヒーロー')
        .replace(/癇癪/g,'ヒステリー')
        .replace(/拾い上げる/g,'ピックアップする')
        .replace(/拾い上げた/g,'ピックアップした')
        .replace(/終止符/g,'ピリオド')
        .replace(/窮地/g,'ピンチ')
        .replace(/苦境/g,'ピンチ')
        .replace(/危機/g,'ピンチ')
        .replace(/ヒント/g,'手がかり')
        .replace(/長靴/g,'ブーツ')
        .replace(/ふるいわけ/g,'フィルタリング')
        .replace(/誇り/g,'プライド')
        .replace(/私事/g,'プライベート')
        .replace(/私用/g,'プライベート')
        .replace(/闇市/g,'ブラックマーケット')
        .replace(/闇市場/g,'ブラックマーケット')
        .replace(/白金/g,'プラチナ')
        .replace(/王子/g,'プリンス')
        .replace(/皇子/g,'プリンス')
        .replace(/王女/g,'プリンセス')
        .replace(/皇女/g,'プリンセス')
        .replace(/果物/g,'フルーツ')
        .replace(/果実/g,'フルーツ')
        .replace(/板金鎧/g,'プレートメイル')
        .replace(/遊び人/g,'プレイボーイ')
        .replace(/休憩/g,'ブレイク')
        .replace(/腕飾り/g,'ブレスレット')
        .replace(/腕輪/g,'ブレスレット')
        .replace(/圧力/g,'プレッシャー')
        .replace(/心的圧力/g,'プレッシャー')
        .replace(/新鮮な/g,'フレッシュな')
        .replace(/生の/g,'フレッシュな')
        .replace(/経過/g,'プロセス')
        .replace(/求婚/g,'プロポーズ')
        .replace(/求愛/g,'プロポーズ')
        .replace(/金髪/g,'ブロンド')
        .replace(/天馬/g,'ペガサス')
        .replace(/悲観主義者/g,'ペシミスト')
        .replace(/ペット/g,'愛玩動物')
        .replace(/寝台/g,'ベッド')
        .replace(/胡椒/g,'ペッパー')
        .replace(/腰帯/g,'ベルト')
        .replace(/境界/g,'ボーダー')
        .replace(/用心棒/g,'ボディーガード')
        .replace(/瓶/g,'ボトル')
        .replace(/低空飛翔/g,'ボバリング')
        .replace(/奉仕活動/g,'ボランティア')
        .replace(/奉仕者/g,'ボランティア')
        .replace(/奉仕/g,'ボランティア')
        .replace(/角笛/g,'ホルン')
        .replace(/印/g,'マーク')
        .replace(/魔術師/g,'マジシャン')
        .replace(/魔術/g,'マジック')
        .replace(/奇術師/g,'マジシャン')
        .replace(/奇術/g,'マジック')
        .replace(/地図/g,'マップ')
        .replace(/手引き/g,'マニュアル')
        .replace(/解説書/g,'マニュアル')
        .replace(/怪異/g,'ミステリー')
        .replace(/怪奇/g,'ミステリー')
        .replace(/乳/g,'ミルク')
        .replace(/月長石/g,'ムーンストーン')
        .replace(/情緒/g,'ムード')
        .replace(/気分/g,'ムード')
        .replace(/鎧/g,'メイル')
        .replace(/伝言/g,'メッセージ')
        .replace(/言立て/g,'メッセージ')
        .replace(/声明/g,'メッセージ')
        .replace(/主旋律/g,'メロディー')
        .replace(/仲間/g,'メンバー')
        .replace(/構成員/g,'メンバー')
        .replace(/顔ぶれ/g,'メンバー')
        .replace(/一角獣/g,'ユニコーン')
        .replace(/照明/g,'ライト')
        .replace(/飯/g,'ライス')
        .replace(/米/g,'ライス')
        .replace(/好敵手/g,'ライバル')
        .replace(/線/g,'ライン')
        .replace(/恋物語/g,'ラブストーリー')
        document.querySelector('.log').innerHTML = changed;
    };
}
// もっと綺麗に記述したい

// let before = ["思う", "米", "思った"];
// let after = ["考える", "ライス", "考えられた"];
// let src = "思う米思った";


// for(let i=0, len=before.length; i<len; i++){
//     test = src.replace(before[i], after[i],"g");
// }

// console.log(test);