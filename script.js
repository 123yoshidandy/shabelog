window.addEventListener('load', init);

// テーマのリストを定数として生成する
const themaList = ['テーマ1', 'テーマ2', 'テーマ3', 'テーマ4', 'テーマ5', 'テーマ6', 'テーマ7', 'テーマ8', 'テーマ9', 'テーマ10'];

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
