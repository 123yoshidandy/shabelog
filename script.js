window.addEventListener('load', init);

// テーマのリストを定数として生成する
const themaList = [
    '好きな食べ物は？',
    '好きなアニメは？',
    '好きな映画は？',
    '好きな音楽は？',
    '好きな本は？',
    '好きなスポーツは？',
    '好きなゲームは？',
    '好きな場所は？',
    '好きな季節は？',
    '好きな色は？',
    '好きな動物は？',
    '好きな花は？',
    '好きな果物は？',
    '好きなお菓子は？',
    '好きな飲み物は？',
    '好きなアーティストは？',
    '好きなキャラクターは？',
    '好きな言葉は？',
    '好きな形は？',
    '好きな数字は？',
    '好きな服は？',
    '好きなアクセサリーは？',
    '好きな香りは？',
    '好きな季節は？',
    '好きな天気は？',
    '好きな時間は？',
    '好きな場所は？',
    '好きな国は？',
    '好きな都道府県は？',
    '好きな街は？',
    '今一番欲しいものは？',
    '今一番行きたい場所は？',
    '今一番行きたい国は？',
    '今一番行きたい都道府県は？',
    '今一番行きたい街は？',
    '座右の銘は？',
    '好きなことは？',
    '子供のときになりたかった職業は？',
    '今なりたい職業は？',
    '好きなお店は？',
    '好きなカフェは？',
    '好きなレストランは？',
    '好きなジャンルは？',
    '好きなスポットは？',    
];

function init() {
    shuffle();
}

function shuffle() {
    // テーマのリストをシャッフルする
    shuffleArray(themaList);

    // シャッフルしたテーマを表示する
    document.getElementById('thema1_text').innerHTML = themaList[0];
    document.getElementById('thema2_text').innerHTML = themaList[1];
    document.getElementById('thema3_text').innerHTML = themaList[2];
}

// 配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // 0 以上 i 以下のランダムな整数を取得
        const r = Math.floor(Math.random() * (i + 1));
        // 配列の要素の並び替えを行う
        [array[i], array[r]] = [array[r], array[i]];
    }
}
